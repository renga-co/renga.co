import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Menu from '../components/menu';
import Footer from '../components/footer';
import favicon from '../assets/favicon.png';

const Layout = ({ children, data }) => {
  const { siteMetadata: meta } = data.site;

  return (
    <div>
      <Helmet defaultTitle={meta.title} titleTemplate={meta.titleTemplate}>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href={favicon} />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Helmet>
      <main className="ph-3 x xd-column h-100p">
        <Menu />
        {children}
        <Footer />
      </main>
    </div>
  );
};

const WrappedLayout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            titleTemplate
            description
          }
        }
      }
    `}
    render={data => <Layout {...props} data={data} />}
  />
);

export default WrappedLayout;
