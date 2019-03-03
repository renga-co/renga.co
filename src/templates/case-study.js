import React from 'react';
import { Link, graphql } from 'gatsby';
import cx from 'classnames';
import tinytime from 'tinytime';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import Content from '../components/content';
import Callout from '../components/callout';
import CalloutLink from '../components/type-callout-link';
import Icon from '../components/icon';
import './case-study.css';

const formatCaseStudyDate = tinytime('{MMMM} {YYYY}').render;

const CaseStudyPage = props => {
  const {
    contentfulCaseStudy: page,
    allContentfulCaseStudy: otherCaseStudies,
  } = props.data;
  const { childContentfulRichText: markdown } = page.content;

  const metaDescription = page.metaDescription
    ? page.metaDescription.metaDescription
    : markdown.excerpt;
  const metaImage = page.metaImage
    ? 'https:' + page.metaImage.file.url
    : 'https:' + page.coverImage.fluid.src;
  const date = new Date(page.date);

  const showOtherCaseStudies =
    otherCaseStudies && otherCaseStudies.edges.length > 0;
  const headerImageMargin = `mb-3 mb-4-m`;

  return (
    <Layout>
      <MetaTags
        title={page.title}
        description={metaDescription}
        imageUrl={metaImage}
      />
      <article className="mb-5 mb-6-m">
        <header
          className={cx('mh-auto', headerImageMargin)}
          style={{ maxWidth: 600 }}>
          <div className="fs-14 c-gray4 mb-2">
            <span>Case Study</span>
            <span className="ph-1">&middot;</span>
            <time dateTime={date.toISOString()}>
              {formatCaseStudyDate(date)}
            </time>
          </div>
          <h1 className="fs-30 fw-semibold">{page.title}</h1>
          <h2 className="fs-24 c-gray4" style={{ maxWidth: 550 }}>
            {page.subtitle}
          </h2>
        </header>
        <div className={cx('p-relative mw-1200 mh-auto', headerImageMargin)}>
          <img
            src={page.coverImage.fluid.src}
            srcSet={page.coverImage.fluid.srcSet}
            alt={page.title}
          />
        </div>
        <div className="CaseStudy-metaContainer p-relative mw-1200 mh-auto w-100p">
          <aside className="CaseStudy-meta p-absolute-m l-0 t-0 fs-14 lh-1d5">
            <div className="mb-2-m">
              <h4 className="fw-semibold">Scope</h4>
              <ul className="c-gray4">
                {page.projectScope.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="fw-semibold">Team</h4>
              <ul className="c-gray4">
                {page.projectMembers.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <Content
          isCaseStudy
          dangerouslySetInnerHTML={{ __html: markdown.html }}
        />
        {showOtherCaseStudies && (
          <footer className="mt-6 mt-7-m mw-900 mh-auto">
            <h3 className="fs-24 fw-semibold ta-center mb-5">
              See more of our work
            </h3>
            <div className="x-m xj-center">
              {otherCaseStudies.edges
                .concat(otherCaseStudies.edges)
                .slice(0, 2)
                .map(({ node }) => (
                  <Link key={node.id} to={'work/' + node.slug}>
                    <div className="x-1 ph-2-m mb-4 mb-0-m">
                      <div className="mb-2">
                        <img
                          alt={node.title}
                          src={node.coverImage.fluid.src}
                          srcSet={node.coverImage.fluid.srcSet}
                        />
                      </div>
                      <h4 className="fs-18 fs-21-m fw-semibold mb-1">
                        {node.title}
                      </h4>
                      <h6 className="fs-16 fs-18-m mb-2">{node.subtitle}</h6>
                      <div className="fs-14 c-gray3">
                        {node.projectScope.map((item, i) => (
                          <>
                            {i !== 0 && <span className="ph-1">&middot;</span>}
                            <span>{item}</span>
                          </>
                        ))}
                      </div>
                    </div>
                  </Link>
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
      title
      subtitle
      coverImage {
        fluid(maxWidth: 2400) {
          ...GatsbyContentfulFluid
        }
      }
      date
      projectScope
      projectMembers
      content {
        childContentfulRichText {
          html
        }
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
    allContentfulCaseStudy(filter: { slug: { ne: $slug } }) {
      edges {
        node {
          id
          title
          subtitle
          coverImage {
            fluid(maxWidth: 760) {
              ...GatsbyContentfulFluid
            }
          }
          date
          slug
          projectScope
        }
      }
    }
  }
`;
