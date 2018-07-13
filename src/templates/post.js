import React from 'react';
import Head from 'react-helmet';
import Link from 'gatsby-link';

import PostContent from '../components/post-content';
import utils from '../utils';

const PostPage = props => {
  const { data } = props;
  const { markdownRemark: post } = data;

  const date = new Date(post.fields.date);

  return (
    <div>
      <Head>
        <title>{post.frontmatter.title}</title>
        <meta
          name="description"
          content={post.frontmatter.description || post.excerpt}
        />
      </Head>
      <article className="Post">
        <header className="ta-center mb-4">
          <h1 className="fs-24 fw-semibold">{post.frontmatter.title}</h1>
          <time className="d-block fs-14 mt-2" dateTime={date.toISOString()}>
            {utils.formatPostTimestamp(date)}
          </time>
          <div className="Post-headerDivider" />
        </header>
        <div>
          <PostContent html={post.html} />
        </div>
        <div>
          <Link to="/blog">Back</Link>
        </div>
      </article>
    </div>
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
      }
    }
  }
`;
