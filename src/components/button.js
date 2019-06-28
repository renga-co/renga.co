// @flow

import React from 'react';
import cx from 'classnames';
import './button.css';

type Props = {
  large: boolean,
  inline: boolean,
  isDisabled: boolean,
  isLoading: boolean,
}

const Button = ({ className, large, inline, ...props }: Props) => (
  <button className={cx(className, 'Button bgc-geraldine', { 'Button--large': large, 'Button--inline': inline })} {...props} />
);

export default Button;
