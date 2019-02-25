import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import Content from '../components/content';

const CustomPage = props => {
  const { contentfulPage: page } = props.data;
  const { childMarkdownRemark: markdown } = page.content;

  const metaDescription = page.metaDescription
    ? page.metaDescription.metaDescription
    : markdown.excerpt;
  const metaImage = page.metaImage
    ? 'https:' + page.metaImage.file.url
    : undefined;

  return (
    <Layout>
      <div className="mw-700 mh-auto mt-5">
        <MetaTags
          title={page.title}
          description={metaDescription}
          imageUrl={metaImage}
        />
        <div>
          <Content dangerouslySetInnerHTML={{ __html: markdown.html }} />
        </div>
      </div>
    </Layout>
  );
};

export default CustomPage;

export const pageQuery = graphql`
  query CustomPageByPath($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      metaDescription {
        metaDescription
      }
      metaImage {
        file {
          url
        }
      }
      content {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`;
