import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import cx from 'classnames';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import Content from '../components/content';
import Header from '../components/header';
import Callout from '../components/callout';
import CalloutLink from '../components/type-callout-link';
import ContactLink from '../components/contact-link';
import utils from '../utils';

const illustrations = {
  brandStrategy: {
    url: require('../assets/images/service-brand-strategy-large.svg'),
    alt:
      "Arrows and X's resembling a gameplan depict how Renga can help guide your brand to success.",
  },
  ecommerce: {
    url: require('../assets/images/service-ecommerce.svg'),
    alt:
      'A t-shirt shown in a web browser, with a coin beside it, depict how Renga can help your business set up an e-commerce site.',
  },
  identityDesign: {
    url: require('../assets/images/service-identity-design.svg'),
    alt:
      'Paper, business cards, stickers, and a pencil, all with a chevron mark, illustrating how Renga can help you build a visual identity that spans all forms of collateral.',
  },
  digitalMarketing: {
    url: require('../assets/images/service-digital-marketing.svg'),
    alt:
      'Search, chat, and improving metrics, visualizing the ways Renga can help you meet you digital marketing goals.',
  },
  websiteDevelopment: {
    url: require('../assets/images/service-web-development.svg'),
    alt:
      'A browser and a phone showing a website with a nice big squiggle. Renga can help you build beautiful, responsive sites.',
  },
};

const Service = ({ title, html, illustration, isLarge }) => {
  const illustrationName = utils.toCamelCase(illustration);
  const image = illustrations[illustrationName] || {};

  return (
    <div
      className={cx('ph-3-m mb-4', {
        'w-50p-m': !isLarge,
        'mw-700 mh-auto mb-6-m ta-center-m': isLarge,
      })}>
      <div className="ta-center">
        <img
          src={image.url}
          width={isLarge ? 700 : 500}
          height={250}
          alt={image.alt}
        />
      </div>
      <h3 className="fs-24 mt-2 mb-2">{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

const ServicesPage = props => {
  const { allContentfulService: services } = props.data;

  const featuredService = services.edges.slice(0, 1);
  const otherServices = services.edges.slice(1);

  return (
    <Layout>
      <MetaTags
        title="Services"
        description="Renga is a digital agency done differently. Our services range from web development, e-commerce, digital marketing/advertising and creative direction; however, our bread and butter is our branding strategy and development. We work with small to medium sized business to help them solve branding and marketing challenges."
      />
      <div className="mw-700 mh-auto">
        <Header
          title="Services"
          subtitle="Growing a business these days can be an elusive, multifaceted challenge. Why not let us help you with..."
        />
      </div>
      <div className="mw-1200 mh-auto mb-5">
        <Content>
          {featuredService.map(({ node: service }) => (
            <Service
              key={service.id}
              title={service.title}
              html={service.description.childMarkdownRemark.html}
              illustration={service.illustration}
              isLarge
            />
          ))}
        </Content>
        <Content className="x-m xw-wrap">
          {otherServices.map(({ node: service }) => (
            <Service
              key={service.id}
              title={service.title}
              html={service.description.childMarkdownRemark.html}
              illustration={service.illustration}
            />
          ))}
        </Content>
      </div>
      <Callout
        className="mt-4 mb-6 mw-450"
        title="Ready to start?"
        links={
          <Fragment>
            <CalloutLink className="fs-16">
              <ContactLink withArrowIcon>Get in touch</ContactLink>
            </CalloutLink>
            <p className="fs-14 mw-450 mt-2 c-gray4 lh-1d5">
              If there’s something you’re looking for that you don’t see,
              <br />
              reach out and maybe we can help!
            </p>
          </Fragment>
        }
      />
    </Layout>
  );
};

export default ServicesPage;

export const query = graphql`
  query ServicesQuery {
    allContentfulService(sort: { fields: [order, title], order: [ASC, DESC] }) {
      edges {
        node {
          id
          order
          title
          illustration
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
