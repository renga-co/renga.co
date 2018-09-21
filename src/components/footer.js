import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';

const Divider = ({ className, ...props }) => (
  <span
    className={cx('p-relative ph-2 c-gray2 us-none', className)}
    style={{ fontSize: 10, top: -2 }}>
    &bull;
  </span>
);

const FooterLink = ({ className, ...props }) => (
  <Link className={cx(className, 'h-black')} {...props} />
);

const Footer = () => (
  <footer
    className="pv-6 ph-3 c-gray3 ta-center fs-16 lh-2d0"
    style={{ marginTop: 'auto' }}>
    <FooterLink to="/services">Services</FooterLink>
    <Divider />
    <FooterLink to="/blog">Blog</FooterLink>
    <br className="d-none-m" />
    <Divider className="d-none d-inlineBlock-m" />
    <FooterLink to="/careers">Careers</FooterLink>
  </footer>
);

export default Footer;
