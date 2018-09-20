import React, { Fragment } from 'react';
import Layout from '../components/layout';
import Content from '../components/content';
import Header from '../components/header';
import Callout from '../components/callout';
import CalloutLink from '../components/type-callout-link';

const services = [
  {
    title: 'Brand Strategy',
    description: (
      <p>
        Your brand has many touchpoints today and it can sometime take on
        different forms depending on the medium, writer or designer. It’s
        important to have clear brand guidelines established that accurately
        represents your intention as a business. Your brand is what your
        customer perceives not what you perceive. We help you match those two
        and develop interesting ways to share what you care about the most.
      </p>
    ),
    imageUrl: require('../assets/images/service-brand-strategy.svg'),
  },
  {
    title: 'Ecommerce',
    description: (
      <p>
        As Shopify Partners and former ecommerce entrepreneurs we can help you
        navigate the best way to set up your ecommerce store. Whether you’re
        starting from scratch, looking for a refresh, or taking it to the next
        level we can help.
      </p>
    ),
    imageUrl: require('../assets/images/service-ecommerce.svg'),
  },
  {
    title: 'Digital Marketing & Advertising',
    description: (
      <p>
        You’ve got a marketing budget but you aren’t sure about the best way to
        spend it. Facebook, Instagram or Google ads seem like the right way to
        go but you’re intimidated and default into your traditional channels
        even though you know they are more expensive and not as effective.
      </p>
    ),
    imageUrl: require('../assets/images/service-digital-marketing.svg'),
  },
  {
    title: 'Website Design / Development',
    description: (
      <Fragment>
        <p>
          If you’re just looking for a fresh design or a website that doesn’t
          look like it was launched at the dawn of the internet, we can help
          with that too!
        </p>
        <p>
          We work with trusted and talented designers and developers so that you
          don’t have to go through the hassle of finding someone yourself. Let
          us take your ideas and help them make them come alive in an end result
          that we’ll all be proud of.
        </p>
      </Fragment>
    ),
    imageUrl: require('../assets/images/service-web-development.svg'),
  },
];

const Service = ({ title, description, imageUrl }) => (
  <div className="w-50p-m ph-3-m mb-4">
    <img src={imageUrl} width={500} height={250} alt={title} />
    <h2 className="fs-24 fw-semibold mt-2 mb-2">{title}</h2>
    <div>{description}</div>
  </div>
);

const ServicesPage = () => (
  <Layout>
    <div className="mw-700 mh-auto">
      <Header
        title="Services"
        subtitle="Another set of lines about the services we offer."
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
      className="mt-4 mb-6"
      title="Sound like a fit?"
      body="We'd love to spend some time hearing your story and working through your brand."
      links={
        <CalloutLink className="fs-16">
          <a href="mailto:hello@renga.co">Get in touch &rarr;</a>
        </CalloutLink>
      }
    />
  </Layout>
);

export default ServicesPage;
