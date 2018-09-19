import React from 'react';
import Link from 'gatsby-link';
import cx from 'classnames';

import Content from '../components/content';
import Icon from '../components/icon';
import TherapistIllustration from '../components/therapist-illustration';

import squiggleAUrl from '../assets/images/squiggle-a.svg';
import squiggleBUrl from '../assets/images/squiggle-b.svg';

const people = [
  {
    id: 'francene',
    phrase: (
      <span>
        I’m having a hard time adapting to the current digital landscape.
      </span>
    ),
    pictureUrl: require('../assets/images/people/francene.svg'),
    skew: '1deg',
  },
  {
    id: 'gerald',
    phrase: <span>I don’t know where to begin with&nbsp;ecommerce.</span>,
    pictureUrl: require('../assets/images/people/gerald.svg'),
    skew: '2deg',
  },
  {
    id: 'geoffrey',
    phrase: (
      <span>
        I need help getting my idea for a new business or product off the
        ground.
      </span>
    ),
    pictureUrl: require('../assets/images/people/geoffrey.svg'),
    skew: '5deg',
  },
  {
    id: 'emily',
    phrase: (
      <span>
        I’m looking to freshen up<br />my website and logo.
      </span>
    ),
    pictureUrl: require('../assets/images/people/emily.svg'),
    skew: '-1deg',
  },
];

const PersonQuote = ({ person, isRightAligned }) => (
  <div
    className={cx('x-m xa-center xj-center pv-2', {
      'ta-left ta-center-m': isRightAligned,
      'ta-right ta-center-m': !isRightAligned,
    })}>
    <blockquote
      className={cx(
        'p-relative d-inlineBlock xo-2 fs-24 fw-semibold pa-3 br-30 ta-center',
      )}
      style={{
        top: '-0.5em',
        flex: '1 0 50%',
      }}>
      <div
        className="p-absolute p-fill br-30"
        style={{
          backgroundColor: 'rgb(245, 241, 237)',
          transform: `skew(${person.skew})`,
        }}
      />
      <span className="p-relative z-2">{person.phrase}</span>
    </blockquote>
    <div
      className={cx('d-inlineBlock', {
        'xo-1 pr-3': isRightAligned,
        'xo-3 pl-3': !isRightAligned,
      })}
      style={{ flex: '1 0 auto' }}>
      <img
        src={person.pictureUrl}
        className="pe-none us-none"
        width={170}
        height={170}
      />
    </div>
  </div>
);

const IndexPage = () => (
  <div className="lh-1d5">
    <div className="x xd-column xd-row-m ta-center xa-center mw-900 mh-auto mt-3 mb-6">
      <div className="mb-4 mb-0-m w-50p-m">
        <h1 className="fs-30 fs-36-m fw-semibold mb-2 mb-4-m lh-1d25">
          Renga is a{' '}
          <span
            style={{
              backgroundImage: `url('${squiggleBUrl}')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom center',
            }}>
            brand therapy
          </span>{' '}
          group from <span className="ws-noWrap">Toronto</span>.
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
    <div className="mw-700 mh-auto ta-center">
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

      <Content className="c-gray4">
        <p>
          We know that each of our clients have their own unique challenges as a
          growing business or brand, so we work alongside you to deliver a
          custom solution that fits.
        </p>
        <p>
          We <em>listen</em>, and <em>learn</em> then write together.
        </p>
        <div className="mv-6 ta-center c-geraldine pe-none us-none">
          <img style={{ maxWidth: 280 }} src={squiggleAUrl} />
        </div>
        <div className="mb-2 mb-6 ta-center">
          <h3 className="fw-semibold">Sound interesting?</h3>{' '}
          <p>
            <a href="mailto:hello@renga.co">Schedule your first session</a> or<br />look
            at <a href="/services">services we offer.</a>
          </p>
        </div>
      </Content>
    </div>
  </div>
);

export default IndexPage;
