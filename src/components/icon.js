import React, { PureComponent } from 'react';

const icons = {
  'arrow-right': props => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  'arrow-up-right': props => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  ),
};

export default class Icon extends PureComponent {
  static defaultProps = {
    iconSize: 24,
    size: 24,
  };

  render() {
    const { name, iconSize, size, style, ...rest } = this.props;
    const Component = icons[name];

    if (typeof Component !== 'function') {
      return null;
    }

    return (
      <span
        style={{
          ...style,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: size,
          height: size,
        }}
        {...rest}>
        <Component width={iconSize} height={iconSize} />
      </span>
    );
  }
}
