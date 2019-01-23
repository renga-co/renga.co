// @flow

import React from 'react';
import cx from 'classnames';
import './button.css';

type Props = {
  small: boolean,
  inline: boolean,
  isDisabled: boolean,
  isLoading: boolean,
}

const Button = ({ className, small, inline, ...props }: Props) => (
  <button className={cx(className, 'Button bgc-geraldine', { 'Button--small': small, 'Button--inline': inline })} {...props} />
);

export default Button;
