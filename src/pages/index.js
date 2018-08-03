import React from 'react';
import Link from 'gatsby-link';
import Icon from '../components/icon';

import brandTherapistUrl from '../assets/brand-therapist.png';

const IndexPage = () => (
  <div className="lh-1d5">
    <div className="x xa-center mw-900 mh-auto mb-6">
      <div className="w-50p">
        <h1 className="fs-36 mb-4 lh-1d5">
          We are a brand therapy group from the{' '}
          <span className="ws-noWrap">Toronto Area</span>.
        </h1>
        <Link
          className="Button bgc-geraldine fs-18 ph-2 c-white"
          href="mailto:hello@renga.co">
          Learn more{' '}
          <Icon className="ml-1" name="arrow-right" size={16} iconSize={18} />
        </Link>
      </div>
      <div className="w-50p">
        <img src={brandTherapistUrl} alt="Brand Therapist sitting in a chair" />
      </div>
    </div>
    <div className="mw-700 mh-auto">
      <div className="PostContent">
        <p>Let's talk about why you’re here.</p>
        <p>
          <strong>
            I’ve successfully run a business for years; but now I’m having a
            hard time adapting to the current digital landscape.
          </strong>
        </p>

        <p>
          <strong>
            I want to sell my stuff online; but I don’t know where to begin with
            ecommerce.
          </strong>
        </p>

        <p>
          <strong>
            I’ve got a great idea for a new business or product and need some
            help getting it off the ground.
          </strong>
        </p>

        <p>
          <strong>
            My business is fine, we’re just in need of a creative refresh on our
            website, logo, or something else.
          </strong>
        </p>
      </div>
    </div>
  </div>
);

export default IndexPage;
