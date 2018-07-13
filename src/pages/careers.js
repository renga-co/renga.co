import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Content from '../components/content';

const CareersPage = () => (
  <Layout>
    <div className="mw-700 ta-center mh-auto">
      <Header
        title="Work with us"
        subtitle={`We’re always looking for talented designers, developers, writers and
    media creators. We’d love to see your portfolio and chat.`}
      />
      <Content>
        <p>
          Get in touch at{' '}
          <a href="mailto:careers@renga.co">careers@renga.co &rarr;</a>
        </p>
      </Content>
    </div>
  </Layout>
);

export default CareersPage;
