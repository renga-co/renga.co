// @flow

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';
import MetaTags from '../components/meta-tags';
import CaseStudyPreview from '../components/case-study-preview';
import './work.css';

const WorkPage = props => {
  const { allContentfulCaseStudy: caseStudies } = props.data;
  const description = 'Read about some of our favourite projects.';
  return (
    <Layout>
      <MetaTags title="Work" description={description} />
      <div className="mw-700 mh-auto mb-3">
        <Header title="Our Work" subtitle={description} />
      </div>
      <section className="WorkGrid mw-900 mh-auto">
        {caseStudies.edges.map(({ node }) => (
          <div key={node.id} className="mb-4">
            <CaseStudyPreview caseStudy={node} />
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default WorkPage;

export const pageQuery = graphql`
  query WorkPageQuery {
    allContentfulCaseStudy(
      filter: { public: { eq: true } }
      sort: { fields: [date], order: DESC }
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
