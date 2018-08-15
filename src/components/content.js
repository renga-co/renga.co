import React from 'react';
import cx from 'classnames';
import './content.css';

const Content = ({ className, ...props }) => (
  <div className={cx('Content', className)} {...props} />
);

export default Content;
