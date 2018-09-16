import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import Title from '../components/type-title';
import Header from '../components/header';
import Content from '../components/content';
import PostPreview from '../components/post-preview';
import utils from '../utils';

const BlogIndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  const { siteMetadata: meta } = data.site;

  return (
    <div className="mw-700 mh-auto">
      <Helmet title="Blog" />
      <Header
        title="Our Blog"
        subtitle={`
        We love sharing our process of building a sustainable creative brand.
        New here? Start with our list of popular posts.
      `}
      />
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
