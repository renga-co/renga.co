import React from 'react';
import Link from 'gatsby-link';
import cx from 'classnames';

import Content from '../components/content';
import Icon from '../components/icon';
import TherapistIllustration from '../components/therapist-illustration';

const people = [
  {
    id: 'geoffrey',
    phrase: 'I’m having a hard time adapting to the current digital landscape.',
    pictureUrl: require('../assets/people/geoffrey.png'),
  },
  {
    id: 'francene',
    phrase: 'I don’t know where to begin with ecommerce.',
    pictureUrl: require('../assets/people/francene.png'),
  },
  {
    id: 'gerald',
    phrase:
      'I need help getting my idea for a new business or product off the ground.',
    pictureUrl: require('../assets/people/gerald.png'),
  },
  {
    id: 'emily',
    phrase: (
      <span>
        I’m looking to freshen up<br />my website and logo.
      </span>
    ),
    pictureUrl: require('../assets/people/emily.png'),
  },
];

const PersonQuote = ({ person, isRightAligned }) => (
  <div className="x xa-center mh-auto pv-2">
    <blockquote
      className={cx(
        'x-1 xo-2 fs-24 pv-2 ph-4 mb-6 c-geraldine bgc-gray1 br-40',
        {
          'ta-right': !isRightAligned,
        },
      )}
      style={{
        [isRightAligned
          ? 'borderBottomLeftRadius'
          : 'borderBottomRightRadius']: 0,
      }}>
      {person.phrase}
    </blockquote>
    <div
      className={cx('d-inlineBlock', {
        'xo-1 pr-3 mr-auto': isRightAligned,
        'xo-3 pl-3 ml-auto': !isRightAligned,
      })}>
      <img src={person.pictureUrl} width={170} height={170} />
    </div>
  </div>
);

const IndexPage = () => (
  <div className="lh-1d5">
    <div className="x xd-column xd-row-m ta-center xa-center mw-900 mh-auto mt-3 mb-6">
      <div className="mb-4 mb-0-m w-50p-m">
        <h1 className="fs-30 fs-36-m fw-semibold mb-2 mb-4-m lh-1d25">
          Renga is a brand therapy group from{' '}
          <span className="ws-noWrap">Toronto</span>.
        </h1>
        <div />
        <a
          className="xi xa-center fs-16 fw-semibold c-gray3 ls-loose tt-uppercase"
          href="/about">
          What is brand therapy?
        </a>
      </div>
      <div className="w-50p-m">
        <TherapistIllustration />
      </div>
    </div>
    <div className="mw-700 mh-auto">
      <Content>
        <p>
          Rather than a quick fix mentality, we want to work alongside your
          startup, existing business, or new idea in order to help you build a
          strong core identity and reach the right people.
        </p>
        <p>Enough about us, let's talk about why you’re here.</p>
      </Content>

      <div className="pv-4">
        {people.map((person, i) => (
          <PersonQuote
            key={person.id}
            person={person}
            isRightAligned={i % 2 === 0}
          />
        ))}
      </div>

      <Content>
        <p className="c-gray4 mb-6">
          We know that each of our clients have their own unique challenges as a
          growing business or brand, so we work alongside you to deliver a
          custom solution that fits. The first thing we like to do is{' '}
          <em>listen</em>, and learn about your problems.
        </p>
        <p class="c-gray4 ta-center mb-6">
          <div className="mb-2">
            <strong>Sound interesting?</strong>
          </div>
          <a href="mailto:hello@renga.co">Schedule your first session</a> or<br />look
          at <a href="/services">services we offer.</a>
        </p>
      </Content>
    </div>
  </div>
);

export default IndexPage;
