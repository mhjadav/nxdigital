import React from 'react';
import Layout from '../../components/layout';
import ServicesList from '../../components/services-list';
import ContactForm from '../../components/contact-form';
import { pageMetaInfo } from '../../../site-config';

import serviceImage2 from '../../static/images/services/single_service_img2.png';

const OutsourcedCMO = () => {
  const fields = {
    name: true,
    email: true,
    contactno: true,
    city: true,
    request: true,
  };
  return (
    <Layout seoDescription={pageMetaInfo.outsourcedCMO.description}>
      <div id="banner-area" className="banner-area bg-overlay case-bg-overlay">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-heading">
                <h1 className="banner-title">
                                      Outsourced CMO
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
              <div className="section-heading text-center">
                <h2>How do I increase revenues, profitability and grow my business?</h2>
                <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
              </div>
              <div className="tw-web-analytics-content">
                <p>
                    Your answer to the question is our Outsourced CMO service.
                    Outsourced CMO is your Chief Marketing Officer with a team
                    of highly talented digital marketers, graphic designers and
                    tech guys required for execution of digital marketing strategies
                    customized as per your business requirements.
                </p>
                <p>
                    Brands are born out of trustworthy products backed by brilliant
                    communication with their audiences. Good products are obviously
                    at the base of all successful businesses. But, if you do not have
                    a great marketing strategy for taking those products to your audiences,
                    you will never realise the true potential of your business.
                </p>
                <p>
                    Digital Marketing is all about delivering the correct content
                    to the right kind of audiences at the right moments.
                    Through our Outsourced CMO service we strategize,
                    execute and optimize all your digital marketing efforts
                    so you can focus on your core business.

                </p>
              </div>
            </div>
            <div className="col-md-6" id="services-form-section">
              <div className="section-heading text-center">
                <h2>Let's Get Started</h2>
                <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
              </div>
              <div className="contact-us-form service-contact-form">
                <ContactForm subjectText="New Message On Services Page" fields={fields} labelClass="text-dark" submitButtonText="Submit" formName="services" />
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
            <div className="col-md-6 ml-auto align-self-md-center">
              <img src={serviceImage2} alt="website development" className="img-fluid analytics-img" />
            </div>
            {/* Col End */}
            <div className="col-md-6 align-self-center">
              <div className="tw-web-analytics-content">
                <div className="section-heading text-center" style={{ marginBottom: '0px' }}>
                  <h2>How do I make a Marketing Strategy for my business?</h2>
                  <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
                </div>
                <p>
                Digital Marketing strategies varies across categories and across businesses.
                Each business requires it's own Digital Marketing Strategy.
                Ideally, to start with, you need to have your objectives clearly defined.
                Once you have identified the value proposition for your prospects and the
                communication strategy defined, you can start with the execution part.
                In terms of execution, you need to create a Landing Page or a Web Page
                with appropriate lead capturing mechanism. Once done, the objective is
                then to get and consistently bring the relevant users to the page.
                The interested users can get in touch with you and you can now start
                engaging with the users.
                  <br />
                  Learn more on how Nx Digital provides Outsourced CMO services
                  so that businesses can engage with their users seamlessly:
                  <a href="#services-form-section" className="tw-readmore">
                    Book A Complimentary Consultation or Request a Call-back
                  </a>
                </p>
              </div>
              {/* Analytics Content End */}
            </div>
            {/* Col End */}
          </div>
          {/* 2nd Content Row End */}
          <div className="row d-none">
            {/* Col End */}
            <div className="col-md-6 ml-auto align-self-center">
              <div className="tw-web-analytics-content">
                <i className="icon icon-target" />
                <h3>Improve website’s performance</h3>
                <span className="bottom-border tw-mt-20 tw-mb-30" />
                <p>
                Digital Marketing is for everyone.
                You decide your budget upfront and then design campaigns accordingly.
                It let's you define your target audience very precisely.
                You can run your campaigns for a longer period of time at lesser costs.
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
                Digital Marketing is for everyone.
                You decide your budget upfront and then design campaigns accordingly.
                It let's you define your target audience very precisely.
                You can run your campaigns for a longer period of time at lesser costs.
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
  );
};

export default OutsourcedCMO;
