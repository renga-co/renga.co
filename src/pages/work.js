// @flow

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';
import CaseStudyPreview from '../components/case-study-preview';
import './work.css';

const WorkPage = props => {
  const { allContentfulCaseStudy: caseStudies } = props.data;
  return (
    <Layout>
      <div className="mw-700 mh-auto">
        <Header title="Work" subtitle="See some of favourite work." />
      </div>
      <section className="WorkGrid mw-900 mh-auto">
        {caseStudies.edges
          .concat(caseStudies.edges.slice().reverse())
          .map(({ node }) => (
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
