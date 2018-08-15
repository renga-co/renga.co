import React from 'react';
import Content from './content';

const PostContent = props => (
  <Content
    className="PostContent c-gray4"
    dangerouslySetInnerHTML={{ __html: props.html }}
  />
);

export default PostContent;
