import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Dialog } from '@reach/dialog';
import Content from '../components/content';
import Icon from '../components/icon';
import Layout from '../components/layout';
import Button from '../components/button';
import CollaborationIllustration from '../components/illustration-collaboration';
import illustrationWavingUrl from '../assets/images/home-waving.svg';
import illustrationTherapyUrl from '../assets/images/home-therapy.svg';
import formulaCollaborationUrl from '../assets/images/formula-collaboration.svg';
import formulaDiscoveryUrl from '../assets/images/formula-discovery.svg';
import formulaResultsUrl from '../assets/images/formula-results.svg';
import formulaPlusUrl from '../assets/images/formula-plus.svg';
import formulaEqualsUrl from '../assets/images/formula-equals.svg';
import squiggleAUrl from '../assets/images/squiggle-a.svg';

const testimonials = [
  {
    name: 'Brian',
    position: 'MoneyClip, Business Development',
    content:
      'Our start-up will live or die on brand messaging. We were lucky to find a team that simultaneously wears creative, entrepreneur, and customer hats.',
    portraitUrl: require('../assets/images/testimonial-brian.jpg'),
    to: '/work/moneyclip',
  },
  {
    name: 'Iain',
    position: 'Main St. Bakehouse, Founder',
    content:
      'Renga’s focus, attention to detail, and good design made it an easy experience for all of us. We were very happy with the outcome and have since established a well loved brand in our town.',
    portraitUrl: require('../assets/images/testimonial-iain.jpg'),
    to: '/work/main-street-bakehouse',
  },
  {
    name: 'Alex',
    position: 'Public Speaker',
    content:
      'Renga is able to pull your brand out through a process that is both clarifying and empowering.',
    portraitUrl: require('../assets/images/testimonial-alex.jpg'),
    to: '/brand-workshop',
    toLabel: <>Learn about our workshop &rarr;</>
  },
];

const ReelVideo = () => (
  <div>
    <div
      class="wistia_responsive_padding"
      style={{ paddingTop: '56.25%', position: 'relative' }}>
      <div
        className="wistia_responsive_wrapper"
        style={{
          height: '100%',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%',
        }}>
        <iframe
          src="https://fast.wistia.net/embed/iframe/otstly6tor?seo=false&videoFoam=true&autoPlay=true"
          title="2019 Brand Reel Video"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          className="wistia_embed"
          name="wistia_embed"
          allowfullscreen
          mozallowfullscreen
          webkitallowfullscreen
          oallowfullscreen
          msallowfullscreen
          width="100%"
          height="100%"
        />
      </div>
    </div>
    <script src="https://fast.wistia.net/assets/external/E-v1.js" async />
  </div>
);

const IndexPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <div className="lh-1d5">
        <div>
          <div className="x xj-center xj-start-m mb-4 mb-0-m pt-3-m pb-6 pb-3-m ta-center mw-1200 mh-auto">
            <div class="p-relative w-50p-m ta-left-m pt-5-m pb-5 pb-6-m mb-5 mb-4-m z-2">
              <h3 class="fs-14 fs-16-s fs-18-m c-gray3 mb-1">
                Renga is a brand strategy &{' '}
                <span class="ws-noWrap">design studio</span>
              </h3>
              <h1 className="fs-24 fs-30-s fs-48-m fw-bold c-gray5 mb-2 mb-3-m lh-1d25 ws-noWrap">
                We build brand confidence
              </h1>
              <div class="x xa-stretch xj-center xj-start-m">
                <span class="mr-1">
                  <Button small inline onClick={() => setOpen(true)}>
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
          <div class="p-relative mw-900 mh-auto" />
        </div>
        <Dialog
          isOpen={open}
          onDismiss={() => setOpen(false)}
          style={{ zIndex: 9999 }}>
          <ReelVideo />
        </Dialog>
        <div className="p-relative mw-1200 bgc-brown br-30 ph-3 mh-auto ta-center">
          <div class="p-absolute z-1 HeroIllustrationPeople">
            <CollaborationIllustration />
          </div>
          <div class="HeroIllustrationShapes bgr-noRepeat pe-none" />
          <div className="pv-4">
            <h3 className="fs-24 fw-bold">
              Does your business have a healthy brand identity?
            </h3>
            <div className="BrandIdentityQuestionGrid mw-700 mh-auto pv-3 pv-4-m fw-semibold">
              <div className="pv-1 ph-3 br-12 x xj-center xj-end-m xa-center">
                Are investors
                <br />
                “just not getting it”?
              </div>
              <div className="pv-1 ph-3 mt-1 mt-0-m br-12 x xj-center ta-left-m">
                Is senior leadership disagreeing
                <br />
                about the next steps?
              </div>
              <div className="pv-1 ph-3 mt-1 mt-0-m br-12 x xj-center xj-end-m xa-center">
                Do your employees
                <br />
                describe your business
                <br />
                in different ways?
              </div>
              <div className="pv-1 ph-3 mt-1 mt-0-m br-12 x xj-center xj-start-m xa-center ta-left-m">
                Are you trying new marketing
                <br />
                tactics without success?
              </div>
            </div>
            <Content>
              <p>
                If you said yes to any of those questions, you may have a{' '}
                <span className="ws-noWrap">brand identity problem.</span>
              </p>
            </Content>
          </div>
        </div>
        <div className="mw-1200 mh-auto ta-center pt-6 pe-none us-none">
          <img alt="" src={illustrationTherapyUrl} />
        </div>
        <div className="mw-700 ph-3 pt-5 mh-auto ta-center">
          <Content>
            <h3 className="fs-24 lh-1d25 mw-400 mb-3 fw-bold">
              We like to describe our work as{' '}
              <span className="ws-noWrap">brand therapy</span>
            </h3>
          </Content>
          <Content>
            <p>
              All important decision making comes from a place of
              self-awareness, so discovery leads our entire process. From there,
              our team gets together and brings their unique blend of thinking
              to the creative process. Finally, because we work so closely with
              you, we deliver results that fit your brand’s identity.
            </p>
          </Content>
        </div>
        <div className="pt-5 mh-auto ta-center mw-900">
          <div className="x xd-column xd-row-m">
            <img alt="Lead with discovery" src={formulaDiscoveryUrl} />
            <img alt="+" className="ph-3 pv-3" src={formulaPlusUrl} />
            <img alt="Strategic collaboration" src={formulaCollaborationUrl} />
            <img alt="=" className="ph-3 pv-3" src={formulaEqualsUrl} />
            <img alt="Results you can be proud of" src={formulaResultsUrl} />
          </div>
        </div>
        <div className="mv-6 ta-center c-geraldine pe-none us-none">
          <img alt="" style={{ maxWidth: 300 }} src={squiggleAUrl} />
        </div>
        <section>
          <div className="mw-700 ph-3 mh-auto ta-center">
            <h3 className="fs-24 fw-bold mw-400">
              Hear from who we&rsquo;ve helped
            </h3>
          </div>
          <div className="TestimonialGrid mw-1200 ph-3 mt-5 mh-auto ta-left">
            {testimonials.map(t => (
              <div className="TestimonialGrid-testimonial mt-4 mt-0-m">
                <div className="x xa-center ph-3 mb-2">
                  <div
                    className="br-round bgc-brown mr-2 bgs-cover bgr-noRepeat"
                    style={{
                      backgroundImage: `url(${t.portraitUrl})`,
                      flexBasis: '3rem',
                      flexShrink: '0',
                      width: '3rem',
                      height: '3rem',
                    }}
                  />
                  <div className="fs-16 lh-1d25">
                    <h5 className="fw-semibold">{t.name}</h5>
                    <h6 className="c-gray3">{t.position}</h6>
                  </div>
                </div>
                <div className="pv-2 ph-3 bgc-brown br-12 mb-1">
                  {t.content}
                </div>
                <div className="ph-3">
                  {t.to && (
                    <Link
                      to={t.to}
                      className="c-darkGeraldine tt-uppercase fs-14 ls-loose h-fade fw-bold">
                      {t.toLabel || <>Read the case study &rarr;</>}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="mw-700 ph-3 mt-5 mt-6-m mb-4 mb-5-m mh-auto ta-center">
          <div className="mb-3 pe-none us-none">
            <img alt="" src={illustrationWavingUrl} />
          </div>
          <Content className="mb-3">
            <p>
              We know every business has its <span className="ws-noWrap">own unique problems.</span> <br className="d-none d-inline-s" />Let's get to work with solving yours today.
            </p>
          </Content>
          <div class="x xj-center">
            <Link to="/contact">
              <Button small inline style={{ height: '100%' }}>
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
