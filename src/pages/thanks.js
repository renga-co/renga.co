import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';
import Content from '../components/content';
import MetaTags from '../components/meta-tags';

const ThanksPage = () => {
  return (
    <Layout>
      <MetaTags title="Thanks" />
      <div className="pt-5-m mw-450 ta-center mh-auto">
        <Header
          title="Thanks!"
          subtitle={
            <Content>
              <p>
                We'll be in touch shortly. In the meantime, you can{' '}
                <Link to="/">return home</Link>, or{' '}
                <Link to="/blog">visit our blog</Link>.
              </p>
            </Content>
          }
        />
      </div>
    </Layout>
  );
};

export default ThanksPage;
