import React from 'react';

function PostContent(props) {
  return (
    <div
      className="PostContent"
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
  );
}

export default PostContent;
