import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import ContactForm from '../components/contact-form';

import './index.css';

import place1Image from '../static/images/icon/place1.png';

const Contact = () => (
  <Layout>
    <div id="banner-area" className="banner-area bg-overlay case-bg-overlay">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="banner-heading">
              <h1 className="banner-title">
                                    Contact
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
          <div className="col-lg-12">
            <section id="tw-contact-us" className="tw-contact-us bg-offwhite">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="section-heading text-center">
                      <h2>
                        <small>Let&apos;s Discuss Marketing Over Coffee</small>
                                      Connect With Us
                      </h2>
                      <span className="animate-border border-ash ml-auto mr-auto tw-mt-20 tw-mb-40" />
                    </div>
                  </div>
                  {/* Col End */}
                </div>
                {/* Row End */}
                <div className="contact-us-form">
                  <ContactForm formName="contactus" />
                </div>
                {/* Contact us form end */}
              </div>
              {/* Container End */}
            </section>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div className="tw-contact-box">
              <div className="contact-heading">
                <img src={place1Image} alt="" className="img-fluid" />
                <h3>Optimus DM</h3>
              </div>
              {/* End Content Heading */}

              <div className="contact-info-box-content">
                <i className="fa fa-map-marker" />
                <p>11th floor, Earth Arise, </p>
                <p>Beside YMCA, Sarkhej - Gandhinagar Hwy</p>
                <p>Ahmedabad, Gujarat 380015</p>
                <Link to="tel:+919152009066">
                  <i className="fa fa-phone" />
                  <p>
                  (+91)9152009066
                  </p>
                </Link>
                <Link to="mailto:ruchir@optimusdm.in">
                  <i className="fa fa-envelope" />
                  <p>ruchir@optimusdm.in</p>
                </Link>
              </div>
              {/* End content info box */}
            </div>
            {/* End Contact Box */}
          </div>
          {/* End Col */}
          <div className="col-md-8 col-xs-12">
            <div id="map" className="map">
              <iframe title="Optimus DM Location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29376.829723275747!2d72.499845!3d23.0199638!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bfd82333741%3A0x8d1ff139271001d0!2sOptimus+DM!5e0!3m2!1sen!2sin!4v1537937491163" width="100%" height="100%" frameBorder={0} style={{ border: 0 }} allowFullScreen />
            </div>
          </div>

        </div>
        {/* End Row */}
      </div>
      {/* Container End */}
    </section>
  </Layout>
);

export default Contact;
