import React, { Fragment } from 'react';

import Content from '../components/content';
import Title from '../components/type-title';
import Subtitle from '../components/type-subtitle';

const Service = ({ title, description }) => (
  <div className="ph-2 mb-4">
    <img src="http://via.placeholder.com/500x250/777/777" alt={title} />
    <Subtitle className="mt-2 mb-2">{title}</Subtitle>
    {description}
  </div>
);

const ServicesPage = () => (
  <Fragment>
    <div className="mw-700 mh-auto">
      <header className="ta-center mt-4 mb-4">
        <Title>Services</Title>
      </header>
    </div>
    <div className="mw-700 mh-auto">
      <Content className="x-m xw-wrap">
        <Service
          title="Brand Strategy"
          description={
            <p>
              Your brand has many touchpoints today and it can sometime take on
              different forms depending on the medium, writer or designer. It’s
              important to have clear brand guidelines established that
              accurately represents your intention as a business. Your brand is
              what your customer perceives not what you perceive. We help you
              match those two and develop interesting ways to share what you
              care about the most.
            </p>
          }
        />
        <Service
          title="Ecommerce"
          description={
            <p>
              As Shopify Partners and former ecommerce entrepreneurs we can help
              you navigate the best way to set up your ecommerce store. Whether
              you’re starting from scratch, looking for a refresh, or taking it
              to the next level we can help.
            </p>
          }
        />
        <Service
          title="Digital Marketing & Advertising"
          description={
            <p>
              You’ve got a marketing budget but you aren’t sure about the best
              way to spend it. Facebook, Instagram or Google ads seem like the
              right way to go but you’re intimidated and default into your
              traditional channels even though you know they are more expensive
              and not as effective.
            </p>
          }
        />
      </Content>
    </div>
  </Fragment>
);

export default ServicesPage;
