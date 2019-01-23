import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import Header from '../components/header';
import CareerPostingList from '../components/career-posting-list';
import Content from '../components/content';
import Subtitle from '../components/type-subtitle';

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
          subtitle={
            <Fragment>
              <p className="mt-4 mb-2">
                Renga was built on the idea of curiosity, integrity and
                collaboration. We invest into our people and joining the team
                means you’ll be wearing multiple hats. We push you to learn,
                grow and satisfy that entrepreneurial itch.
              </p>
              <p>
                In the spirit of collaboration we are always looking to meet
                like minded people, wherever they are. We thrive off of a
                flexible work environment, allowing you to do your best work in
                the way that you need. Whether you’re looking for freelance,
                part-time or full-time work, we’d love to hear from you!
              </p>
            </Fragment>
          }
        />
        <div className="mb-6">
          <CareerPostingList email={siteMetadata.emailCareers} postings={postings} />
        </div>
        <Content>
          <Subtitle>Nothing catch your eye?</Subtitle>
          <p>
            If you are excited to work for Renga but don't see a position that
            fits your profile, don't hesitate to <a href={`mailto:${siteMetadata.emailCareers}`} target="_blank" rel="noopener noreferrer">shoot us an email</a> and tell us
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
        emailCareers
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
