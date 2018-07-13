import React from 'react';
import Helmet from 'react-helmet';
import Image from 'gatsby-image';
import Link from 'gatsby-link';
import utils from '../utils';

const BlogIndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  const { siteMetadata: meta } = data.site;

  return (
    <div>
      <Helmet title="Blog" />
      <header className="mb-4">
        <h1 className="fs-36 fw-semibold mb-2">Blog</h1>
        <p>We like to write about important topics</p>
      </header>
      {posts.map(({ node: post }) => {
        const date = new Date(post.fields.date);

        return (
          <Link to={post.fields.slug} key={post.id}>
            <div className="x-m xa-center-m mb-3">
              <div className="w-50p-m pr-3-m">
                <Image sizes={post.frontmatter.cover.childImageSharp.sizes} />
              </div>
              <div className="w-50p-m">
                <time className="fs-14 mb-2" dateTime={date.toISOString()}>
                  {utils.formatPostTimestamp(date)}
                </time>
                <h3 className="fs-18 fw-semibold">{post.frontmatter.title}</h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogIndexPage;

export const query = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: { fields: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 105)
          id
          fields {
            date
            slug
          }
          frontmatter {
            title
            cover {
              publicURL
              childImageSharp {
                sizes(maxWidth: 1200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
