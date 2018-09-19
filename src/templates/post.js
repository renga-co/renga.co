import React from 'react';
import Head from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import PostContent from '../components/post-content';
import Title from '../components/type-title';
import utils from '../utils';
import './post.css';

const authorMap = {
  jared: {
    name: 'Jared Henriques',
  },
};

const PostPage = props => {
  const { data } = props;
  const { markdownRemark: post } = data;

  const date = new Date(post.fields.date);

  return (
    <Layout>
      <div className="mw-700 mh-auto mt-5">
        <Head>
          <title>{post.frontmatter.title}</title>
          <meta
            name="description"
            content={post.frontmatter.description || post.excerpt}
          />
        </Head>
        <article className="Post">
          <header className="ta-center mt-4 mb-6">
            <Title>{post.frontmatter.title}</Title>
            <div className="fs-18 mt-2 c-gray3">
              <span>{authorMap[post.frontmatter.author].name}</span>
              <span className="fs-14 o-50p ph-1 p-relative" style={{ top: -1 }}>
                &bull;
              </span>
              <time dateTime={date.toISOString()}>
                {utils.formatPostTimestamp(date)}
              </time>
            </div>

            <div className="Post-headerDivider" />
          </header>
          <div>
            <PostContent html={post.html} />
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default PostPage;

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        date
        slug
      }
      frontmatter {
        title
        author
      }
    }
  }
`;
