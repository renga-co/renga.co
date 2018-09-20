import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import Callout from '../components/callout';
import CalloutLink from '../components/type-callout-link';
import Content from '../components/content';
import Layout from '../components/layout';
import TherapistIllustration from '../components/therapist-illustration';
import squiggleAUrl from '../assets/images/squiggle-a.svg';
import squiggleBUrl from '../assets/images/squiggle-b.svg';

const people = [
  {
    id: 'francene',
    phrase: (
      <span>
        “I’m having a hard time adapting to the current digital landscape.”
      </span>
    ),
    pictureUrl: require('../assets/images/person-francene.svg'),
    transform: 'skew(1deg)',
  },
  {
    id: 'gerald',
    phrase: <span>“I don’t know where to begin with&nbsp;ecommerce.”</span>,
    pictureUrl: require('../assets/images/person-gerald.svg'),
    transform: 'skew(-4deg)',
  },
  {
    id: 'geoffrey',
    phrase: (
      <span>
        “I need help getting my idea for a new business or product off the
        ground.”
      </span>
    ),
    pictureUrl: require('../assets/images/person-geoffrey.svg'),
    transform: 'skew(5deg)',
  },
  {
    id: 'emily',
    phrase: (
      <span>
        “I’m looking to freshen up
        <br />
        my website and logo.”
      </span>
    ),
    pictureUrl: require('../assets/images/person-emily.svg'),
    transform: 'skew(-1deg) rotate(-1deg)',
  },
];

const PersonQuote = ({ person, isRightAligned }) => (
  <div
    className={cx('x xa-center xj-center pv-3 pv-4-m', {
      'ta-left ta-center-m': isRightAligned,
      'ta-right ta-center-m': !isRightAligned,
    })}>
    <blockquote
      className={cx(
        'p-relative d-inlineBlock xo-2 fs-18 fs-24-m fw-semibold pa-3 br-30 ta-center t--0d5-m',
      )}
      style={{
        flex: '1 0 50%',
      }}>
      <div
        className="p-absolute p-fill br-30"
        style={{
          backgroundColor: 'rgb(245, 241, 237)',
          transform: person.transform,
        }}
      />
      <span className="p-relative z-2">{person.phrase}</span>
    </blockquote>
    <div
      className={cx('d-inlineBlock ta-center', {
        'xo-1 pr-3': isRightAligned,
        'xo-3 pl-3': !isRightAligned,
      })}
      style={{ flex: '1 0 auto' }}>
      <img
        src={person.pictureUrl}
        alt=""
        className="pe-none us-none mw-100 mw-170-m"
      />
    </div>
  </div>
);

const IndexPage = () => (
  <Layout>
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
          <CalloutLink className="fs-16">
            <a href="mailto:hello@renga.co">Book a session &rarr;</a>
          </CalloutLink>
        </div>
        <div className="w-50p-m mw-450 mh-auto">
          <TherapistIllustration />
        </div>
      </div>
      <div className="mw-700 mh-auto ta-center">
        <Content>
          <h3 className="fs-24 mb-3 fw-semibold">What is brand therapy?</h3>
          <p>
            It's an approach to branding that starts from a relational,
            collaborative place. We work alongside you to help you build a
            strong core identity and reach the right people.
          </p>
          <p>Now, let's talk about why you’re here.</p>
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
            We know that each of our clients have their own unique challenges as
            a growing business or brand, so we work alongside you to deliver a
            custom solution that fits.
          </p>
        </Content>
        <div className="mv-5 ta-center c-geraldine pe-none us-none">
          <img alt="" style={{ maxWidth: 300 }} src={squiggleAUrl} />
        </div>
        <Callout
          className="mb-6"
          title="Ready to take the first steps?"
          body={
            <p>
              We'd love to spend some time hearing your story
              <br />
              and working through your brand.
            </p>
          }
          links={
            <div className="x xd-column xd-row-m xa-center xj-center fs-16 lh-1d7">
              <CalloutLink>
                <a href="mailto:hello@renga.co">Book a session</a>
              </CalloutLink>
              <span
                className="p-relative pv-2 pv-0-m ph-2-m fs-14 o-50p"
                style={{ top: -1 }}>
                or
              </span>
              <CalloutLink>
                <Link to="/services">See our services &rarr;</Link>
              </CalloutLink>
            </div>
          }
        />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
