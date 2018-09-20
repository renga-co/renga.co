import React from 'react';
import Layout from '../components/layout';
import Content from '../components/content';

const NotFoundPage = () => (
  <Layout>
    <div className="mw-700 mh-auto mt-5 ta-center">
      <Content>
        <p>Sorry, this page doesn't seem to exist.</p>
        <p>
          <a href="/">&larr; Return home</a>
        </p>
      </Content>
    </div>
  </Layout>
);

export default NotFoundPage;
