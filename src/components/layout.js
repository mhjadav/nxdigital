import React, { Component } from "react";
import Helmet from 'react-helmet';
import Footer from '../components/footer';
import ImportScripts from '../components/importScripts';
import Header from "../components/header";
import { Link } from 'gatsby';
import {
    siteTitle,
    siteDescription,
    siteUrl,
    siteType,
} from "../../site-config";

import favicon32 from "../static/images/favicon/favicon32.png";
import favicon16 from "../static/images/favicon/favicon16.png";
import ogImage from "../static/images/favicon/favicon250.png";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Helmet
                title={props.siteTitle || siteTitle}
                meta={[
                    { name: "description", content: props.siteDescription || siteDescription },
                    { property: "og:url", content: props.siteUrl || siteUrl },
                    { property: "og:image", content: siteUrl + ogImage },
                    { property: "og:title", content: props.siteTitle || siteTitle },
                    { property: "og:type", content: siteType },
                    { property: "og:description", content: props.siteDescription || siteDescription }
                ]}
                link={[
                    { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16 },
                    { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32 },
                    { rel: "canonical", href: siteUrl }
                ]}
            />
            <Header />
            {props.children}
            <section id="tw-call-to-action" className="tw-call-to-action">
                <div className="container">
                    <div className="call-action-bg-pattern">
                    </div>
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
}

export default Layout;
