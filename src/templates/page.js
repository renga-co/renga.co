import React from 'react';
import Head from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Content from '../components/content';

const CustomPage = props => {
  const { data } = props;
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <div className="mw-700 mh-auto mt-5">
        <Head>
          <title>{page.frontmatter.title}</title>
          <meta
            name="description"
            content={page.frontmatter.description || page.excerpt}
          />
        </Head>
        <div>
          <Content dangerouslySetInnerHTML={{ __html: page.html }} />
        </div>
      </div>
    </Layout>
  );
};

export default CustomPage;

export const pageQuery = graphql`
  query CustomPageByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
