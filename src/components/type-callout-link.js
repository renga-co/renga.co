import React from 'react';
import cx from 'classnames';

const CalloutLink = ({ className, ...props }) => (
  <span
    className={cx(
      'd-inlineBlock fw-bold c-gray3 h-black ls-loose tt-uppercase',
      className,
    )}
    {...props}
  />
);

export default CalloutLink;
