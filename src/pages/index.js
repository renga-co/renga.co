import React from 'react';
import Link from 'gatsby-link';
import Icon from '../components/icon';

const IndexPage = () => (
  <div className="lh-1d5">
    <div className="mb-4">
      <h1 className="fs-36 mb-3 lh-1d25">
        We are a brand therapy agency from Toronto. We help startups, companies,
        and artists build for the web.
      </h1>
      <a
        className="fs-24 x xa-center c-geraldine va-baseline"
        href="mailto:hello@renga.co">
        Get in touch{' '}
        <Icon className="ml-1" name="arrow-right" size={24} iconSize={24} />
      </a>
    </div>
    <p className="PostContent mb-3">
      <strong>Who are you?</strong>{' '}
      <span className="c-gray4">
        A small team of marketers, designers, and developers: Jared, Ben,
        Landon, and Katrina. Collectively, we have a broad range of experience
        building things for the web—from side projects to working for companies
        like <a href="https://www.pkgshop.com/">PKG</a>, Bluesound, and Adobe.
      </span>
    </p>
    <p>
      <strong>What do you do?</strong>{' '}
      <span className="c-gray4">
        We employ pragmatic, functional, engineering-based principles to deliver
        results on a wide range of projects. These include websites, brand
        identities, and digital products.
      </span>
    </p>
  </div>
);

export default IndexPage;
