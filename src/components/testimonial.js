import React, { Component } from 'react';
import sliderImage from "../static/images/slider/slider2.png";
import { testimonials } from '../../site-config';
import { Link } from 'gatsby';

class Carousel extends Component {
    componentDidMount() {
      console.log(testimonials);
        if(window.$){
            /*Testimonial Slider*/
            window.$(".tw-testimonial-carousel").owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                nav: false,
                dots: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                mouseDrag: false,
                smartSpeed: 900,
            });
        }
    }
    render() {
        return (
          <section id="main-container" className="main-container" style={{ background: "#f7f9f8" }}>
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <div className="section-heading">
                    <h2>
                      Success <span>Stories</span>
                    </h2>
                    <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
                  </div>
                </div>
                {/* COl End */}
              </div>
              {/* Row End */}
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="testimonial-slider owl-carousel">
                       <div className="testimonial-content">
                        <div className="testimonial-text">
                          <article>
                            <h4>#DigitalMarketing</h4>
                            <p>
                               FinLearn Academy is a trading & investment education initiative delivered through both physical classroom and online platforms. Their SmartTrader programme transforms stock market enthusiasts from novices to professionals.
                            </p>
                            <h6>The go-live experience in just 2 simple steps:  </h6>
                            <p>
                              Step 1: Our tech team developed a landing page as per the client's specification, where we put in all the relevant information about Finlearn Academy's services along with a lead collection form.  
                            </p>
                            <p>
                            Step 2: Our graphic designers created the artwork (pic) which was then promoted on Social Media channel LinkedIn and through the Search and Display networks of Google Ads. 
                            </p>
                            <span>The leads flowing through are filtered and the client's sales team then starts meaningful conversations for closure.</span>
                          </article>
                          <Link to="/contact/" className="tw-readmore">Connect with Us
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </div>
                        {/* TEstimonial text end */}
                      </div>
                      {/* Testimonial Content End */}
                      <div className="testimonial-content">
                        <div className="testimonial-text">
                          <article>
                            <h4>#Technology</h4>
                            <p>
                              Nainorita is fashion brand selling beautiful stoles, scarves and FusionWear to their customers in the domestic as well as International markets.  
                            </p>
                            <p>
                              Now, Nainorita only focuses on their core business of Fashion Designing and production while Nx Digital takes care of their Digital Marketing requirements. This includes Digital Marketing as well as a Go-To-Market Strategy for their brands.   Not only this, we will also provide the necessary IT Infrastructure to Nainorita like and anything else that the Business may need in terms of Marketing and technology.  Because of our services, Nainorita can focus purely on activities which are at the core of their business and increase their productivity as well as profitability. 
                            </p>
                          </article>
                          <Link to="/contact/" className="tw-readmore">Connect with Us
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </div>
                        {/* TEstimonial text end */}
                      </div>
                      {/* Testimonial Content End */}
                      <div className="testimonial-content">
                        <div className="testimonial-text">
                          <article>
                            <h4>#Digital Transformation</h4>
                            <p>
                              How to connect businesses to their prospects worldwide:ConvergeSol has been a long term client for us and is focussed on providing high quality customised software solutions and technology consultancy to Financial Services companies globally.
                            </p>
                            <h6>  Our Digital Marketing campaign for them is divided into three parts:  </h6>
                            <p>
                              1. Branding through broadcasting the services offered to the precise target audience through LinkedIn and EMail.  
                            </p>
                            <p>
                              2. Lead Generation through Search Engine Marketing (SEM) via GoogleAds. People from financial services sector searching for software companies discover ConvergeSol and get to know everything about their business on their landing page.  
                            </p>
                            <p>
                              3.Their Target Audiences can then connect with our client and take things forward. 
                            </p>
                          </article>
                          <Link to="/contact/" className="tw-readmore">Connect with Us
                            <i className="fa fa-angle-right"></i>
                          </Link>
                        </div>
                        {/* TEstimonial text end */}
                      </div>
                      {/* Testimonial Content End */}
                  </div>
                  {/* Carousel End */}
                </div>
                {/* COl End */}
              </div>
              {/* Row End */}
            </div>
            {/* Container End */}
          </section>
        );
    }
}

export default Carousel;