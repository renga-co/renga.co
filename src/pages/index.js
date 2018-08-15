import React from 'react';
import Link from 'gatsby-link';

import Content from '../components/content';
import Icon from '../components/icon';
import TherapistIllustration from '../components/therapist-illustration';

const IndexPage = () => (
  <div className="lh-1d5">
    <div className="x xd-column xd-row-m ta-center xa-center mw-900 mh-auto mt-3 mb-6">
      <div className="mb-4 mb-0-m w-50p-m">
        <h1 className="fs-30 fs-36-m fw-semibold mb-2 mb-4-m lh-1d25">
          Renga is a brand therapy group from{' '}
          <span className="ws-noWrap">Toronto</span>.
        </h1>
        <div />
        <a
          className="xi xa-center fs-16 fw-semibold c-gray3 ls-loose tt-uppercase"
          href="/about">
          What is brand therapy?
        </a>
      </div>
      <div className="w-50p-m">
        <TherapistIllustration />
      </div>
    </div>
    <div className="mw-700 mh-auto">
      <Content>
        <p>Enough about us, let's talk about why you’re here.</p>
        <p>
          <strong>
            Maybe you've successfully run a business for years, but you're
            having a hard time adapting to the current digital landscape.
          </strong>{' '}
          <span className="c-gray4">
            Growing your business in an ever-shifting world of digital marketing
            can feel overwhelming. We’d love to help! We’ll work with you to
            create a marketing strategy that focuses only on the channels that
            will reach the customers most interested in your brand.
          </span>
        </p>

        <p>
          <strong>
            Maybe you want to sell online, but don’t know where to begin with
            ecommerce.
          </strong>{' '}
          <span className="c-gray4">
            Setting up an online store can be intimidating. Let us do the heavy
            lifting for you. Our team can handle everything from setting up the
            backend to getting high quality photos of your product.
          </span>
        </p>

        <p>
          <strong>
            Maybe you've got a great idea for a new business or product and need
            some help getting it off the ground.
          </strong>{' '}
          <span className="c-gray4">
            We’d be really interested in helping you map out brand strategy that
            gets other people as excited about your idea as you are. We believe
            that developing a brand is about more than fonts and colours; it’s
            about identity.
          </span>
        </p>

        <p>
          <strong>
            Maybe your business is fine, but you just need a creative refresh of
            your website or logo.
          </strong>{' '}
          <span className="c-gray4">
            We work with trusted and talented designers and developers so that
            you don’t have to go through the hassle of finding someone yourself.
            Let us take your ideas and make them come alive in an end result
            we’ll all be proud of.
          </span>
        </p>

        <p>
          Whatever you might need, we're happy to help you figure it out.{' '}
          <a href="mailto:hello@renga.co">Get in touch.</a>
        </p>
      </Content>
    </div>
  </div>
);

export default IndexPage;
