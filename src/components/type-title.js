import React from 'react';
import cx from 'classnames';

const Title = ({ className, ...props }) => (
  <h1 className={cx('fs-30 fs-36-m fw-semibold', className)} {...props} />
);

export default Title;
