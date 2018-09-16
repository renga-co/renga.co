import React from 'react';
import Header from '../components/header';

const CareersPage = () => (
  <div className="mw-700 ta-center mh-auto">
    <div className="PostContent">
      <Header
        title="Work with us"
        subtitle={`We’re always looking for talented designers, developers, writers and
      media creators. We would love to see your portfolio and have a
      conversation about what you’re up to.`}
      />
      <p>
        Get in touch at{' '}
        <a className="d-inlineBlock c-geraldine" href="mailto:careers@renga.co">
          careers@renga.co &rarr;
        </a>
      </p>
    </div>
  </div>
);

export default CareersPage;
