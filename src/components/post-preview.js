import React from 'react';
import Image from 'gatsby-image';

import utils from '../utils';
import './post-preview.css';

function PostPreview(props) {
  const { post } = props;
  const date = new Date(post.fields.date);

  return (
    <div className="PostPreview x-m xa-center-m mb-3">
      <div>
        <time
          className="PostPreview-timestamp fs-18 mb-2 c-gray3"
          dateTime={date.toISOString()}>
          {utils.formatPostTimestamp(date)}
        </time>
        <h3 className="PostPreview-title fs-24 fw-semibold">
          {post.frontmatter.title}
        </h3>
        <p>{post.fields.excerpt}</p>
      </div>
    </div>
  );
}

export default PostPreview;
