import React, { Component } from 'react';
import { Link } from 'gatsby';
import Logo from '../components/logo';
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
    const links = [
      { to: '/about', text: 'About' },
      { to: '/services', text: 'Services' },
      { to: '/contact', text: 'Contact' },
    ];

    return (
      <div className="p-relative ph-3-m pb-3 z-3">
        <div className="x xa-center xj-spaceBetween pv-3">
          <Link className="d-block x xa-center h-fade" to="/">
            <Logo width="56" height="56" />
          </Link>
          <nav className="d-none-m fs-18">
            <a href="/" className="c-gray3" onClick={this.handleMenuToggle}>
              {this.state.isMenuOpen ? 'Close' : 'Menu'}
            </a>
          </nav>
          <nav className="d-none d-block-m fs-18 ml-3">
            {links.map(link => (
              <Link
                className="c-gray3 h-black pa-1 ml-2"
                activeClassName="c-gray6"
                to={link.to}>
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
        {this.state.isMenuOpen && (
          <div className="d-none-m x xd-column mb-5 bgc-offwhite ta-center fs-18">
          {links.map(link => (
            <Link
              className="Navigation-mobileMenuLink c-gray3 pa-3"
              activeClassName="c-gray6"
              to={link.to}
              onClick={this.handleMobileLinkClick}>
              {link.text}
            </Link>
          ))}
          </div>
        )}
      </div>
    );
  }
}
