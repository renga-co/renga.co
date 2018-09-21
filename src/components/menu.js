import React, { Component } from 'react';
import Link from 'gatsby-link';
import ContactLink from '../components/contact-link';
import './menu.css';

export default class Menu extends Component {
  state = {
    isMenuOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isMenuOpen !== this.state.isMenuOpen) {
      const action = this.state.isMenuOpen
        ? 'addEventListener'
        : 'removeEventListener';

      window[action]('keydown', this.handleKeyDown, false);
    }
  }

  handleKeyDown = e => {
    // ESC
    if (e.keyCode === 27) {
      this.setState({ isMenuOpen: false });
    }
  };

  handleMenuToggle = e => {
    e.preventDefault();
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  handleMobileLinkClick = e => {
    this.setState({ isMenuOpen: false });
  };

  handleMenuClose = e => {
    e.preventDefault();
    this.setState({ isMenuOpen: false });
  };

  render() {
    return (
      <div className="ph-3-m pb-3">
        <div className="x xa-center xj-spaceBetween pv-3 pv-4-m">
          <Link className="d-block x xa-center h-fade" to="/">
            <svg
              height="56"
              viewBox="0 0 70 70"
              width="56"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                  d="m0 35.0000001c0 26.0841178 8.92568627 34.9999999 35 34.9999999 26.0743138 0 35-8.9147058 35-34.9999999 0-26.08529406-8.9250982-35.0000001-35-35.0000001-26.07490175 0-35 8.91588237-35 35.0000001z"
                  fill="#ff766a"
                />
                <g
                  stroke="#fff"
                  strokeWidth="2.25"
                  transform="translate(19.5 15)">
                  <path d="m8.375 20.0070755v-18.8820755h-5.175c-.86984848 0-1.575.70515152-1.575 1.575v17.3070755zm0 6.7783019h-6.75v11.7146226c0 .2071068.16789322.375.375.375h6c.20710678 0 .375-.1678932.375-.375z" />
                  <path d="m14.8055217 27.4877937 7.7962348 10.7375742c.2963157.4081088.7701508.6496321 1.2744878.6496321h7.066001c.2071068 0 .375-.1678932.375-.375 0-.0815941-.0266124-.1609618-.0758001-.226063l-8.7561644-11.5889967z" />
                  <path d="m1.62661309 26.7599886c8.08755033.0552012 13.72496911.0525788 16.90587511-.0077164 4.1567646-.0787931 6.6766867-1.2733204 9.1793802-4.0132514 2.2007712-2.4093885 3.3267885-5.4910716 3.3267885-9.0730228 0-3.79504505-.9269774-6.4687655-3.1662988-8.76091264-2.7031864-2.76695459-5.1405379-3.78008536-10.0336994-3.78008551l-14.60313825.00743198c-.86864804.00044208-1.57294336.70407986-1.5741968 1.57272711z" />
                  <path d="m1.625 20.0094948 15.8817909.0341908c2.4432404 0 4.0864219-.6765771 5.1774039-1.8992924.9013751-1.010214 1.4408052-2.636832 1.4408052-4.182129 0-1.7989283-.3686342-3.1019517-1.32351-4.17435585-1.1913428-1.33797611-2.5099842-1.87045552-5.0507714-1.87045575l-16.1257186.01030085z" />
                </g>
              </g>
            </svg>
          </Link>
          <nav className="d-none-m fs-18">
            <a href="/" className="c-gray3" onClick={this.handleMenuToggle}>
              {this.state.isMenuOpen ? 'Close' : 'Menu'}
            </a>
          </nav>
          <nav className="d-none d-block-m fs-18 ml-3">
            <Link
              className="c-gray3 h-black pa-1"
              activeClassName="c-gray6"
              to="/services">
              Services
            </Link>
            <Link
              className="c-gray3 h-black pa-1 ml-2"
              activeClassName="c-gray6"
              to="/blog">
              Blog
            </Link>
            <ContactLink className="c-gray3 h-black pa-1 ml-2" withArrowIcon>
              Let’s chat
            </ContactLink>
          </nav>
        </div>
        {this.state.isMenuOpen && (
          <div className="d-none-m x xd-column mb-5 ta-center">
            <Link
              className="Navigation-mobileMenuLink c-gray3 pa-3"
              activeClassName="c-gray6"
              to="/services"
              onClick={this.handleMobileLinkClick}>
              Services
            </Link>
            <Link
              className="Navigation-mobileMenuLink c-gray3 pa-3"
              activeClassName="c-gray6"
              to="/blog"
              onClick={this.handleMobileLinkClick}>
              Blog
            </Link>
            <ContactLink
              className="Navigation-mobileMenuLink c-gray3 pa-3"
              onClick={this.handleMobileLinkClick}>
              Let’s chat
            </ContactLink>
          </div>
        )}
      </div>
    );
  }
}
