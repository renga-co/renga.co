// @flow

import React from 'react';
import cx from 'classnames';
import './form-input.css';

type Props = {
  name: string,
  label: string,
  isDisabled: boolean,
};

/* <fieldset>
  <label for={name}>{label}</label>
</fieldset> */

const FormInput = ({ className, name, label, ...props }: Props) => (
  <input name={name} className={cx(className, 'FormInput')} type="text" {...props} />
);

export default FormInput;
