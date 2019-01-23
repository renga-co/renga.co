import React from 'react';
import cx from 'classnames';
import './type-step-number-badge.css';

const StepNumberBadge = ({ className, children }) => <span className={cx('StepNumberBadge c-geraldine fw-semibold', className)}>{children}</span>;

export default StepNumberBadge
