import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
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
        <script>{`
          (function(d) {var config = { kitId: '${
            meta.typekitId
          }', scriptTimeout: 3000, async: true }, h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s) })(document);
        `}</script>
      </Helmet>
      <main
        style={{
          margin: '0 auto',
          maxWidth: 660,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children()}
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        typekitId
      }
    }
  }
`;
