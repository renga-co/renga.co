import React from 'react';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <div className="mw-700 mh-auto mt-5 ta-center">
      <div className="PostContent">
        <p>
          Sorry, this page doesn't seem to exist. <a href="/">Return home?</a>
        </p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
