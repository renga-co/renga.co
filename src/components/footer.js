import React, { Fragment } from 'react';
import Link from 'gatsby-link';

const Divider = () => (
  <span className="p-relative ph-2 c-gray2" style={{ fontSize: 10, top: -2 }}>
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
    className="fs-16 pv-6 ph-3 c-gray3 ta-center lh-1d7"
    style={{ marginTop: 'auto' }}>
    {links.map((link, i) => (
      <Fragment key={link.href}>
        <Link to={link.href}>{link.label}</Link>
        {i < links.length - 1 && <Divider />}
      </Fragment>
    ))}
  </footer>
);

export default Footer;
