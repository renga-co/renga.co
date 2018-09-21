import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import CalloutLink from '../components/type-callout-link';
import ContactLink from '../components/contact-link';
import Content from '../components/content';
import Icon from '../components/icon';
import Layout from '../components/layout';
import Title from '../components/type-title';
import TherapistIllustration from '../components/therapist-illustration';
import squiggleAUrl from '../assets/images/squiggle-a.svg';

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
    phrase: <span>“I don’t know where to begin&nbsp;with ecommerce.”</span>,
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
    phrase: <span>“I’m looking to freshen up my website and&nbsp;logo.”</span>,
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
        'p-relative d-inlineBlock xo-2 fs-16 fs-24-m fw-semibold pa-3 br-30 ta-center t--0d5-m',
      )}
      style={{
        flex: '1 0 50%',
      }}>
      <div
        className="p-absolute p-fill br-30 bgc-brown"
        style={{ transform: person.transform }}
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
        className="pe-none us-none mw-120 mw-170-m"
      />
    </div>
  </div>
);

const IndexPage = () => (
  <Layout>
    <div className="lh-1d5">
      <div className="x xd-column xd-row-m ta-center xa-center mw-900 mh-auto mt-3 mb-6">
        <div className="mb-4 mb-0-m w-50p-m">
          <Title className="mb-2 mb-4-m lh-1d25">
            Renga is a <span className="intro-squiggle">brand therapy</span>{' '}
            group from <span className="ws-noWrap">Toronto</span>.
          </Title>
          <div />
          <CalloutLink className="fs-16">
            <ContactLink className="x xa-center xj-center">
              Let’s chat <Icon name="arrow-right" iconSize={18} />
            </ContactLink>
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
        <Content>
          <p>
            We know that each of our clients have their own unique challenges as
            a growing business or brand, so we work alongside you to deliver a
            custom solution that fits.
          </p>
        </Content>
        <div className="mt-5 x xd-column xd-row-m xa-center xj-center fs-16 lh-1d25">
          <CalloutLink>
            <ContactLink>Let’s chat</ContactLink>
          </CalloutLink>
          <span
            className="p-relative pv-2 pv-0-m ph-2-m fs-14 o-50p"
            style={{ top: -1 }}>
            or
          </span>
          <CalloutLink>
            <Link to="/services">
              See our services{' '}
              <Icon
                name="arrow-right"
                className="p-relative"
                style={{ top: 2 }}
                iconSize={18}
                size={18}
              />
            </Link>
          </CalloutLink>
        </div>
        <div className="mv-6 ta-center c-geraldine pe-none us-none">
          <img alt="" style={{ maxWidth: 300 }} src={squiggleAUrl} />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
