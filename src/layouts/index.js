import React from 'react';
import Helmet from 'react-helmet';

import Navigation from '../components/navigation';
import Footer from '../components/footer';
import '@rosszurowski/vanilla/lib/vanilla.css';
import './utilities.css';
import './index.css';

const Layout = ({ children, data }) => {
  const { siteMetadata: meta } = data.site;

  return (
    <div>
      <Helmet defaultTitle={meta.title} titleTemplate={meta.titleTemplate}>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Helmet>
      <main className="ph-3 pb-4">
        <Navigation siteTitle={meta.title} />
        {children()}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        titleTemplate
        description
      }
    }
  }
`;
