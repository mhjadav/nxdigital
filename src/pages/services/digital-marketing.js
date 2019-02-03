import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../../components/layout';
import ServicesList from '../../components/services-list';
import ContactForm from '../../components/contact-form';
import { pageMetaInfo } from '../../../site-config';

const DigitalMarketing = ({data}) => {
  const fields = {
    name: true,
    email: true,
    contactno: true,
    city: true,
    request: true,
  };
  return (
    <Layout seoDescription={pageMetaInfo.digitalMarketing.description}>
      <div id="banner-area" className="banner-area bg-overlay case-bg-overlay">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-heading">
                <h1 className="banner-title">
                    Digital Marketing
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
                <h2>How can I grow my business through Digital Marketing?</h2>
                <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
              </div>
              <div className="tw-web-analytics-content">
                <p>
                    Digital Marketing lets you define your target audience very precisely.
                </p>
                <p>
                    You can run your search engine or social media campaigns
                    for a longer period of time at compelling prices.
                </p>
                <p>
                    It is highly interactive.
                    So, you can have your audiences reach out to you via.
                    lead generation forms, visit your websites or download your apps.
                </p>
                <p>
                    Digital Marketing offers key insights via analytics.
                    As you dive deeper into the world of digital marketing,
                    your RoI continually increases.
                </p>
                <p>
                    Digital Marketing is for everyone.
                    Connect with us to know more about Digital Marketing for your business.
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
              <Img fixed={data.imageSharp.fixed} alt="Digital Marketing" className="img-fluid analytics-img" />
            </div>
            {/* Col End */}
            <div className="col-md-6 align-self-center">
              <div className="tw-web-analytics-content">
                <div className="section-heading text-center" style={{ marginBottom: '0px' }}>
                  <h2>How can I do Digital Marketing for my business?</h2>
                  <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
                </div>
                <p>
                    There are two main approaches to Digital Marketing :
                  <br />
                    1. Organic (Long-term gains)
                  <br />
                    2. Paid (Short-term gains)
                  <br />
                    SEO (Search Engine Optimisation), link-building, blogging,
                    updating the website with relevant content and
                    several other activities are required for growing your reach organically.
                  <br />
                    SEM (Search Engine Marketing), SMM (Social Media Marketing),
                    Search and Display Ads on LinkedIn and several other activities
                    comprise the Paid Approach.
                  <br />
                    Understand in more depth how a Digital Marketing Campaign
                    can be designed for your business.
                  <a href="#services-form-section" className="tw-readmore">
                    Book A Free Consultation Session Or Request A Call-back
                    <i className="fa fa-angle-right" />
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

export default DigitalMarketing;

export const query = graphql`
  query {
    imageSharp(fixed: {originalName: {eq: "digital-marketing.jpeg"}}){
      fixed(width: 540, height: 300) {
        ...GatsbyImageSharpFixed
      }
    }
  }`;
okfil