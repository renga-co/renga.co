import React from 'react';
import cx from 'classnames';
import Content from '../components/content';
import Subtitle from '../components/type-subtitle';

const Callout = ({ className, title, body, links, ...props }) => (
  <aside className={cx('ta-center mh-auto', className)} {...props}>
    <Content className="c-gray4 mb-3">
      {title && <Subtitle className="mb-1">{title}</Subtitle>}
      {body}
    </Content>
    {links}
  </aside>
);

export default Callout;
