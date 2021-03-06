import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Menu from '../components/menu';
import MetaTags from '../components/meta-tags';
import Footer from '../components/footer';

const Layout = ({ children, data }) => {
  const { siteMetadata: meta } = data.site;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Helmet>
      <MetaTags description={meta.description} />
      <main className="Container ph-2 ph-3-m x xd-column h-100p">
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
            description
          }
        }
      }
    `}
    render={data => <Layout {...props} data={data} />}
  />
);

export default WrappedLayout;
