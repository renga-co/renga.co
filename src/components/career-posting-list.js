import React, { Component } from 'react';
import cx from 'classnames';
import scrollTo from 'animated-scroll-to';
import Content from '../components/content';
import './career-posting-list.css';

const IconDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const IconUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const PostingContactLink = ({ email, title }) => (
  <a
    href={`mailto:${email}?subject=${encodeURIComponent(title)}`}
    target="_blank"
    rel="noopener noreferrer">
    {email}
  </a>
);

const CareerPosting = ({ posting, email, isOpen, onClick }) => {
  return (
    <div
      key={posting.id}
      id={posting.id}
      className={cx('CareerPosting mb-3 br-12 ta-left', {
        'CareerPosting--isOpen bgc-brown': isOpen,
      })}>
      <a
        href={'#' + posting.id}
        className={cx('x xj-spaceBetween', { 'ph-3 pt-3': isOpen, 'pa-3': !isOpen })}
        onClick={onClick}>
        <h2 className="fs-21 fw-semibold">{posting.frontmatter.title}</h2>
        <div className="us-none">{isOpen ? <IconUp /> : <IconDown />}</div>
      </a>
      {isOpen && (
        <div className="ph-3 fs-18">
          <Content dangerouslySetInnerHTML={{ __html: posting.html }} />
          <Content>
            <p className="ta-center pa-3 pb-4 ">
              To apply, please send your resume to{' '}
              <PostingContactLink
                email={email}
                title={posting.frontmatter.title}
              />
              .
            </p>
          </Content>
        </div>
      )}
    </div>
  );
};

export default class CareerPostingList extends Component {
  state = {
    activePostingId: null,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);

    const initialId = window.location.hash.slice(1);
    const postingIds = this.props.postings.map(({ node: p }) => p.id);

    if (initialId && postingIds.includes(initialId)) {
      this.openPosting(initialId);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.which === 27) {
      this.closePosting();
    }
  }

  handlePostingClick = id => e => {
    e.preventDefault();

    if (this.state.activePostingId === id) {
      this.closePosting();
      return;
    }

    this.openPosting(id);
  };

  closePosting = () => {
    this.setState({ activePostingId: null });
    window.history.pushState({}, '', '/careers');
  }

  openPosting = id => {
    this.setState({ activePostingId: id }, () => {
      const el = document.getElementById(id);
      window.history.pushState({}, '', '#' + id);
      scrollTo(el, { offset: -50 });
    });
  };

  render() {
    const { postings, email } = this.props;
    const { activePostingId } = this.state;

    return (
      <div>
        {postings.map(({ node: posting }) => (
          <CareerPosting
            key={posting.id}
            posting={posting}
            email={email}
            isOpen={activePostingId === posting.id}
            onClick={this.handlePostingClick(posting.id)}
          />
        ))}
      </div>
    );
  }
}
