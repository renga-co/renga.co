import React from 'react';
import { Link, graphql } from 'gatsby';
import tinytime from 'tinytime';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import Content from '../components/content';
import Callout from '../components/callout';
import CalloutLink from '../components/type-callout-link';

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
    : 'https:' + page.coverImage.file.url;
  const date = new Date(page.date);

  console.log(page);

  return (
    <Layout>
      <MetaTags
        title={page.title}
        description={metaDescription}
        imageUrl={metaImage}
      />
      <article className="mb-5">
        <header className="mh-auto mb-3 mb-5-m" style={{ maxWidth: 650 }}>
          <div>{formatCaseStudyDate(date)}</div>
          <h1 className="fs-30 fs-36-m fw-semibold">{page.title}</h1>
          <h2 className="fs-18 fs-24-m">{page.subtitle}</h2>
        </header>
        <div className="p-relative mw-1200 mh-auto mb-4">
          <img src={page.coverImage.file.url} alt={page.title} />
        </div>
        <div className="p-relative mw-1200 mh-auto w-100p">
          <aside className="p-absolute-m l-0 t-0 fs-14">
            <div className="mb-2">
              <h4 className="fw-semibold">Scope</h4>
              <ul>
                {page.projectScope.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="fw-semibold">Team</h4>
              <ul>
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
        {otherCaseStudies ? (
          <footer>
            {otherCaseStudies.edges.map(({ node }) => (
              <div>{node.title}</div>
            ))}
          </footer>
        ) : null}
      </article>
      <Callout
        title="Ready to talk?"
        body="We specialize in helping you discover your brand identity."
        links={
          <CalloutLink className="fs-16">
            <Link to="/Contact">Get in Touch</Link>
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
        file {
          url
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
          title
          subtitle
          date
          slug
        }
      }
    }
  }
`;
