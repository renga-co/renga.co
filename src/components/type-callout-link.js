import React from 'react';
import cx from 'classnames';

const CalloutLink = ({ className, ...props }) => (
  <span
    className={cx('fw-semibold o-75p ls-loose tt-uppercase', className)}
    {...props}
  />
);

export default CalloutLink;
