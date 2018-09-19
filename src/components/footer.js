import React, { Fragment } from 'react';
import Link from 'gatsby-link';

const Divider = () => (
  <span className="p-relative ph-2 c-gray3" style={{ fontSize: 10, top: -2 }}>
    &bull;
  </span>
);

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: 'mailto:hello@renga.co', label: 'Contact Us' },
];

const Footer = props => (
  <footer
    className="fs-16 pt-6 pb-6 c-gray3 ta-center"
    style={{ marginTop: 'auto' }}>
    {links.map((link, i) => (
      <Fragment key={link.href}>
        <a href={link.href}>{link.label}</a>
        {i < links.length - 1 && <Divider />}
      </Fragment>
    ))}
  </footer>
);

export default Footer;
