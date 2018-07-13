import React from 'react';
import favicon from './assets/favicon.png';

const TYPEKIT_ID = 'acj0jhy';

const MAILCHIMP_SCRIPT = `<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/116eb673d498b75ebfe2310ab/a66dcc20d09ef70fd87c48ed8.js");</script>`;
const DRIFT_SCRIPT = ``;

export default function Html(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href={favicon} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(d) {var config = { kitId: '${TYPEKIT_ID}', scriptTimeout: 3000, async: true }, h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s) })(document);
        `,
          }}
        />
        {props.headComponents}
      </head>
      <body>
        {props.preBodyComponents}
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
        <script dangerouslySetInnerHTML={{ __html: DRIFT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: MAILCHIMP_SCRIPT }} />
      </body>
    </html>
  );
}
