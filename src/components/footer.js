import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import ContactLink from '../components/contact-link';

const Divider = ({ className, ...props }) => (
  <span
    className={cx('p-relative ph-2 c-gray2 us-none', className)}
    style={{ fontSize: 10, top: -2 }}>
    &bull;
  </span>
);

const Footer = () => (
  <footer
    className="pv-6 ph-3 c-gray3 ta-center fs-16 lh-2d0"
    style={{ marginTop: 'auto' }}>
    <Link to="/services">Services</Link>
    <Divider />
    <Link to="/blog">Blog</Link>
    <br className="d-none-m" />
    <Divider className="d-none d-inlineBlock-m" />
    <Link to="/careers">Careers</Link>
  </footer>
);

export default Footer;
