import React from 'react';
import { graphql } from 'gatsby';
import Callout from '../components/callout';
import CalloutLink from '../components/type-callout-link';
import ContactLink from '../components/contact-link';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import PostContent from '../components/post-content';
import Title from '../components/type-title';
import utils from '../utils';
import squiggleUrl from '../assets/images/squiggle-c.svg';
import './post.css';

const PostPage = props => {
  const { data } = props;
  const { contentfulBlogPost: post } = data;

  const metaTitle = post.title;
  const metaDescription = post.metaDescription
    ? post.metaDescription.metaDescription
    : post.excerpt
    ? post.excerpt.excerpt
    : post.content.childMarkdownRemark.excerpt;
  const metaImage = post.metaImage
    ? 'https:' + post.metaImage.file.url
    : undefined;
  const date = new Date(post.date);

  return (
    <Layout>
      <div className="mw-700 mh-auto mt-5">
        <MetaTags
          title={metaTitle}
          description={metaDescription}
          imageUrl={metaImage}
          isBlogPost
        />
        <article className="Post">
          <header className="ta-center mv-4">
            <Title>{post.title}</Title>
            <div className="fs-18 mt-2 c-gray3">
              <span>{post.author.name}</span>
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
            <PostContent html={post.content.childMarkdownRemark.html} />
          </div>
          <div className="mv-6 ta-center c-geraldine pe-none us-none">
            <img alt="" style={{ maxWidth: 288 }} src={squiggleUrl} />
          </div>
          <Callout
            className="br-30 pt-2 pb-4 mt-5"
            title="Want to talk more about this?"
            body="At Renga, we specialize in helping you discover your brand identity."
            links={
              <CalloutLink className="fs-16">
                <ContactLink withArrowIcon>Get in touch</ContactLink>
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
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      slug
      title
      date
      excerpt {
        excerpt
      }
      metaDescription {
        metaDescription
      }
      metaImage {
        file {
          url
        }
      }
      author {
        name
      }
      content {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 170)
        }
      }
    }
  }
`;
