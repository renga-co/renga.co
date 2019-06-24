// @flow

import React from 'react';
import { Link, graphql } from 'gatsby';
import cx from 'classnames';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import CaseStudyPreview from '../components/case-study-preview';
import Content from '../components/content';
import Callout from '../components/callout';
import CalloutLink from '../components/type-callout-link';
import Icon from '../components/icon';
import './case-study.css';

const LOCALE = 'en-US';

const richTextRenderOptions = {
  renderNode: {
    // We only adjust INLINES.HYPERLINK and not INLINES.ENTRY_HYPERLINK
    // or INLINES.ASSET_HYPERLINK
    [INLINES.HYPERLINK]: (node, children) => {
      return <a href={node.data.uri} target="_blank" rel="noopener noreferrer">{children}</a>;
    },
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const fields = node.data.target.fields;
      const description = fields.description
        ? fields.description[LOCALE]
        : null;
      const file = fields.file[LOCALE];

      switch (file.contentType) {
        case 'image/png':
        case 'image/gif':
        case 'image/jpg':
        case 'image/jpeg':
        case 'image/webp':
          const captionText = description ? (
            <figcaption>{description}</figcaption>
          ) : (
            null
          );
          return (
            <figure>
              <img src={file.url} alt={description} />
              {captionText}
            </figure>
          );
        default:
          return;
      }
    },
  },
};

const preventWidows = str => {
  const lastSpaceIndex = str.lastIndexOf(' ');
  const partA = str.substr(0, lastSpaceIndex);
  const partB = str.substr(lastSpaceIndex + 1);

  return (
    <>
      {partA}
      &nbsp;
      {partB}
    </>
  );
};

const CaseStudyPage = props => {
  const {
    contentfulCaseStudy: page,
    allContentfulCaseStudy: otherCaseStudies,
  } = props.data;

  const metaDescription = page.metaDescription
    ? page.metaDescription.metaDescription
    : null;
  const metaImage = page.metaImage
    ? 'https:' + page.metaImage.file.url
    : 'https:' + page.coverImage.fluid.src;

  const showOtherCaseStudies =
    otherCaseStudies && otherCaseStudies.edges.length > 0;
  const headerImageMargin = `mb-3 mb-4-m`;

  return (
    <Layout>
      <MetaTags
        title={page.client}
        description={metaDescription}
        imageUrl={metaImage}
        isCaseStudy
      />
      <article className="mb-5 mb-6-m">
        <header
          className={cx('mh-auto', headerImageMargin)}
          style={{ maxWidth: 600 }}>
          <Link
            to="/work"
            className="x xa-stretch fs-16 c-gray4 mb-2 case-study-back-button">
            <Icon name="arrow-left" iconSize={16} size={24} />
            <span style={{ paddingLeft: 4, lineHeight: '24px' }}>
              Back to all work
            </span>
          </Link>
          <h1 className="fs-30 fs-36-m fw-bold lh-1d25 mb-1 mb-2-m">
            {preventWidows(page.title)}
          </h1>
          <h2 className="fs-18 fs-24-m c-gray4" style={{ maxWidth: 550 }}>
            {page.client}
          </h2>
        </header>
        <div className={cx('p-relative mw-1200 mh-auto', headerImageMargin)}>
          <img
            src={page.coverImage.fluid.src}
            srcSet={page.coverImage.fluid.srcSet}
            alt={page.client}
          />
        </div>
        <div className="CaseStudy-metaContainer p-relative mw-1200 mh-auto w-100p">
          <aside className="CaseStudy-meta p-absolute-m l-0 t-0 fs-14 lh-1d5">
            <div className="mb-2-m">
              <h4 className="fw-bold">Scope</h4>
              <ul className="c-gray4">
                {page.projectScope.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="fw-bold">Team</h4>
              <ul className="c-gray4">
                {page.projectMembers.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <Content isCaseStudy>
          {documentToReactComponents(page.content.json, richTextRenderOptions)}
        </Content>
        {showOtherCaseStudies && (
          <footer className="mt-6 mt-7-m mw-900 mh-auto">
            <h3 className="fs-24 fw-bold ta-center mb-5">
              See more of our work
            </h3>
            <div className="x xd-column xd-row-m xa-center xj-center">
              {otherCaseStudies.edges.slice(0, 2).map(({ node }) => (
                <div key={node.id} className="ph-2-m mb-4 mb-0-m">
                  <CaseStudyPreview caseStudy={node} />
                </div>
              ))}
            </div>
          </footer>
        )}
      </article>
      <Callout
        className="mb-5"
        title="Looking for help with your brand?"
        body="We specialize in helping you discover your brand identity."
        links={
          <CalloutLink className="fs-16">
            <Link to="/contact" className="x xa-center xj-center">
              Get in Touch <Icon name="arrow-right" iconSize={18} />
            </Link>
          </CalloutLink>
        }
      />
    </Layout>
  );
};

export default CaseStudyPage;

export const pageQuery = graphql`
  query CaseStudyByPath($slug: String!) {
    contentfulCaseStudy(slug: { eq: $slug }) {
      client
      title
      coverImage {
        fluid(maxWidth: 2400, quality: 80) {
          ...GatsbyContentfulFluid
        }
      }
      projectScope
      projectMembers
      content {
        json
      }
      metaDescription {
        metaDescription
      }
      metaImage {
        file {
          url
        }
      }
    }
    allContentfulCaseStudy(
      filter: { slug: { ne: $slug }, public: { eq: true } }
    ) {
      edges {
        node {
          id
          ...CaseStudyPreviewInformation
        }
      }
    }
  }
`;
