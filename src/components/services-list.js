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
            <section id="main-container" className="main-container" style={{paddingTop: "0", marginTop: "-100px"}}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-3 col-md-12">
                        <div className="section-heading">
                        <h2>
                            Other <span>Services</span>
                        </h2>
                        <span className="animate-border tw-mt-30 tw-mb-40" />
                        <p> Digital Marketing is for everyone. You decide your budget upfront and then design campaigns.</p>
                        </div>
                    </div>
                    {/* Heading Col End */}
                    <div className="col-lg-9 col-md-12">
                        <div className="service-list-carousel owl-carousel">
                            <div className="tw-service-box-list text-center">
                                <div className="service-list-bg service-list-bg-1 d-table">
                                <div className="service-list-icon d-table-cell">
                                    <img src={service1Image} alt="" className="img-fluid" />
                                </div>
                                </div>
                                {/* List Bg End */}
                                <h3>Digital Marketing</h3>
                                <p>Digital Marketing is for everyone. You decide your budget upfront and then design campaigns.</p>
                                <Link to="/services/digital-marketing/" className="tw-readmore">Read More
                                    <i className="fa fa-angle-right" />
                                </Link>
                            </div>
                            {/* List Box End */}
                            <div className="tw-service-box-list text-center">
                                <div className="service-list-bg service-list-bg-1 d-table">
                                <div className="service-list-icon d-table-cell">
                                    <img src={service2Image} alt="" className="img-fluid" />
                                </div>
                                </div>
                                {/* List Bg End */}
                                <h3>App Dev</h3>
                                <p>Digital Marketing is for everyone. You decide your budget upfront and then design campaigns.</p>
                                <Link to="/services/app-dev/" className="tw-readmore">Read More
                                    <i className="fa fa-angle-right" />
                                </Link>
                            </div>
                            {/* List Box End */}
                            <div className="tw-service-box-list text-center">
                                <div className="service-list-bg service-list-bg-1 d-table">
                                <div className="service-list-icon d-table-cell">
                                    <img src={service3Image} alt="" className="img-fluid" />
                                </div>
                                </div>
                                {/* List Bg End */}
                                <h3>Outsourced CMO</h3>
                                <p>Digital Marketing is for everyone. You decide your budget upfront and then design campaigns.</p>
                                <Link to="/services/outsourced-cmo/" className="tw-readmore">Read More
                                    <i className="fa fa-angle-right" />
                                </Link>
                            </div>
                            {/* List Box End */}
                            <div className="tw-service-box-list text-center">
                                <div className="service-list-bg service-list-bg-1 d-table">
                                <div className="service-list-icon d-table-cell">
                                    <img src={service2Image} alt="" className="img-fluid" />
                                </div>
                                </div>
                                {/* List Bg End */}
                                <h3>Outsourced CTO</h3>
                                <p>Digital Marketing is for everyone. You decide your budget upfront and then design campaigns.</p>
                                <Link to="/services/outsourced-cto/" className="tw-readmore">Read More
                                    <i className="fa fa-angle-right" />
                                </Link>
                            </div>
                            {/* List Box End */}
                            <div className="tw-service-box-list text-center">
                                <div className="service-list-bg service-list-bg-1 d-table">
                                <div className="service-list-icon d-table-cell">
                                    <img src={service3Image} alt="" className="img-fluid" />
                                </div>
                                </div>
                                {/* List Bg End */}
                                <h3>Website Development</h3>
                                <p>Digital Marketing is for everyone. You decide your budget upfront and then design campaigns.</p>
                                <Link to="/services/website-development/" className="tw-readmore">Read More
                                    <i className="fa fa-angle-right" />
                                </Link>
                            </div>
                            {/* List Box End */}
                            
                        </div>
                        {/* Carousel End */}
                    </div>
                    {/* Content Col end */}
                    </div>
                    {/* Row End */}
                </div>
                {/* Container End */}
            </section>
            {/* Service List End */}
            <section id="tw-contact-us" className="tw-contact-us bg-offwhite">
                <div className="container">
                    <div className="row">
                      <div className="col">
                          <div className="section-heading text-center">
                          <h2>
                              <small>leave a message</small>
                              Give a <span>Message</span>
                          </h2>
                          <span className="animate-border border-ash ml-auto mr-auto tw-mt-20 tw-mb-40" />
                          </div>
                      </div>
                      {/* Col End */}
                    </div>
                    {/* Row End */}
                    <div className="row justify-content-center">
                        <div className="contact-us-form col-lg-6">
                            <ContactForm subjectText="New Message On Services Page" fields={fields} labelClass="text-dark" submitButtonText="Let's Build Something Unique" formName="services" />
                        </div>
                    </div>
                    {/* Contact us form end */}
                </div>
                  {/* Container End */}
            </section>
        </React.Fragment>
    )
}

export default ServicesList;
