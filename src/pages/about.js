import React from 'react';

import Layout from '../components/layout';
import Content from '../components/content';
import Header from '../components/header';

const AboutPage = () => (
  <Layout>
    <div className="mw-700 mh-auto">
      <Header title="About Us" />
      <Content>
        <p>
          Renga is a type of Japanese poetry in which two or more poets
          alternate back and forth in the composition of a single poem. In this
          ancient art form, every part matters to the direction of the whole.
          What came before is as valuable of what is still to come.
        </p>
        <p>
          This heart of messy collaboration captures our creative approach -
          which is why we’ve chose to adopt it as our name. Together, we build
          upon the work you have already done and then give you something to
          keep building on top of that.
        </p>
        <p>
          Because every brand is unique, we treat each client as a new
          collaborative possibility, working alongside you to make something
          special.
        </p>
      </Content>
    </div>
  </Layout>
);

export default AboutPage;
