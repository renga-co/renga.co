import React from 'react';
import Link from 'gatsby-link';
import Icon from '../components/icon';

const IndexPage = () => (
  <div className="lh-1d5">
    <div className="mb-6">
      <h1 className="fs-36 mb-4 lh-1d5">
        We are a brand therapy group based in the Toronto area.
      </h1>
  
      <strong>We'll work with your startup, existing business, or new idea to build a strong identity and reach the right people.</strong>
  
      <a
        className="Button bgc-geraldine fs-18 ph-2 c-white"
        href="mailto:hello@renga.co">
        Get in touch{' '}
        <Icon className="ml-1" name="arrow-right" size={16} iconSize={18} />
      </a>
    </div>
    <div className="PostContent">
      <p>
        <strong>Who are you?</strong>{' '}
        <span className="c-gray4">
          A small team of marketers, designers, and developers: Jared, Ben,
          Landon, and Katrina. Collectively, we have a broad range of experience
          building things for the web—from side projects to working for
          companies like <a href="http://www.yugta.ca/">Youth Unlimited</a>,{' '}
          <a href="http://www.bluesound.com/">Bluesound</a>, and{' '}
          <a href="https://www.pkgshop.com/">PKG</a>.
        </span>
      </p>
      <p>
        <strong>What do you do?</strong>{' '}
        <span className="c-gray4">
          We employ pragmatic, functional, engineering-based principles to
          deliver results on a wide range of projects. These include websites,
          brand identities, and digital products.
        </span>
      </p>
    </div>
  </div>
);

export default IndexPage;
