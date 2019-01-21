import React from 'react';
import Head from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const defaultShortTitle = 'Renga';
const defaultTitle = `${defaultShortTitle} | Brand therapy, understand your brand identity.`;

const MetaTags = ({
  description: rawDescription,
  title: rawTitle,
  postImage,
  isBlogPost,
}) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
          }
        }
      }
    `}
    render={({ site: { siteMetadata: meta } }) => {
      const shortTitle = rawTitle ? rawTitle : defaultShortTitle;
      const title = rawTitle ? `${rawTitle} | ${defaultTitle}` : defaultTitle;
      const description = rawDescription ? rawDescription : meta.description;

      const image = postImage
        ? `${meta.siteUrl}${postImage}`
        : `${meta.siteUrl}${meta.image}`;

      return (
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />

          {/* OpenGraph tags */}
          {isBlogPost ? <meta property="og:type" content="article" /> : null}
          <meta property="og:title" content={shortTitle} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={shortTitle} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
        </Head>
      );
    }}
  />
);

export default MetaTags;
