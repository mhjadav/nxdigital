import React from 'react';
import Layout from '../../components/layout';
import ServicesList from '../../components/services-list';
import ContactForm from '../../components/contact-form';

import serviceImage2 from '../../static/images/services/single_service_img2.png';

const WebsiteDevelopment = () => {
  const fields = {
    name: true,
    email: true,
    contactno: true,
    city: true,
    request: true,
  };
  return (
    <Layout>
      <div id="banner-area" className="banner-area bg-overlay case-bg-overlay">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-heading">
                <h1 className="banner-title">
                    Website Development
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
                <h2>How should I develop a website for my business?</h2>
                <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
              </div>
              <div className="tw-features-contact-info">
                <p>
                    Your website represents your brand and your business.
                    So, the user experience is critical.
                </p>
                <p>
                    While developing your website, you also want to make it SEO friendly.
                    This let's people find you on Google and other search engines.
                </p>
                <p>
                    Apart from this, your website must be secure,
                    should load fast and be mobile responsive.
                </p>
                <p>To sum it up, the below factors are highly critical</p>
                <p>1. UI / UX (User Interface / User Experience)</p>
                <p>2. SEO Friendliness</p>
                <p>3. Speed, Security and Mobile Responsiveness</p>
                <p>
                    Book a complimentary session to get started with your
                    requirements or if you already have a website, request
                    a call back to get a complimentary website audit done.
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
                  <h2>How should I develop a website for my business?</h2>
                  <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
                </div>
                <p>
                    UI/UX Designing plays a vital role here. Our team uses sophisticated tools
                    like Illustrator, Zeplin and several others to deliver a high quality
                    experience for the end users. We also have a team of graphic designers to
                    develop images and other graphic elements required to propel your brand value.
                    To sum it up, we provide:
                  <br />
                    1. Graphic Designing
                  <a href="#services-form-section" className="tw-readmore">
                    <i className="fa fa-angle-right" />
                  </a>
                  <br />
                    2. UI / UX Designing
                  <a href="#services-form-section" className="tw-readmore">
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
                    Digital Marketing is for everyone. You decide your
                    budget upfront and then design campaigns accordingly.
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

export default WebsiteDevelopment;
