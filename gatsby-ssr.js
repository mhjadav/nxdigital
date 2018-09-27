/* globals exports process */
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');
const { oneLine } = require('common-tags');
// Google GST (gtag.js):
// https://github.com/gatsbyjs/gatsby/issues/8341
exports.onRenderBody = ({ setHeadComponents }) => {
  const GTM_ID = 'AW-817882221';
  setHeadComponents([
    <script
      key="google-gtm-js"
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
    />,
    <script
      key="google-gtm-init"
      dangerouslySetInnerHTML={{
        __html: oneLine`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM_ID}');`,
      }}
    />,
  ]);
};
