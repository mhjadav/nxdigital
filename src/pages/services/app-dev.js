import React, { Component  } from "react";
import Layout from '../../components/layout';
import ServicesList from '../../components/services-list';
import ContactForm from '../../components/contact-form';


import serviceImage1 from "../../static/images/services/single_service_img1.png";
import serviceImage2 from "../../static/images/services/single_service_img2.png";
import serviceImage3 from "../../static/images/services/single_service_img3.png";

const WebsiteDevelopment = () => {
    const fields = {
        name: true,
        email: true,
        contactno: true,
        city: true,
        request: true
    };
    return(
      <Layout>
        <div id="banner-area" className="banner-area bg-overlay case-bg-overlay">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-12">
                              <div className="banner-heading">
                                  <h1 className="banner-title">
                                      App Dev
                                  </h1>
                              </div>
                          </div>
                          {/* Col end */}
                      </div>
                      {/* Row end */}
                  </div>
                  {/* Container end */}
              </div>
        {/* Banner area end */}
        <section id="tw-features-contact" className="tw-features-contact">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <div className="section-heading">
                    <h2>Why should you be Interested?</h2>
                    <span className="animate-border tw-mt-30 tw-mb-40" />
                    </div>
                    <div className="tw-features-contact-info">
                    <p>Start working with an company that can provide every thing you need to generate awareness, drive traffic
                        connect with customers, and increase sales nascetur</p>
                    <p>Start working with an company that can provide every thing you need to generate awareness, drive traffic
                        connect with customers, and increase sales nascetur</p>
                    <p>Start working with an company that can provide every thing you need to generate awareness, drive traffic
                        connect with customers, and increase sales nascetur</p>
                </div>
                </div>
                <div className="col-md-6">
                    <div className="contact-us-form service-contact-form">
                        <ContactForm subjectText="New Message On Services Page" fields={fields} labelClass="text-dark" submitButtonText="Let's Build Something Unique" formName="services" />
                    {/* Form end */}
                    </div>
                    {/* Contact us form end */}
                </div>
                {/* Col End */}
                </div>
                {/* Row End */}
            </div>
            {/* Container End */}
            </section>
            {/* Feature Contact Us end */}

        <section id="main-container" className="main-container">
                <div className="container">
                    {/* 1st Content Row End */}
                    <div className="row">
                        <div className="col-md-5 align-self-center">
                        <div className="tw-web-analytics-content">
                            <i className="icon icon-coins-1" />
                            <h3>Improve website’s performance</h3>
                            <span className="bottom-border tw-mt-20 tw-mb-30" />
                            <p>
                                Digital Marketing is for everyone. You decide your budget upfront and then design campaigns accordingly. 
                                It let's you define your target audience very precisely. You can run your campaigns for a longer period of time at lesser costs.
                            </p>
                        </div>
                        {/* Analytics Content End */}
                        </div>
                        {/* Col End */}
                        <div className="col-md-6 ml-auto align-self-md-center">
                        <img src={serviceImage2} alt="website development" className="img-fluid analytics-img" />
                        </div>
                        {/* Col End */}
                    </div>
                    {/* 2nd Content Row End */}
                    <div className="row">
                        {/* Col End */}
                        <div className="col-md-6 ml-auto align-self-center">
                        <div className="tw-web-analytics-content">
                            <i className="icon icon-target" />
                            <h3>Improve website’s performance</h3>
                            <span className="bottom-border tw-mt-20 tw-mb-30" />
                            <p>
                                Digital Marketing is for everyone. You decide your budget upfront and then design campaigns accordingly. 
                                It let's you define your target audience very precisely. You can run your campaigns for a longer period of time at lesser costs.
                            </p>
                        </div>
                        {/* Analytics Content End */}
                        </div>
                    
                        <div className="col-md-6 ml-auto align-self-center">
                        <div className="tw-web-analytics-content">
                            <i className="icon icon-target" />
                            <h3>Improve website’s performance</h3>
                            <span className="bottom-border tw-mt-20 tw-mb-30" />
                            <p>
                                Digital Marketing is for everyone. You decide your budget upfront and then design campaigns accordingly. 
                                It let's you define your target audience very precisely. You can run your campaigns for a longer period of time at lesser costs.
                            </p>
                        </div>
                        {/* Analytics Content End */}
                        </div>
                    </div>
                    {/* 3rd Content Row End */}
                </div>
                {/* Container End */}
            </section>
        <ServicesList />
      </Layout>
    )
}

export default WebsiteDevelopment;
