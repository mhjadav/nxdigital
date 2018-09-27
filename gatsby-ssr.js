/* globals exports process */
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { oneLine } from 'common-tags';
// Google GST (gtag.js):
// https://github.com/gatsbyjs/gatsby/issues/8341
const onRenderBody = ({ setHeadComponents }) => {
  const GTM_ID = 'AW-817882221';
  if (process.env.NODE_ENV === 'production') {
    setHeadComponents([
      <script
        key="google-gtm-js"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
      />,
      <script
        key="google-gst-init"
        dangerouslySetInnerHTML={{
          __html: oneLine`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM_ID}');`,
        }}
      />,
    ]);
  }
};

export default onRenderBody;
