import React, { Component } from 'react';
import fitvids from 'fitvids';
import Content from './content';

export default class PostContent extends Component {
  componentDidMount() {
    fitvids();
  }

  render() {
    return (
      <Content
        className="PostContent c-gray4"
        dangerouslySetInnerHTML={{ __html: this.props.html }}
      />
    );
  }
}
