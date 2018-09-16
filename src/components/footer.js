import React, { Fragment } from 'react';
import Link from 'gatsby-link';

const Divider = () => (
  <span className="p-relative ph-2 c-gray3" style={{ fontSize: 10, top: -2 }}>
    &bull;
  </span>
);

const links = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: 'mailto:hello@renga.co', label: 'Contact Us' },
];

const Footer = props => (
  <footer className="mt-4 ta-center">
    <div className="fs-16 pv-4 c-gray3">
      {links.map((link, i) => (
        <Fragment key={link.href}>
          <a href={link.href}>{link.label}</a>
          {i < links.length - 1 && <Divider />}
        </Fragment>
      ))}
    </div>
  </footer>
);

export default Footer;
