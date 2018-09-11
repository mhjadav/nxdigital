import React, { Component  } from "react";
import Helmet from 'react-helmet'
import Carousel from '../components/carousel';
import Testimonial from '../components/testimonial';
import Layout from '../components/layout';
import  "./index.css";
import { Link } from 'gatsby';

import laptopImage from "../static/images/about/about_image.png";

class Index extends Component {
 
  render() {
    return(
      <Layout>
        <Carousel />
        <section id="tw-intro" className="tw-intro-area">
        <div className="container">
            <div className="row">
            <div className="col-lg-6 ml-auto col-md-12 wow fadeInLeft" data-wow-duration="1s">
                <h2 className="column-title">What we bring on the table:</h2>
                <span className="animate-border tw-mb-40" />
                <article>
                  <h4> We take pride in being associated with clients across the business spectrum: </h4>
                  <h6>Start ups:</h6>
                  <p>
                    We understand that you are working tirelessly to achieve your dreams and you need to completely focus on your core business.
                    Outsource your Digital Marketing and / or Technology Requirements to us.
                    <Link to="/contact/" className="tw-readmore"> Let's Connect
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </p>
                  <h6>Small Businesses:</h6>
                  <p>
                    Scaling your business and taking it to new heights is your priority. We will take care of your technology requirements and help you 
                    increase productivity. With innovative Digital Marketing Campaigns, we can help you get more customers.
                    <Link to="/contact/" className="tw-readmore"> Let's Connect
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </p>
                  <h6>Large Businesses:</h6>
                  <p>
                  Brand Management and building brand value is really important for you. Mapping supply with demand, managing attrition, increasing 
                  efficiency, picking the right CRM and ERP Solutions, building customised software and digital marketing is what we will love to help you with.
                    <Link to="/contact/" className="tw-readmore"> Let's Connect
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </p>
                  <h6>Brands:</h6>
                  <p>
                    You are a large company and enhancing profitability and shareholder value is your top priority. Outsource the processes that are not your Core 
                    Competence to us. We would love to connect with you to explore various avenues to help you become meaner, leaner and faster than your competitors.
                    <Link to="/contact/" className="tw-readmore"> Let's Connect
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </p>
                </article>
            </div>
            {/* End Col */}
            <div className="col-lg-6 col-md-12 ml-auto wow fadeInRight" data-wow-duration="1s">
              <h2 className="column-title text-center">Our Processes:</h2>
                <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
              <section id="tw-timeline" className="tw-timeline" style={{ padding: "0" }}>
                  <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                          <div className="timeline-wrapper">
                              <div className="row">
                                <div className="col-md-6 timeline-item left-part">
                                    <div className="timeline-badge"></div>
                                </div>
                                <div className="col-md-6 timeline-item ">
                                    <div className="timeline-date left-part">
                                      <p className="tagline"> Requirement Gathering</p>
                                    </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6 timeline-item">
                                    <div className="timeline-date">
                                      <p className="tagline">Business Analysis</p>
                                    </div>
                                </div>
                                <div className="col-md-6 timeline-item">
                                    <div className="timeline-badge"></div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6 timeline-item left-part">
                                    <div className="timeline-badge"></div>
                                </div>
                                <div className="col-md-6 timeline-item ">
                                    <div className="timeline-date left-part">
                                      <p className="tagline">Project Kick-Off</p>
                                    </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6 timeline-item">
                                    <div className="timeline-date ">
                                      <p className="tagline">Creative Concept</p>
                                    </div>
                                </div>
                                <div className="col-md-6 timeline-item">
                                    <div className="timeline-badge "></div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6 timeline-item left-part">
                                    <div className="timeline-badge"></div>
                                </div>
                                <div className="col-md-6 timeline-item ">
                                    <div className="timeline-date left-part">
                                      <p className="tagline">Client Approvals</p>
                                    </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6 timeline-item">
                                    <div className="timeline-date ">
                                      <p className="tagline">Execution</p>
                                    </div>
                                </div>
                                <div className="col-md-6 timeline-item">
                                    <div className="timeline-badge "></div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6 timeline-item left-part">
                                    <div className="timeline-badge "></div>
                                </div>
                                <div className="col-md-6 timeline-item">
                                    <div className="timeline-date left-part">
                                      <p className="tagline">Reporting And Analytics</p>
                                    </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6 timeline-item">
                                    <div className="timeline-date ">
                                      <p className="tagline">Support</p>
                                    </div>
                                </div>
                                <div className="col-md-6 timeline-item">
                                    <div className="timeline-badge "></div>
                                </div>
                              </div>
                          
                          </div>
                        </div>
                    </div>
                  </div>
              </section>
            </div>
            {/* End Col */}
           
            </div>
            {/* End Row */}
        </div>
        {/* End Container */}
        </section>
        <Testimonial />
      </Layout>
    )
  }
}

export default Index;
