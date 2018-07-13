import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1.45rem 0',
      }}>
      <div style={{ display: 'flex' }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}>
          {siteTitle}
        </Link>
        <nav style={{ marginLeft: 24 }}>
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
        </nav>
      </div>
      <div>
        <a href="mailto:hello@renga.co">hello@renga.co</a>
      </div>
    </div>
  </div>
);

export default Header;
