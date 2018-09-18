import React from 'react';
import Layout from '../../components/layout';
import ServicesList from '../../components/services-list';
import ContactForm from '../../components/contact-form';
import { pageMetaInfo } from '../../../site-config';

import serviceImage2 from '../../static/images/services/single_service_img2.png';

const OutsorucedCTO = () => {
  const fields = {
    name: true,
    email: true,
    contactno: true,
    city: true,
    request: true,
  };
  return (
    <Layout seoDescription={pageMetaInfo.outsorucedCTO.description}>
      <div id="banner-area" className="banner-area bg-overlay case-bg-overlay">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-heading">
                <h1 className="banner-title">
                                      Outsourced CTO
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
                <h2>Which are the best software for my business?</h2>
                <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
              </div>
              <div className="tw-web-analytics-content">
                <p>
                  The primary role of software for any business is to automate the processes.
                  This reduces human efforts and increases efficiency. Moreover,
                  human errors are eliminated when the tasks are performed by software.
                  Typically, software requirements vary from business to business and
                  customised software can be developed specifically tailor-made to meet
                  your requirements. A lot of times, software readily available can also
                  be used to get rid of highly mechanical tasks especially like certain
                  aspects of Accounting, Inventory Management and PoS (Point of Sales).
                </p>
                <p>
                  For larger businesses, two key software required are: Enterprise Resource
                  Planning Software (ERP) and Customer Relationship Management Software (CRM).
                  ERP facilitates seamless communication across business verticals and CRM
                  ensures customer engagement and retention.
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
                  <h2>Which technology should I use to develop software for my business?</h2>
                  <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
                </div>
                <p>
                  Technology is constantly evolving and picking the right technology
                  to develop your software is quite a challenge. There are several
                  factors to be considered while selecting the right technology.
                  Some of these factors include security, costs, advantages,
                  disadvantages, licensing fees, downtime tolerance etc.
                  <br />
                  We at Nx Digital offer outsourced CTO services in which
                  we bring an expertise in various technologies to the table.
                  We offer consultation and understand your requirements thoroughly
                  which helps you not just chose the right technology,
                  but develop the software end-to-end and the provide training
                  and support in case of any issues
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

export default OutsorucedCTO;
