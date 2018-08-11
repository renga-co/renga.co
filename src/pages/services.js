import React from 'react';

const Service = ({ title, description }) => (
  <div>
    <h3 className="fs-18 fw-semibold">{title}</h3>
    {description}
  </div>
);

const ServicesPage = () => (
  <div className="mw-700 mh-auto">
    <h1 className="fs-30">Services</h1>
    <div>
      <Service
        title="Brand Strategy"
        description={
          <p>
            Your brand has many touchpoints today and it can sometime take on
            different forms depending on the medium, writer or designer. It’s
            important to have clear brand guidelines established that accurately
            represents your intention as a business. Your brand is what your
            customer perceives not what you perceive. We help you match those
            two and develop interesting ways to share what you care about the
            most.
          </p>
        }
      />
      <Service
        title="Ecommerce"
        description={
          <p>
            As Shopify Partners and former ecommerce entrepreneurs we can help
            you navigate the best way to set up your ecommerce store. Whether
            you’re starting from scratch, looking for a refresh, or taking it to
            the next level we can help.
          </p>
        }
      />
      <Service
        title="Digital Marketing & Advertising"
        description={
          <p>
            You’ve got a marketing budget but you aren’t sure about the best way
            to spend it. Facebook, Instagram or Google ads seem like the right
            way to go but you’re intimidated and default into your traditional
            channels even though you know they are more expensive and not as
            effective.
          </p>
        }
      />
    </div>
    <p>
      <a href="/">Back home</a>
    </p>
  </div>
);

export default ServicesPage;
