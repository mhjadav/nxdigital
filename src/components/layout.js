import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Footer from './footer';
import ImportScripts from './importScripts';
import Header from './header';
import {
  siteTitle,
  siteDescription,
  siteUrl,
  siteType,
  siteKeyword,
} from '../../site-config';

import favicon32 from '../static/images/favicon/favicon32.png';
import favicon16 from '../static/images/favicon/favicon16.png';
import ogImage from '../static/images/favicon/favicon310.png';

const Layout = (props) => {
  const {
    seoTitle,
    seoDescription,
    seoUrl,
    children,
  } = props;
  return (
    <React.Fragment>
      <Helmet
        title={seoTitle || siteTitle}
        meta={[
          { name: 'google-site-verification', content: '53nJ_FsnXEFbKwP_vR78lkTyAkVN-3i7546mBTJ57u4' },
          { name: 'description', content: seoDescription || siteDescription },
          { name: 'keyword', content: siteKeyword },
          { property: 'og:url', content: seoUrl || siteUrl },
          { property: 'og:image', content: siteUrl + ogImage },
          { property: 'og:title', content: seoTitle || siteTitle },
          { property: 'og:type', content: siteType },
          { property: 'og:description', content: seoDescription || siteDescription },
        ]}
        link={[
          {
            rel: 'icon', type: 'image/png', sizes: '16x16', href: favicon16,
          },
          {
            rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon32,
          },
          { rel: 'canonical', href: siteUrl },
        ]}
      />
      <Header />
      {children}
      <section id="tw-call-to-action" className="tw-call-to-action">
        <div className="container">
          <div className="call-action-bg-pattern" />
          {/* Bg Pattern End */}
          <div className="row">
            <div className="col text-center">
              <h2 className="column-title">
                <small>Your Growth Is Our Growth</small>
                            Strategize . Develop . Optimize
              </h2>
              <Link to="/book-appointment/" className="btn btn-primary tw-mt-20 btn-lg">Let's Connect</Link>
            </div>
            {/* Col End */}
          </div>
          {/* Row End */}
        </div>
        {/* Container End */}
      </section>

      <Footer />
      <ImportScripts />
    </React.Fragment>
  );
};

export default Layout;
