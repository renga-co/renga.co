import React from 'react';
import { graphql } from 'gatsby';
import tinytime from 'tinytime';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import Content from '../components/content';

const formatCaseStudyDate = tinytime('{MMMM} {YYYY}').render;

const CaseStudyPage = props => {
  const { contentfulCaseStudy: page } = props.data;
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
      <header className="mw-700 mh-auto">
        <div>{formatCaseStudyDate(date)}</div>
        <h1 className="fs-36 fw-semibold">{page.title}</h1>
        <h2 className="fs-24">{page.subtitle}</h2>
        <div>
          <h4>Project Scope</h4>
          {page.projectScope.map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div>
          <h4>Project Members</h4>
          {page.projectMembers.map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </header>
      <div className="mw-1200 mh-auto">
        <img src={page.coverImage.file.url} alt={page.title} />
      </div>
      <div className="mw-700 mh-auto mt-5">
        <Content dangerouslySetInnerHTML={{ __html: markdown.html }} />
      </div>
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
  }
`;
