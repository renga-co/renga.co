import React from 'react';
import cx from 'classnames';

const Title = ({ className, ...props }) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h1 className={cx('fs-30 fs-36-m fw-bold', className)} {...props} />
);

export default Title;
