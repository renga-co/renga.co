import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import CalloutLink from '../components/type-callout-link';
import ContactLink from '../components/contact-link';
import Content from '../components/content';
import Icon from '../components/icon';
import Layout from '../components/layout';
import Button from '../components/button';
import Title from '../components/type-title';
import TherapistIllustration from '../components/illustration-therapist';
import CollaborationIllustration from '../components/illustration-collaboration';
import linesIllustrationUrl from '../assets/images/hero-shapes.svg';
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
    pictureAltText: 'Francene, a small business owner, looking confused.',
    transform: 'skew(1deg)',
  },
  {
    id: 'gerald',
    phrase: <span>“I don’t know where to begin&nbsp;with ecommerce.”</span>,
    pictureUrl: require('../assets/images/person-gerald.svg'),
    pictureAltText: 'Gerald, a long-time businessman looks disheveled.',
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
    pictureAltText:
      'Geoffrey, owner of a new start-up looks smug, but in need of help.',
    transform: 'skew(5deg)',
  },
  {
    id: 'emily',
    phrase: <span>“I’m looking to freshen up my website and&nbsp;logo.”</span>,
    pictureUrl: require('../assets/images/person-emily.svg'),
    pictureAltText:
      'Emily, the energetic bakery owner, is excited to bring her business online.',
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
        'p-relative d-inlineBlock xo-2 fs-16 fs-24-m fw-bold pa-2 pa-3-m br-30 ta-center t--0d5-m',
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
        alt={person.pictureAltText}
        className="pe-none us-none mw-120 mw-170-m"
      />
    </div>
  </div>
);

const IndexPage = () => (
  <Layout>
    <div className="lh-1d5">
      <div>
        <div
          className="x xj-center xj-start-m mb-4 mb-0-m pt-3-m pb-6 pb-3-m ta-center mh-auto"
          style={{ maxWidth: 1300 }}>
          <div class="p-relative w-50p-m ta-left-m pt-5-m pb-5 pb-6-m mb-5 mb-4-m z-2">
            <h3 class="fs-16 fs-18-m c-gray3 mb-1">
              Renga is a brand strategy & <span class="ws-noWrap">design studio</span>
            </h3>
            <h1
              className="fs-36 fs-48-m fw-bold c-gray5 mb-2 mb-3-m lh-1d25">
              We build brand confidence
            </h1>
            <div class="x xa-stretch xj-center xj-start-m">
              <span class="mr-1">
                <Button small inline>
                  <span
                    className="p-relative x xa-center"
                    style={{ top: -1, left: -4 }}>
                    <Icon name="play" size={18} iconSize={13} />
                  </span>
                  View our reel
                </Button>
              </span>
              <Link to="/contact">
                <Button small inline style={{ height: '100%' }}>
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div class="p-relative mw-900 mh-auto">
          <div
            class="p-absolute z-1 hero-illustration-people">
            <CollaborationIllustration />
          </div>
          <div className="p-relative hero-line z-2" />
        </div>
        <div
          class="hero-illustration bgr-noRepeat pe-none"
          style={{ backgroundImage: `url(${linesIllustrationUrl})` }}
        />
      </div>
      <div className="mw-700 mh-auto ta-center pv-4">
        <Content>
          <h3 className="fs-24 mb-3 fw-bold">
            Do you have a healthy brand identity?
          </h3>
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
          <p>If these questions resonate, you may have a brand identity problem.</p>
        </Content>
        <div className="mt-4 x xd-column xd-row-m xa-center xj-center lh-1d25">
          <Content>
            <p>
              All important decision making comes from a place of self-awareness,
              so discovery leads our entire process. From there, our team gets
              together and brings their unique blend of thinking to the creative
              process. Finally, because we work so closely with you, we deliver
              results that fit your brand’s identity.
            </p>
          </Content>
        </div>
        <div className="mt-6 ta-center c-geraldine pe-none us-none">
          <img alt="" style={{ maxWidth: 300 }} src={squiggleAUrl} />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
