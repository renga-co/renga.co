import React from 'react';
import './post-content.css';

function PostContent(props) {
  return (
    <div
      className="PostContent c-gray4"
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
  );
}

export default PostContent;
