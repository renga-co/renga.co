import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import PostPreview from '../components/post-preview';
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
      {posts.map(({ node: post }) => (
        <Link to={post.fields.slug} key={post.id}>
          <PostPreview post={post} />
        </Link>
      ))}
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