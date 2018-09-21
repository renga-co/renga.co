import React, { Component } from 'react';

class ContactLink extends Component {
  handleClick = e => {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(e);
    }

    if (window.drift) {
      e.preventDefault();
      window.drift.api.sidebar.open();
    }
  };

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        {...this.props}
        href="mailto:hello@renga.co"
        rel="noopener noreferrer"
        target="_blank"
        onClick={this.handleClick}
      />
    );
  }
}

export default ContactLink;
