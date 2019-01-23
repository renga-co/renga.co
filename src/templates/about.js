import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import Content from '../components/content';
import Callout from '../components/callout';
import CalloutLink from '../components/type-callout-link';
import Header from '../components/header';
import Subtitle from '../components/type-subtitle';

import aboutHistoryUrl from '../assets/images/about-history.svg';
import aboutRengaUrl from '../assets/images/about-renga.svg';

const SubtitleBlock = ({ children }) => (
  <div className="ta-center mb-5">
    <Subtitle className="fw-semibold">{children}</Subtitle>
  </div>
);

const AboutPage = props => {
  const { markdownRemark: page, allPeopleYaml } = props.data;
  const { edges: people } = allPeopleYaml;

  const [history, philosophy] = page.html.split('<hr>');

  return (
    <Layout>
      <section className="mw-700 mh-auto mb-4-m">
        <MetaTags
          title={page.frontmatter.title}
          description={page.frontmatter.seoDescription || page.excerpt}
        />
        <Header
          title="About Us"
          subtitle="Renga is a digital marketing agency from Toronto."
        />
        <Content>
          <p>
            We use the term brand therapy to describe our approach because it
            emphasizes collaborative listening as a way of establishing a strong
            brand identity for your business. All the work we do for our clients
            - everything from web development, e-commerce, digital advertising,
            and creative direction - builds from that place of self awareness.{' '}
          </p>

          <p>
            We serve small to medium sized businesses looking to better
            establish themselves in the digital market.{' '}
          </p>
        </Content>
      </section>
      <section className="mw-900 mh-auto pv-3 pv-6-m">
        <div className="x xd-column xd-row-m xa-center">
          <div className="x-1 xo-2 xo-1-m">
            <Subtitle className="mb-3">Our Story</Subtitle>
            <Content dangerouslySetInnerHTML={{ __html: history }} />
          </div>
          <div className="x-1 xo-1 xo-2-m ml-4-m mb-3 mb-0-m" style={{ maxWidth: 400 }}>
            <img
              alt=""
              src={aboutHistoryUrl}
            />
          </div>
        </div>
      </section>
      <section className="mw-900 mh-auto pv-3 pv-6-m">
        <div className="x xd-column xd-row-m xa-center">
          <div className="x-1 xo-1 mb-3 mb-0-m" style={{ maxWidth: 400 }}>
            <img
              alt="An abstract illustration with sets of text, alternating back and forth, depicting traditional renga poetry."
              src={aboutRengaUrl}
            />
          </div>
          <div className="x-1 xo-2 ml-4-m">
            <Subtitle className="mb-3">Why Renga?</Subtitle>
            <Content dangerouslySetInnerHTML={{ __html: philosophy }} />
          </div>
        </div>
      </section>
      <section className="mw-900 mh-auto pv-6">
        <SubtitleBlock>Our Team</SubtitleBlock>
        <div className="x-m">
          {people.map(({ node: person }) => (
            <div key={person.id} className="mb-4 mb-0-m c-gray4 ta-center" style={{ maxWidth: 300 }}>
              <div className="mb-2">
                <img src={person.portrait.publicURL} alt={person.name} />
              </div>
              <h3>{person.name}</h3>
            </div>
          ))}
        </div>
      </section>
      <section>
        <Callout
          className="mt-4 mb-5 mw-450"
          title="We’re hiring"
          body={
            <Content>
              <p>
                We're hiring for several roles. Interested?
                <br />
                Take a peek at our listings.
              </p>
            </Content>
          }
          links={
            <CalloutLink className="fs-16">
              <Link to="/careers">Work with Us</Link>
            </CalloutLink>
          }
        />
      </section>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageByPath($slug: String!) {
    allPeopleYaml {
      edges {
        node {
          id
          name
          portrait {
            publicURL
          }
        }
      }
    }
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
