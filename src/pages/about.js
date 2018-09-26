import React from 'react';
import Layout from '../components/layout';
import { pageMetaInfo } from '../../site-config';
import ServicesList from '../components/services-list';

const About = () => (
  <Layout seoDescription={pageMetaInfo.about.description}>

    <div id="banner-area" className="banner-area bg-overlay case-bg-overlay">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="banner-heading">
              <h1 className="banner-title">
                                About Us
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

    <section id="main-container" className="main-container">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="section-heading" style={{ marginBottom: '0px' }}>
              <p>
                            We are Optimus DM and we aim to be your ideal digital partners.
              </p>
              <p>
                            Growth and Profitability are at heart of all businesses, and we help businesses achieve that. Nx aims to deliver 2x, 5x, 10x and eventually, Nx growth to businesses through our Technology, Digital Transformation and Strategy expertise.
                {' '}

              </p>
            </div>
            {/* section Heading End */}
          </div>
          {/* Col End */}
        </div>
      </div>
    </section>
    <section id="tw-about" className="tw-final-result" style={{ paddingTop: '0px' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 features-box">
            <h2>
              <span>Mission:</span>
            </h2>
            <p>
                            To provide the highest quality of Digital Marketing and Technology services to businesses globally
            </p>
          </div>
          <div className="col-lg-12 features-box">
            <h2>
              <span>Vision:</span>
            </h2>
            <p>
                            To be a leading Digital Transformation and Strategy Company globally with a solid Technology backbone to fuel business growth and increase profitability for our clients.
            </p>
          </div>
          <div className="col-lg-12 features-box">
            <h2>
              <span>Open Door Policy:</span>
            </h2>
            <p>
                            We follow an open door policy and we are always open to discuss business ideas with you, help your business grow or even talk about upcoming technology trends with you.
            </p>
          </div>

          <div className="col-lg-12 features-box">
            <h2>
              <span>Our Team:</span>
            </h2>
            <p>
                            The members of our company are who make us. We value all our members equally, and ensure that we recruit people who have the correct attitude and aptitude to match our clients' expectations.
            </p>
            <p>
                                We are a flat organisational structure and do not believe in traditional hierarchies. We are young, enthusiastic and hungry for success and client satisfaction.
            </p>
          </div>

        </div>
        {/* 1st Row End */}
      </div>
      {/* Container End */}
    </section>
    <section id="tw-testimonial" className="tw-testimonial">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 wow fadeInLeft" data-wow-duration="1s">
            <div className="tw-testimonial-content text-center">
              <h2 className="section-title">Our Values</h2>
              <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
            </div>
            <div className="tw-testimonial-carousel owl-carousel">
              <div className="tw-testimonial-wrapper">
                {/* End Testimonial bg */}
                <div className="testimonial-text">
                  <p>We believe in serving the needs of the market through our expertise about the digital world. For us, profitability and growth are by-products of client satisfaction.</p>
                </div>
                {/* End testimonial text */}
              </div>
              <div className="tw-testimonial-wrapper">
                {/* End Testimonial bg */}
                <div className="testimonial-text">
                  <p>
                                    Our core competence is understanding the way businesses grow and through our digital and technology prowess, we aim to positively impact the ecosystem around us.
                  </p>
                </div>
                {/* End testimonial text */}
              </div>
              {/* End Tw testimonial wrapper */}
              <div className="tw-testimonial-wrapper">
                {/* End Testimonial bg */}
                <div className="testimonial-text">
                  <p>
                                    We value time extremely highly, for both ourselves as well as for our clients and hence, we focus on concise and clear communications will all the stakeholders in our ecosystem.
                  </p>
                </div>
                {/* End testimonial text */}
              </div>
              {/* End Tw testimonial wrapper */}
              <div className="tw-testimonial-wrapper">
                {/* End Testimonial bg */}
                <div className="testimonial-text">
                  <p>
                                    Ethics and empathy are at the core of our being. We respect and treat all human beings as equal and we are an equal opportunity employer.
                  </p>
                </div>
                {/* End testimonial text */}
              </div>
              {/* End Tw testimonial wrapper */}
              <div className="tw-testimonial-wrapper">
                {/* End Testimonial bg */}
                <div className="testimonial-text">
                  <p>
                                    The work that we do is our showcase to the world and that is what fuels our growth. Thus, we maintain extremely strict quality standards, always.
                  </p>
                </div>
                {/* End testimonial text */}
              </div>
              {/* End Tw testimonial wrapper */}
            </div>
            {/* End Tw testimonial carousel */}

          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Container */}
    </section>
    <ServicesList style={{ background: 'none' }} />
  </Layout>

);

export default About;
