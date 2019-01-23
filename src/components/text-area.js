// @flow

import React from 'react';
import cx from 'classnames';
import AutosizeTextArea from 'react-textarea-autosize';
import './text-area.css';

type Props = {
  className?: string,
  minRows: number,
  maxRows: number,
};

const TextArea = ({ className, ...props }: Props) => (
  <AutosizeTextArea className={cx('TextArea', className)} {...props} />
);

export default TextArea;
