import React, { Component, Fragment } from 'react';
import Link from 'gatsby-link';
import Icon from '../components/icon';

class Menu extends Component {
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

  handleLinkClick = e => {
    this.setState({ isMenuOpen: false });
  };

  handleMenuClose = e => {
    e.preventDefault();
    this.setState({ isMenuOpen: false });
  };

  render() {
    return (
      <Fragment>
        <nav className="d-none-m fs-18">
          <a href="/" className="c-gray3" onClick={this.handleMenuToggle}>
            Menu
          </a>
          {this.state.isMenuOpen && (
            <div className="x xd-column p-absolute p-fill bgc-offwhite ta-center">
              <Link
                className="d-block c-gray3 pa-3"
                activeClassName="c-gray6"
                to="/services"
                onClick={this.handleLinkClick}>
                Services
              </Link>
              <Link
                className="d-block c-gray3 pa-3"
                activeClassName="c-gray6"
                to="/blog"
                onClick={this.handleLinkClick}>
                Blog
              </Link>
              <a
                href="mailto:hello@renga.co"
                className="d-block c-gray3 pa-3"
                onClick={this.handleLinkClick}>
                Contact
              </a>
              <a
                href="/"
                onClick={this.handleMenuClose}
                className="p-absolute t-0 r-0">
                Close
              </a>
            </div>
          )}
        </nav>
        <nav className="d-none d-block-m fs-18 ml-3">
          <Link
            className="c-gray3 pa-1"
            activeClassName="c-gray6"
            to="/services">
            Services
          </Link>
          <Link
            className="c-gray3 pa-1 ml-2"
            activeClassName="c-gray6"
            to="/blog">
            Blog
          </Link>
          <a href="mailto:hello@renga.co" className="c-gray3 pa-1 ml-2">
            Contact{' '}
            <span className="p-relative" style={{ top: 2, left: 1 }}>
              <Icon name="arrow-right" size={16} iconSize={18} />
            </span>
          </a>
        </nav>
      </Fragment>
    );
  }
}

const Navigation = ({ siteTitle }) => (
  <div className="ph-3-m">
    <div className="x xa-center xj-spaceBetween pv-4">
      <Link className="d-block x xa-center" to="/">
        <svg
          height="56"
          viewBox="0 0 140 140"
          width="56"
          xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="m0 70.0000002c0 52.1682358 17.8513725 69.9999998 70.0000001 69.9999998 52.1486279 0 69.9999999-17.829412 69.9999999-69.9999998 0-52.1705881-17.850196-70.0000002-69.9999999-70.0000002-52.1498036 0-70.0000001 17.8317647-70.0000001 70.0000002z"
              fill="#ff766a"
            />
            <g stroke="#fff" strokeWidth="4.5" transform="translate(39 30)">
              <path d="m15.75 40.0141509v-37.7641509h-10.35c-1.73969696 0-3.15 1.41030304-3.15 3.15v34.6141509zm0 13.5566038h-13.5v23.4292453c0 .4142136.33578644.75.75.75h12c.4142136 0 .75-.3357864.75-.75z" />
              <path d="m29.448076 54.7511363 15.755437 21.6995995c.5926315.8162176 1.5403016 1.2992642 2.5489757 1.2992642h14.1157652c.4142135 0 .75-.3357864.75-.75 0-.1637387-.0535842-.3229789-.1525715-.4534084l-18.4325649-24.2874626z" />
              <path d="m2.25322619 53.5199772c16.17510061.1104024 27.44993821.1051576 33.81175021-.0154329 8.3135293-.157586 13.3533735-2.5466408 18.3587604-8.0265026 4.4015424-4.8187771 6.6535771-10.9821433 6.6535771-18.1460457 0-7.5900901-1.8539548-12.937531-6.3325978-17.52182528-5.4063727-5.53390918-10.2810758-7.56017072-20.0673986-7.56017101l-29.2062766.01486396c-1.73729608.00088416-3.14588672 1.40815972-3.14839359 3.14545422z" />
              <path d="m2.25 40.0189896 31.7635817.0683816c4.8864809 0 8.1728439-1.3531542 10.3548078-3.7985849 1.8027503-2.0204279 2.8816105-5.2736639 2.8816105-8.364258 0-3.5978565-.7372684-6.2039032-2.64702-8.3487116-2.3826856-2.6759522-5.0199683-3.740911-10.1015427-3.7409115l-32.2514373.0206017z" />
            </g>
          </g>
        </svg>
      </Link>
      <Menu />
    </div>
  </div>
);

export default Navigation;
