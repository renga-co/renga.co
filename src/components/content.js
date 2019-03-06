import React from 'react';
import cx from 'classnames';
import './content.css';

const Content = ({ className, isCaseStudy, ...props }) => (
  <div
    className={cx(
      'Content',
      { 'Content--caseStudy': isCaseStudy, 'Content--standard': !isCaseStudy },
      className,
    )}
    {...props}
  />
);

export default Content;
