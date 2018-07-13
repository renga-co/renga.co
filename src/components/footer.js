import React from 'react';
import Link from 'gatsby-link';

function Footer(props) {
  return (
    <footer className="mt-4 ta-center">
      <div className="pv-4 c-gray3">
        <a href="mailto:hello@renga.co">Contact Us</a>
        <span
          className="p-relative ph-3 o-50p"
          style={{ fontSize: 10, top: -2 }}>
          &bull;
        </span>
        <a href="/about">Blog</a>
      </div>
    </footer>
  );
}

export default Footer;
