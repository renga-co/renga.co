import React from 'react';
import cx from 'classnames';

const Subtitle = ({ className, ...props }) => (
  <h3 className={cx('fs-21 fw-semibold', className)} {...props} />
);

export default Subtitle;
