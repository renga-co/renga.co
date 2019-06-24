import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import CalloutLink from '../components/type-callout-link';
import ContactLink from '../components/contact-link';
import Content from '../components/content';
import Icon from '../components/icon';
import Layout from '../components/layout';
import Button from '../components/button';
import Title from '../components/type-title';
import TherapistIllustration from '../components/illustration-therapist';
import CollaborationIllustration from '../components/illustration-collaboration';
import illustrationWavingUrl from '../assets/images/home-waving.svg';
import illustrationTherapyUrl from '../assets/images/home-therapy.svg';
import squiggleAUrl from '../assets/images/squiggle-a.svg';

const testimonials = [
  {
    name: 'Brian',
    company: 'MoneyClip',
    position: 'Founder',
    content:
      'Renga helped us build on our brand, website, and app to lead our Series A round.',
  },
  {
    name: 'Iain',
    company: 'Main St. Bakehouse',
    position: 'Owner',
    content:
      'Renga’s focus, attention to detail, and good design made it an easy experience for all of us. We were very happy with the outcome and have since established a well loved brand in our town.',
  },
  {
    name: 'Leslie',
    company: 'Walmart',
    position: 'Manager',
    content:
      'Renga helped us define our business strategy and streamline our approach to e-commerce',
  },
];

const IndexPage = () => (
  <Layout>
    <div className="lh-1d5">
      <div>
        <div
          className="x xj-center xj-start-m mb-4 mb-0-m pt-3-m pb-6 pb-3-m ta-center mw-1200 mh-auto">
          <div class="p-relative w-50p-m ta-left-m pt-5-m pb-5 pb-6-m mb-5 mb-4-m z-2">
            <h3 class="fs-16 fs-18-m c-gray3 mb-1">
              Renga is a brand strategy &{' '}
              <span class="ws-noWrap">design studio</span>
            </h3>
            <h1 className="fs-36 fs-48-m fw-bold c-gray5 mb-2 mb-3-m lh-1d25">
              We build brand confidence
            </h1>
            <div class="x xa-stretch xj-center xj-start-m">
              <span class="mr-1">
                <Button small inline>
                  <span
                    className="p-relative x xa-center"
                    style={{ top: -1, left: -4 }}>
                    <Icon name="play" size={18} iconSize={13} />
                  </span>
                  View our reel
                </Button>
              </span>
              <Link to="/contact">
                <Button small inline style={{ height: '100%' }}>
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div class="p-relative mw-900 mh-auto" />
      </div>
      <div className="p-relative mw-900 bgc-brown br-30 ph-3 mh-auto ta-center">
        <div class="p-absolute z-1 hero-illustration-people">
          <CollaborationIllustration />
        </div>
        <div class="hero-illustration bgr-noRepeat pe-none" />
        <div className="pv-4">
          <h3 className="fs-24 fw-medium mb-3 fw-bold">
            Do you have a healthy brand identity?
          </h3>
          <div className="pv-4" />
          <Content>
            <p>
              If these questions resonate, you may have a brand identity
              problem.
            </p>
          </Content>
        </div>
      </div>
      <div className="mw-900 mh-auto ta-center pt-6 pe-none us-none">
        <img src={illustrationTherapyUrl} />
      </div>
      <div className="mw-700 ph-3 pt-5 mh-auto ta-center">
        <Content>
          <h3 className="fs-24 mw-400 mb-3 fw-bold">
            We like to describe our work as brand therapy
          </h3>
        </Content>
        <Content>
          <p>
            All important decision making comes from a place of self-awareness,
            so discovery leads our entire process. From there, our team gets
            together and brings their unique blend of thinking to the creative
            process. Finally, because we work so closely with you, we deliver
            results that fit your brand’s identity.
          </p>
        </Content>
      </div>
      <div className="mv-6 ta-center c-geraldine pe-none us-none">
        <img alt="" style={{ maxWidth: 300 }} src={squiggleAUrl} />
      </div>
      <section>
        <div className="mw-700 ph-3 mh-auto ta-center">
          <Content>
            <h3 className="fs-24 mw-400 mb-3 fw-bold">
              Hear from who we&rsquo;ve helped
            </h3>
          </Content>
        </div>
        <div className="TestimonialGrid mw-1200 ph-3 mt-5 mh-auto ta-left">
          {testimonials.map(t => (
            <div className="TestimonialGrid-testimonial mt-3 mt-0-m">
              <div className="pa-2 bgc-brown br-12">{t.content}</div>
              <div className="x xa-center mt-2">
                <div
                  className="br-round bgc-brown mr-1"
                  style={{ flexBasis: '3rem', width: '3rem', height: '3rem' }}
                />
                <div>
                  <h5 className="fw-medium">{t.name}</h5>
                  <h6 className="fs-16 c-gray3">
                    {t.company}, {t.position}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="mw-700 ph-3 mt-5 mt-6-m mb-4 mb-5-m mh-auto ta-center">
        <div className="mb-3 pe-none us-none">
          <img src={illustrationWavingUrl} />
        </div>
        <Content className="mb-3">
          <p>
            We know every business has different problems. Drop us a note and
            we’d be happy to talk with you about your brand and business.
          </p>
        </Content>
        <div class="x xj-center">
          <Link to="/contact">
            <Button small inline style={{ height: '100%' }}>
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
