import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import Content from '../components/content';
import CalloutLink from '../components/type-callout-link';
import StepNumberBadge from '../components/type-step-number-badge';
import ReferralList from '../components/referral-list';
import ContactForm from '../components/contact-form';
import Title from '../components/type-title';
import TherapistWorkshop from '../components/therapist-workshop';
import scrollTo from '../scroll-to';
import brandWorkshopImageUrl from '../assets/images/brand-workshop-personas.svg';

const points = [
  {
    title: 'Understanding Brand Identity',
    content:
      "First we take time to understand the history of your business. We'll use several exercises to better understand your brand.",
  },
  {
    title: 'Your Ideal Customer',
    content:
      'Next, we dive into your ideal customer. We define a persona to describe the thinking and lifestyle of who your brand should resonate with.',
  },
  {
    title: 'How They Interact',
    content:
      'Once we have two personas we dive into their relationship. Our exercises will help build a compass to navigate future decisions.',
  },
];

const Subtitle = ({ children }) => (
  <div className="ta-center mb-4">
    <h3 className="fs-24 mb-3 fw-bold">{children}</h3>
  </div>
);

function scrollToSignUpForm() {
  const container = document.getElementById('sign-up-form');
  const autofocusEl = container.querySelector('input[data-autofocus]');

  scrollTo(container).then(() => {
    if (autofocusEl) {
      autofocusEl.focus();
    }
  });
}

const BrandWorkshopPage = props => {
  const { contentfulPage: page, allContentfulReferrals } = props.data;

  const referrals = allContentfulReferrals.edges.map(n => n.node);
  const description = page.metaDescription
    ? page.metaDescription.metaDescription
    : page.content.childMarkdownRemark.excerpt;

  return (
    <Layout>
      <MetaTags title={page.title} description={description} />
      <section className="mw-900 mh-auto mt-3 mb-4 mb-3-m">
        <div className="x xd-column xd-row-m ta-center xa-center">
          <div className="w-50p-m mh-auto mb-2 xo-2 xo-1-m">
            <TherapistWorkshop />
          </div>
          <div className="p-relative mb-4 w-50p-m xo-1 xo-2-m">
            <Title className="mb-2 mb-4-m fs-36 lh-1d25">
              A brand workshop for your&nbsp;business
            </Title>
            <div />
            <CalloutLink className="fs-16">
              <a href="#sign-up-form" onClick={scrollToSignUpForm}>
                Sign Up Now
              </a>
            </CalloutLink>
          </div>
        </div>
      </section>
      <section className="mw-700 mh-auto ta-center pv-4 pv-6-m">
        <Subtitle>A brand … workshop?</Subtitle>
        <Content>{page.content.content}</Content>
      </section>
      <section className="mw-1200 mh-auto pt-4 pv-6-m">
        <Subtitle>The Process</Subtitle>
        <div className="x-m xa-center">
          <div style={{ maxWidth: 500 }}>
            <img
              alt="Two people standing with arrows flowing between them, representing how we'll work together to create a persona for your customers and business, and develop a strategy for how they interact."
              src={brandWorkshopImageUrl}
            />
          </div>
          <div className="ml-4-m" style={{ maxWidth: 500 }}>
            {points.map((point, i) => (
              <div key={point.title} className=" x x-1 ph-2-m mv-2-m pv-3">
                <StepNumberBadge className="mr-2">{i + 1}</StepNumberBadge>
                <div className="p-relative">
                  {i !== 0 && (
                    <div
                      className="p-absolute bgc-brown w-100p"
                      style={{ height: 1, top: -32, left: 0 }}
                    />
                  )}
                  <h3 className="fs-18 fw-bold mb-1">{point.title}</h3>
                  <p className="fs-18 c-gray4">{point.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mw-1200 mh-auto w-100p pv-4">
        <Subtitle>What People Are Saying</Subtitle>
        <ReferralList referrals={referrals} />
      </section>
      <section
        className="mw-700 w-100p mh-auto ta-center pv-4 pv-6-m"
        id="sign-up-form">
        <div className="ta-center mb-4">
          <h3 className="fs-24 mb-3 fw-bold">Send an Inquiry</h3>
          <Content>
            <p>
              Fill out this form and we'll get in touch about organizing a one-on-one&nbsp;workshop.
            </p>
          </Content>
        </div>
        <ContactForm name="Brand Workshop" />
      </section>
    </Layout>
  );
};

export default BrandWorkshopPage;

export const pageQuery = graphql`
  query BrandWorkshopByPath($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      metaDescription {
        metaDescription
      }
      content {
        content
      }
    }
    allContentfulReferrals(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          id
          source
          role
          content {
            content
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
