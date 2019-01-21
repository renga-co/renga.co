import React from 'react';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import Header from '../components/header';
import Content from '../components/content';

const description =
  'Renga was built on the idea of curiosity, integrity and collaboration. We invest into our people and joining the team means you’ll be wearing multiple hats. We push you to learn, grow and satisfy that entrepreneurial itch.';

const CareersPage = () => (
  <Layout>
    <MetaTags title="Careers" description={description} />
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
