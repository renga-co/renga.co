import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

const BlogIndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  const meta = data.site.siteMetadata;

  return (
    <div>
      <Helmet title="Blog" />
      <h1>Blog</h1>
      <p>We like to write about important topics</p>
      {posts.map(({ node: post }) => (
        <div key={post.id}>
          <Link to={post.fields.slug}>
            {post.frontmatter.title} &ndash; {post.fields.date}
          </Link>
        </div>
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
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          fields {
            date(formatString: "MMMM DD, YYYY")
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
