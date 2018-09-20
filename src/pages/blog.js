import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Header from '../components/header';
import PostPreview from '../components/post-preview';

import typewriterUrl from '../assets/images/blog-typewriter.svg';

const BlogIndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout>
      <Helmet title="Blog" />
      <div className="mw-700 mh-auto">
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
      <div className="mw-900 mh-auto mt-6">
        <img src={typewriterUrl} alt="" />
      </div>
    </Layout>
  );
};

export default BlogIndexPage;

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: { fields: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 170)
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
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
