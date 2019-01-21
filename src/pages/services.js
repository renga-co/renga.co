import React, { Fragment } from 'react';
import Layout from '../components/layout';
import MetaTags from '../components/meta-tags';
import Content from '../components/content';
import Header from '../components/header';
import Callout from '../components/callout';
import CalloutLink from '../components/type-callout-link';
import ContactLink from '../components/contact-link';

const services = [
  {
    title: 'Brand Strategy',
    description: (
      <p>
        We realize that your brand has multiple touchpoints across a variety of
        mediums and channels; and that each of those touchpoints represents a
        potential onramp for a new customer. This is why having clear,
        consistent, and fully developed brand guidelines is an integral part to
        growing as a business in the digital era. Let’s make sure you’re
        reaching the right people with the right message.
      </p>
    ),
    imageUrl: require('../assets/images/service-brand-strategy.svg'),
  },
  {
    title: 'Ecommerce',
    description: (
      <Fragment>
        <p>
          Setting up an online store can be intimidating; we totally get it. So
          let us do the heavy lifting for you. Our team can handle everything
          from setting up the backend to getting high quality photos of your
          product.
        </p>
        <p>
          As a Shopify Partner and former ecommerce entrepreneurs we can help
          you navigate the best way to set up your online store. Whether you’re
          starting from scratch, looking for a refresh, or taking it to the next
          level, we can help.
        </p>
      </Fragment>
    ),
    imageUrl: require('../assets/images/service-ecommerce.svg'),
  },
  {
    title: 'Digital Marketing & Advertising',
    description: (
      <Fragment>
        <p>
          Facebook, Instagram, or Google ads seem like the right way to go with
          your new marketing budget, but you’re not sure where to start?
        </p>
        <p>
          Why not let us launch your digital ad campaign for you? We’ll work
          closely with you to ensure brand consistency, getting the results you
          want. We can take care of everything from strategy, implementation,
          creative, and reporting.
        </p>
      </Fragment>
    ),
    imageUrl: require('../assets/images/service-digital-marketing.svg'),
  },
  {
    title: 'Website Design / Development',
    description: (
      <p>
        If you’re just looking for a fresh design or a website that doesn’t look
        like it was launched at the dawn of the internet; or if you're trying to
        create a website that looks and works great on any device &mdash; we can
        help with that too!
      </p>
    ),
    imageUrl: require('../assets/images/service-web-development.svg'),
  },
];

const Service = ({ title, description, imageUrl }) => (
  <div className="w-50p-m ph-3-m mb-4">
    <div className="ta-center">
      <img src={imageUrl} width={500} height={250} alt={title} />
    </div>
    <h3 className="fs-24 fw-semibold mt-2 mb-2">{title}</h3>
    <div>{description}</div>
  </div>
);

const ServicesPage = () => (
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
      <Content className="x-m xw-wrap">
        {services.map(service => (
          <Service
            key={service.title}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
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
            <ContactLink withArrowIcon>Let's chat</ContactLink>
          </CalloutLink>
          <p className="fs-14 mw-450 mt-2 c-gray4 lh-1d5">
            If there’s something you’re looking for that you don’t see, reach
            out and maybe we can help!
          </p>
        </Fragment>
      }
    />
  </Layout>
);

export default ServicesPage;
