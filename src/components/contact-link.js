import React, { Component, Fragment } from 'react';
import Icon from '../components/icon';

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
    const { children, withArrowIcon, ...rest } = this.props;

    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        {...rest}
        href="mailto:hello@renga.co"
        rel="noopener noreferrer"
        target="_blank"
        onClick={this.handleClick}>
        {children}
        {withArrowIcon && (
          <Fragment>
            {' '}
            <Icon
              name="arrow-right"
              className="p-relative"
              style={{ top: 3 }}
              iconSize={18}
              size={18}
            />
          </Fragment>
        )}
      </a>
    );
  }
}

export default ContactLink;
