import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import Content from '../components/content';

const NotFoundPage = () => (
  <Layout>
    <MetaTags title="Not Found" />
    <div className="mw-700 mh-auto mt-5 ta-center">
      <Content>
        <p>Sorry, this page doesn't seem to exist.</p>
        <p>
          <Link to="/">&larr; Return home</Link>
        </p>
      </Content>
    </div>
  </Layout>
);

export default NotFoundPage;
