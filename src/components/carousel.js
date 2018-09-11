import React, { Component } from 'react';
import sliderImage from "../static/images/slider/slider2.png";
import { Link } from 'gatsby';

class Carousel extends Component {
    componentDidMount() {
    }
    render() {
        return (
        <React.Fragment>
            <section id="tw-intro" className="tw-intro-area" style={{ "background": "rgb(247, 249, 248)" }}>
                <div className="container">
                    <div className="row">
                   
                        <div className="col-lg-12 col-md-12 fadeInLeft">
                            <div className="section-heading" style={{ marginBottom: "25px" }}>
                                <h2>
                                    Connect with us over a
                                    <span> coffee </span>
                                    to understand:
                                </h2>
                                <span className="animate-border tw-mb-40" />
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>
                                        We understand that you are working tirelessly to achieve your dreams and you need to completely focus on your core business.
                                        Outsource your Digital Marketing and / or Technology Requirements to us.
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <p>
                                        How <span>#</span>DigitalMarketing fuels business growth
                                        <br />
                                        How <span>#</span>Technology helps businesses become better
                                        <br />
                                        How <span>#</span>WebsiteDesign can increase brand value
                                        <br />
                                        How <span>#</span>MobileApp can transform your brand
                                        <br />
                                        How <span>#</span>Software can smoothen your business 
                                    </p>
                                    {/* Default Round Btn */}
                                    <Link to="/book-appointment/" className="btn btn-secondary">Let's Grab a Coffee</Link>
                                </div>
                            </div>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                </div>
                {/* End Container */}
                </section>
        </React.Fragment>
        );
    }
}

export default Carousel;