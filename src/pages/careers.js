import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import Header from '../components/header';
import CareerPostingList from '../components/career-posting-list';
import Content from '../components/content';

const description =
  'Renga was built on the idea of curiosity, integrity and collaboration. We invest into our people and joining the team means you’ll be wearing multiple hats. We push you to learn, grow and satisfy that entrepreneurial itch.';

const CareersPage = ({ data }) => {
  const { siteMetadata } = data.site;
  const { edges: postings } = data.allMarkdownRemark;

  return (
    <Layout>
      <MetaTags title="Careers" description={description} />
      <div className="mw-700 ta-center mh-auto">
        <Header
          title="Work with us"
          subtitle={`We’re always looking for talented designers, developers, writers and
      media creators. We’d love to see your portfolio and chat.`}
        />
        <div className="mb-6">
          <CareerPostingList email={siteMetadata.email} postings={postings} />
        </div>
        <Content>
          <h3>Nothing catch your eye?</h3>
          <p>
            If you are excited to work for Renga but don't see a position that
            fits your profile, don't hesitate to shoot us an email and tell us
            what you can bring to the table.
          </p>
        </Content>
      </div>
    </Layout>
  );
};

export default CareersPage;

export const query = graphql`
  query CareersQuery {
    site {
      siteMetadata {
        email
      }
    }
    allMarkdownRemark(
      filter: {
        fields: { type: { eq: "career" } }
        frontmatter: { published: { ne: false } }
      }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
