import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import Header from '../components/header';
import PostPreview from '../components/post-preview';

import typewriterUrl from '../assets/images/blog-typewriter.svg';

const description =
  'We love sharing our process of building a sustainable creative brand.';

const BlogIndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout>
      <MetaTags title="Blog" description={description} />
      <div className="mw-700 mh-auto">
        <Header title="Our Blog" subtitle={description} />
        <div className="pv-3">
        {posts.map(({ node: post }) => (
          <Link to={post.fields.slug} key={post.id}>
            <PostPreview post={post} />
          </Link>
        ))}
        </div>
      </div>
      <div className="mw-700 mh-auto mt-5-m">
        <img src={typewriterUrl} alt="A typewriter overflowing with pages shows the (not so quick) rate at which we like to share our knowledge." className="pe-none us-none" />
      </div>
    </Layout>
  );
};

export default BlogIndexPage;

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: {
        fields: { type: { eq: "blog" } }
        frontmatter: { published: { ne: false } }
      }
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
            excerpt
          }
        }
      }
    }
  }
`;
