import React from 'react';
import cx from 'classnames';
import Content from '../components/content';

const Callout = ({ className, title, body, links, ...props }) => (
  <aside className={cx('ta-center mh-auto', className)}>
    <Content className="c-gray4 mb-3 mb-4-m">
      {title && <h3 className="fw-semibold mb-1">{title}</h3>}
      {body}
    </Content>
    {links}
  </aside>
);

export default Callout;
