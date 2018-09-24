import React from 'react';
import Head from 'react-helmet';
import { graphql } from 'gatsby';
import Callout from '../components/callout';
import CalloutLink from '../components/type-callout-link';
import ContactLink from '../components/contact-link';
import Layout from '../components/layout';
import PostContent from '../components/post-content';
import Title from '../components/type-title';
import utils from '../utils';
import squiggleUrl from '../assets/images/squiggle-c.svg';
import './post.css';

const authorMap = {
  jared: {
    name: 'Jared Henriques',
  },
  ben: {
    name: 'Ben Bartosik',
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
          <header className="ta-center mv-4">
            <Title>{post.frontmatter.title}</Title>
            <div className="fs-18 mt-2 c-gray3">
              <span>{authorMap[post.frontmatter.author].name}</span>
              <span
                className="o-50p ph-1 p-relative"
                style={{ fontSize: 10, top: -2 }}>
                &bull;
              </span>
              <time dateTime={date.toISOString()}>
                {utils.formatPostTimestamp(date)}
              </time>
            </div>
            <div className="Post-headerDivider bgc-gray2 o-50p mh-auto mv-5" />
          </header>
          <div>
            <PostContent html={post.html} />
          </div>
          <div className="mv-6 ta-center c-geraldine pe-none us-none">
            <img alt="" style={{ maxWidth: 300 }} src={squiggleUrl} />
          </div>
          <Callout
            className="br-30 pt-2 pb-4 mt-5"
            title="Want to talk more about this?"
            body="At Renga, we specialize in helping you discover your brand identity."
            links={
              <CalloutLink className="fs-16">
                <ContactLink withArrowIcon>Let’s chat </ContactLink>
              </CalloutLink>
            }
          />
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
