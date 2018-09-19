import React from 'react';
import cx from 'classnames';

const Subtitle = ({ className, ...props }) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h3 className={cx('fs-21 fw-semibold', className)} {...props} />
);

export default Subtitle;
