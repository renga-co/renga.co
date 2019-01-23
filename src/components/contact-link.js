import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import Icon from '../components/icon';

const ContactLink = ({ children, withArrowIcon, ...rest }) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <Link
    to="/contact"
    {...rest}>
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
  </Link>
);

export default ContactLink;
