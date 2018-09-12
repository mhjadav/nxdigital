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
                        Other
                        <span>Services</span>
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
                                <h3>Digital Marketing</h3>
                                <p>Scaling your business and taking it to new heights is your priority. We will take care of your technology requirements and help you increase productivity. </p>
                                <Link to="/digital-marketing/" className="tw-readmore">Read More
                                    <i className="fa fa-angle-right" />
                                </Link>
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
                                <p>Scaling your business and taking it to new heights is your priority. We will take care of your technology requirements and help you increase productivity. </p>
                                <Link to="/digital-marketing/" className="tw-readmore">Read More
                                    <i className="fa fa-angle-right" />
                                </Link>
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
                                <p>Scaling your business and taking it to new heights is your priority. We will take care of your technology requirements and help you increase productivity. </p>
                                <Link to="/digital-marketing/" className="tw-readmore">Read More
                                    <i className="fa fa-angle-right" />
                                </Link>
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
                                <p>Scaling your business and taking it to new heights is your priority. We will take care of your technology requirements and help you increase productivity. </p>
                                <Link to="/digital-marketing/" className="tw-readmore">Read More
                                    <i className="fa fa-angle-right" />
                                </Link>
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
                                <p>Scaling your business and taking it to new heights is your priority. We will take care of your technology requirements and help you increase productivity. </p>
                                <Link to="/digital-marketing/" className="tw-readmore">Read More
                                    <i className="fa fa-angle-right" />
                                </Link>
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
