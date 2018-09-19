import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';

const CareersPage = () => (
  <Layout>
    <div className="mw-700 ta-center mh-auto">
      <div className="PostContent">
        <Header
          title="Work with us"
          subtitle={`We’re always looking for talented designers, developers, writers and
      media creators. We’d love to see your portfolio and chat.`}
        />
        <p>
          Get in touch at{' '}
          <a
            className="d-inlineBlock c-geraldine"
            href="mailto:careers@renga.co">
            careers@renga.co &rarr;
          </a>
        </p>
      </div>
    </div>
  </Layout>
);

export default CareersPage;
