import React, { Component } from "react";
import Footer from '../components/footer';
import ImportScripts from '../components/importScripts';
import Header from "../components/header";
import { Link } from 'gatsby';

const Layout = (props) => {
    return (
        <React.Fragment>
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
                        <small>Promise to take you on top</small>
                        Take your website to TOP of <span>Search Engines</span>
                        </h2>
                        <Link to="/book-appointment/" className="btn btn-primary tw-mt-20 btn-lg">Let's Grab A Coffee</Link>
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
