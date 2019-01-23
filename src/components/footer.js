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
    <FooterLink to="/about">About</FooterLink>
    <Divider />
    <FooterLink to="/services">Services</FooterLink>
    <Divider />
    <FooterLink to="/blog">Blog</FooterLink>
    <div className="d-block d-inline-m">
      <Divider className="d-none d-inline-m" />
      <FooterLink to="/careers">Careers</FooterLink>
      <Divider />
      <a className="h-black" href="https://renga.us9.list-manage.com/subscribe/post?u=116eb673d498b75ebfe2310ab&amp;id=1d0c69997b">Newsletter</a>
      <Divider />
      <FooterLink to="/contact">Contact</FooterLink>
    </div>
  </footer>
);

export default Footer;
