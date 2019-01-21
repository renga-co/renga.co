import React from 'react';

import utils from '../utils';
import './post-preview.css';

const PostPreview = props => {
  const { post } = props;
  const date = new Date(post.fields.date);
  const excerpt = post.frontmatter.excerpt || post.excerpt;

  return (
    <div className="PostPreview x-m xa-center-m mb-4">
      <div>
        <time
          className="d-block PostPreview-timestamp fs-16 mb-1 c-gray3"
          dateTime={date.toISOString()}>
          {utils.formatPostTimestamp(date)}
        </time>
        <h3 className="PostPreview-title fs-24 fw-semibold mb-1">
          {post.frontmatter.title}
        </h3>
        <p className="fs-18">{excerpt}</p>
      </div>
    </div>
  );
};

export default PostPreview;
