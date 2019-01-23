import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import Content from '../components/content';

const CustomPage = props => {
  const { data } = props;
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <div className="mw-700 mh-auto mt-5">
        <MetaTags
          title={page.frontmatter.title}
          description={page.frontmatter.seoDescription || page.excerpt}
        />
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
      excerpt
      frontmatter {
        title
        seoDescription
      }
    }
  }
`;
