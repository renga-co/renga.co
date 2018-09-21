import React, { Component } from 'react';
import { Link } from 'gatsby';
import Logo from '../components/logo';
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
            <Logo width="56" height="56" />
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
