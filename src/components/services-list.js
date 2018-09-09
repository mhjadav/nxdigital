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
            <section id="tw-features" className="tw-features-area">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4">
                        <h2 className="column-title text-md-right text-sm-center">Nx Digital<br /> Other Services!</h2>
                    </div>
                    {/* Col End */}
                    <div className="col-md-7 ml-md-auto">
                        <p className="features-text">Digital Marketing is for everyone. You decide your budget upfront and then design campaigns accordingly. 
                            It let's you define your target audience very precisely. You can run your campaigns for a longer period of time at lesser costs.</p>
                    </div>
                    {/* Col End */}
                    </div>
                    {/* End Row 1 */}
                    <div className="tw-mt-60" />
                    <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="features-box">
                        <div className="features-icon d-table">
                            <div className="features-icon-inner d-table-cell">
                            <img src={ service1Image } alt="" />
                            </div>
                            {/* End Features icon inner */}
                        </div>
                        {/* End Features Icon */}
                        <h3>Digital Marketing</h3>
                        <p>Digital Marketing is for everyone. You decide your budget upfront and then design campaigns accordingly. 
                        It let's you define your target audience very precisely.
                        </p>
                        <Link to="/services/digital-marketing/" className="tw-readmore">Read More
                            <i className="fa fa-angle-right" />
                        </Link>
                        </div>
                        {/* End Single Features */}
                    </div>
                    {/* Col End */}
                    <div className="col-lg-4 col-md-12">
                        <div className="features-box">
                        <div className="features-icon d-table">
                            <div className="features-icon-inner d-table-cell">
                            <img src={ service2Image } alt="" />
                            </div>
                            {/* End Features icon inner */}
                        </div>
                        {/* End Features Icon */}
                        <h3>App Dev</h3>
                        <p>Digital Marketing is for everyone. You decide your budget upfront and then design campaigns accordingly. 
                        It let's you define your target audience very precisely.
                        </p>
                        <Link to="/services/app-dev/" className="tw-readmore">Read More
                            <i className="fa fa-angle-right" />
                        </Link>
                        </div>
                        {/* End Single Features */}
                    </div>
                    {/* end col */}
                    <div className="col-lg-4 col-md-12">
                        <div className="features-box">
                        <div className="features-icon d-table">
                            <div className="features-icon-inner d-table-cell">
                            <img src={ service3Image } alt="" />
                            </div>
                            {/* End Features icon inner */}
                        </div>
                        {/* End Features Icon */}
                        <h3>Outsourced CMO</h3>
                        <p>Digital Marketing is for everyone. You decide your budget upfront and then design campaigns accordingly. 
                        It let's you define your target audience very precisely.
                        </p>
                        <Link to="/services/outsourced-cmo/" className="tw-readmore">Read More
                            <i className="fa fa-angle-right" />
                        </Link>
                        </div>
                        {/* End Single Features */}
                    </div>
                    {/* End col */}
                    </div>
                    {/* End Row 2 */}
                </div>
                {/* End Container */}
            </section>
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
                            <ContactForm fields={fields} labelClass="text-dark" submitButtonText="Let's Build Something Unique" formName="services" />
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
