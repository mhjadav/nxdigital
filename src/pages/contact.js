import React, { Component  } from "react";
import Helmet from 'react-helmet'
import Layout from "../components/layout";
import ContactForm from '../components/contact-form';

import  "./index.css";

import place1Image from "../static/images/icon/place1.png";
import place2Image from "../static/images/icon/place2.png";
import place3Image from "../static/images/icon/place3.png";

class Contact extends Component {
  render() {
    return(
      <Layout>
         <div id="banner-area" className="banner-area bg-overlay case-bg-overlay">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-12">
                              <div className="banner-heading">
                                  <h1 className="banner-title">
                                    Marketing & Contact
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
                                      <small>Let's Discuss Marketing Over Coffee</small>
                                      Connect With Us
                                  </h2>
                                  <span className="animate-border border-ash ml-auto mr-auto tw-mt-20 tw-mb-40" />
                                  </div>
                              </div>
                              {/* Col End */}
                            </div>
                            {/* Row End */}
                            <div className="contact-us-form">
                              <ContactForm formName="contactus"/>
                            </div>
                            {/* Contact us form end */}
                        </div>
                          {/* Container End */}
                      </section>
                    </div>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="tw-contact-box">
                        <div className="contact-heading">
                          <img src={place1Image} alt="" className="img-fluid" />
                          <h3>Melbourne</h3>
                        </div>
                        {/* End Content Heading */}

                        <div className="contact-info-box-content">
                          <i className="fa fa-map-marker" />
                          <p>Nx Digital</p>
                          <p>Level 23, HWT Tower</p>
                          <p>40 City Road, Southbank VIC 3006</p>
                          <i className="fa fa-phone" />
                          <p>+61 433 756 552</p>
                          <i className="fa fa-envelope" />
                          <p>connect@nxdigital.com.au</p>
                        </div>
                        {/* End content info box */}
                      </div>
                      {/* End Contact Box */}
                    </div>
                    {/* End Col */}
                    <div className="col-8">
                      <div id="map" className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.678217130921!2d144.9645478157912!3d-37.821005479751186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b18149340d%3A0xe2cc72ca55f888cc!2sHWT+Tower!5e0!3m2!1sen!2sin!4v1536931843558" width="100%" height="100%" frameBorder={0} style={{border: 0}} allowFullScreen />
                      </div>
                    </div>
                 
                  </div>
                  {/* End Row */}
                </div>
                {/* Container End */}
              </section>
      </Layout>
    )
  }
}

export default Contact;
