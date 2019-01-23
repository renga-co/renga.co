import React from 'react';
import cx from 'classnames';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import Content from '../components/content';
import CalloutLink from '../components/type-callout-link';
import StepNumberBadge from '../components/type-step-number-badge';
import ReferralList from '../components/referral-list';
import ContactForm from '../components/contact-form';
import Icon from '../components/icon';
import Title from '../components/type-title';
import TherapistWorkshop from '../components/therapist-workshop';
import scrollTo from '../scroll-to';
import brandWorkshopImageUrl from '../assets/images/brand-workshop-personas.svg';

const Subtitle = ({ children }) => (
  <div className="ta-center mb-4">
    <h3 className="fs-24 mb-3 fw-semibold">{children}</h3>
  </div>
);

const FreeForALimitedTimeBadge = ({ className }) => (
  <div className={cx('xi xa-center c-geraldine', className)}>
    <span
      className="br-12 xi xa-center"
      style={{
        backgroundColor: 'rgba(255, 120, 108, 0.1)',
        transform: 'translate(-2px, 1px)',
      }}>
      <Icon name="gift" iconSize={18} size={30} />
    </span>
    <span className="fs-18 fw-semibold pl-1">Free for a limited time</span>
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
  const { data } = props;
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <MetaTags
        title={page.frontmatter.title}
        description={page.frontmatter.seoDescription || page.excerpt}
      />
      <section className="mw-900 mh-auto mt-3 mb-4 mb-3-m">
        <div className="x xd-column xd-row-m ta-center xa-center">
          <div className="w-50p-m mh-auto mb-2 xo-2 xo-1-m">
            <TherapistWorkshop />
          </div>
          <div className="p-relative mb-4 w-50p-m xo-1 xo-2-m">
            <FreeForALimitedTimeBadge className="mb-3 mb-4-m" />
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
        <Content>{page.frontmatter.introduction}</Content>
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
            {page.frontmatter.points.map((point, i) => (
              <div key={point.title} className=" x x-1 ph-2-m mv-2-m pv-3">
                <StepNumberBadge className="mr-2">{i + 1}</StepNumberBadge>
                <div className="p-relative">
                  {i !== 0 && (
                    <div
                      className="p-absolute bgc-brown w-100p"
                      style={{ height: 1, top: -32, left: 0 }}
                    />
                  )}
                  <h3 className="fs-18 fw-semibold mb-1">{point.title}</h3>
                  <p className="fs-18 c-gray4">{point.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mw-1200 mh-auto w-100p pv-4">
        <Subtitle>What People Are Saying</Subtitle>
        <ReferralList referrals={page.frontmatter.referrals} />
      </section>
      <section
        className="mw-700 w-100p mh-auto ta-center pv-4 pv-6-m"
        id="sign-up-form">
        <div className="ta-center mb-4">
          <h3 className="fs-24 mb-3 fw-semibold">Sign Up Now</h3>
          <Content>
            <p>
              Fill out this form and we'll get in touch to organize the
              workshop.
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        introduction
        points {
          title
          content
        }
        referrals {
          source
          title
          image {
            publicURL
          }
          content
        }
      }
    }
  }
`;
