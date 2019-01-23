import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import MetaTags from '../components/meta-tags';
import ContactForm from '../components/contact-form';

const ContactPage = () => {
  return (
    <Layout>
      <MetaTags
        title="Contact"
        description="We’d love if you wrote us an email and let us know what you’re up to."
      />
      <div className="mw-700 w-100p mh-auto mb-4">
        <Header
          title="Contact Us"
          subtitle="We’d love if you wrote us an email and let us know what you’re up to."
        />
        <ContactForm name="Contact Form" withMessage />
      </div>
    </Layout>
  );
};

export default ContactPage;
