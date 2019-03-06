// @flow

import React from 'react';
import Head from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const defaultShortTitle = 'Renga';
const defaultTitle = `${defaultShortTitle} | Brand therapy, understand your brand identity.`;

type Props = {
  description: string,
  title: string,
  imageUrl?: string,
  isBlogPost?: boolean,
  isCaseStudy?: boolean,
};

const MetaTags = ({
  description: rawDescription,
  title: rawTitle,
  imageUrl,
  isBlogPost,
  isCaseStudy,
}: Props) => (
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
      const shortTitle = (rawTitle
        ? rawTitle + (isCaseStudy ? ' | Case Study' : '')
        : defaultShortTitle
      ).trim();
      const title = rawTitle ? `${rawTitle} | ${defaultTitle}` : defaultTitle;
      const description = rawDescription ? rawDescription : meta.description;

      const image = imageUrl ? imageUrl : `${meta.siteUrl}${meta.image}`;
      const isArticle = isBlogPost || isCaseStudy;

      return (
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />

          {/* OpenGraph tags */}
          {isArticle ? <meta property="og:type" content="article" /> : null}
          <meta property="og:title" content={shortTitle} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />

          {/* Twitter Card tags */}
          {isArticle ? (
            <meta name="twitter:card" content="summary" />
          ) : (
            <meta name="twitter:card" content="summary_large_image" />
          )}
          <meta name="twitter:title" content={shortTitle} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
        </Head>
      );
    }}
  />
);

export default MetaTags;
