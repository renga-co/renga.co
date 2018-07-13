import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1>
      We are a brand therapy agency from Toronto. We help startups, companies,
      and artists build for the web.
    </h1>
    <p>
      <strong>Who are you?</strong> A small team of marketers, designers, and
      developers: Jared, Ben, Landon, and Katrina. Collectively, we have a broad
      range of experience building things for the web—from side projects to
      working for companies like PKG, Bluesound, and Adobe.
    </p>
    <p>
      <strong>What do you do?</strong> We employ pragmatic, functional,
      engineering-based principles to deliver results on a wide range of
      projects. These include websites, brand identities, and digital products.
    </p>
    <Link to="/blog/">Blog</Link>
  </div>
);

export default IndexPage;
