import React from 'react';

function PostContent(props) {
  return (
    <div
      className="PostContent fs-16 fs-18-m"
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
  );
}

export default PostContent;
