import React from "react";
import { Link } from "gatsby"
import ContactForm from './contact-form';

import service1Image from "../static/images/icon/feature1.png";
import service2Image from "../static/images/icon/feature2.png";
import service3Image from '../static/images/icon/feature3.png';

const ServicesList = (props) => {
    const fields = {
        name: true,
        email: true,
        contactno: true,
        city: true,
        request: true
    };
    return (
        <React.Fragment>
            <section id="tw-service" className="tw-service" style={{ "background": "rgb(247, 249, 248)"}}>
                <div className="container">
                    <div className="row text-center">
                    <div className="col section-heading wow fadeInDown">
                        <h2>
                            Other <span>Services</span>
                        </h2>
                        <span className="animate-border ml-auto mr-auto tw-mt-20" />
                    </div>
                    {/* Title Col End */}
                    </div>
                    {/* Title Row End */}
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="service-icon service-icon-bg-2 d-table">
                                <div className="service-icon-inner d-table-cell">
                                <img src={service2Image} alt="search engine" className="img-fluid" />
                                </div>
                            </div>
                            {/* Service icon end */}
                            <div className="service-content">
                                <h3>App Dev</h3>
                                <p>
                                    Our App Development services give you:
                                    <br/>    
                                    App Architecture
                                    <br/>
                                    App Designing
                                    <br/>
                                    UI / UX Designing
                                    <br/>
                                    User journey on the App
                                    <br/>
                                    iOS and Android Development
                                    <br/>
                                    Hybrid App Development
                                    <br/>
                                    Deployment on App Store and PlayStore
                                    <Link to="/services/app-dev/" className="tw-readmore">
                                        <i className="fa fa-angle-right" />
                                    </Link>
                                </p>
                            </div>
                            {/* Service content end */}
                            </div>
                            {/* Service box End */}
                        </div>
                        {/* Col End */}
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="service-icon service-icon-bg-2 d-table">
                                <div className="service-icon-inner d-table-cell">
                                <img src={service2Image} alt="search engine" className="img-fluid" />
                                </div>
                            </div>
                            {/* Service icon end */}
                            <div className="service-content">
                                <h3>Digital Marketing</h3>
                                <p>
                                    Our Digital Marketing services that include:  
                                    <br />
                                    SEO (Search Engine Optimisation) Services
                                    <br />
                                    SEM (Search Engines Marketing) Services
                                    <br />
                                    SMM (Social Media Marketing) Services 
                                    <br />
                                    LinkedIN Marketing
                                    <br />
                                    Blogging and Content Writing
                                    <br />
                                    Graphic Designing
                                    <Link to="/services/digital-marketing/" className="tw-readmore">
                                        <i className="fa fa-angle-right" />
                                    </Link>
                                </p>
                            </div>
                            {/* Service content end */}
                            </div>
                            {/* Service box End */}
                        </div>
                        {/* Col End */}
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="service-icon service-icon-bg-2 d-table">
                                <div className="service-icon-inner d-table-cell">
                                <img src={service2Image} alt="search engine" className="img-fluid" />
                                </div>
                            </div>
                            {/* Service icon end */}
                            <div className="service-content">
                                <h3>Website Development</h3>
                                <p>
                                    We design and deliver websites which are:
                                    <br />
                                    SEO Friendly 
                                    <br />
                                    Fast
                                    <br />
                                    Secure
                                    <br />
                                    Mobile Responsive
                                    <br />
                                    Rich in terms of UI / UX
                                    <br />
                                    Resonant with your brand elements 
                                    <Link to="/services/website-development/" className="tw-readmore">
                                        <i className="fa fa-angle-right" />
                                    </Link>
                                </p>
                            </div>
                            {/* Service content end */}
                            </div>
                            {/* Service box End */}
                        </div>
                        {/* Col End */}
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="service-icon service-icon-bg-2 d-table">
                                <div className="service-icon-inner d-table-cell">
                                <img src={service2Image} alt="search engine" className="img-fluid" />
                                </div>
                            </div>
                            {/* Service icon end */}
                            <div className="service-content">
                                <h3>Outsourced CMO</h3>
                                <p>
                                    Our Outsourced CMO services comprise:
                                    <br />

                                    Digital Marketing Strategy
                                    <br />
                                    Brand Building
                                    <br />
                                    Customized Campaign Creation
                                    <br />
                                    End-to-End Online Marketing
                                    <br />
                                    Developing Landing Pages
                                    <br />
                                    Website Redesigning
                                    <br />
                                    Delivering on your Marketing goals 
                                    <Link to="/services/outsourced-cmo/" className="tw-readmore">
                                    <i className="fa fa-angle-right" />
                                </Link>
                                </p>
                            </div>
                            {/* Service content end */}
                            </div>
                            {/* Service box End */}
                        </div>
                        {/* Col End */}
                        <div className="col-md-4 text-center">
                            <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                            <div className="service-icon service-icon-bg-2 d-table">
                                <div className="service-icon-inner d-table-cell">
                                <img src={service2Image} alt="search engine" className="img-fluid" />
                                </div>
                            </div>
                            {/* Service icon end */}
                            <div className="service-content">
                                <h3>Outsourced CTO</h3>
                                <p>
                                    Our Outsourced CTO Services offer you:
                                    <br />
                                    Customized Software Development
                                    <br />
                                    Business Analysis
                                    <br />
                                    Technology Consultancy
                                    <br />
                                    Buy versus Build Analysis
                                    <br />
                                    Process Automation through Technology
                                    <br />
                                    Developing your own Tech Products
                                    <br />
                                    Support and Upgrades on existing Software 
                                    <Link to="/services/outsourced-cto/" className="tw-readmore">
                                        <i className="fa fa-angle-right" />
                                    </Link>
                                </p>
                            </div>
                            {/* Service content end */}
                            </div>
                            {/* Service box End */}
                        </div>
                        {/* Col End */}
                        
                    </div>
                    {/* Row end */}
                    <div className="tw-mb-60" />
                </div>
                {/* container */}
            </section>
            {/* Tw Service End */}
        </React.Fragment>
    )
}

export default ServicesList;
