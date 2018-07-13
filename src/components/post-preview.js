import React from 'react';
import Image from 'gatsby-image';

import utils from '../utils';

function PostPreview(props) {
  const { post } = props;
  const date = new Date(post.fields.date);

  console.log(post);

  return (
    <div className="x-m xa-center-m mb-3">
      <div className="w-50p-m pr-3-m">
        <Image sizes={post.frontmatter.cover.childImageSharp.sizes} />
      </div>
      <div className="w-50p-m">
        <time className="fs-14 mb-2 c-gray3" dateTime={date.toISOString()}>
          {utils.formatPostTimestamp(date)}
        </time>
        <h3 className="fs-18 fw-semibold">{post.frontmatter.title}</h3>
      </div>
    </div>
  );
}

export default PostPreview;
