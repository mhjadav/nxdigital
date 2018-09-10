import React, { Component } from 'react';
import sliderImage from "../static/images/slider/slider2.png";

class Carousel extends Component {
    componentDidMount() {
        if(window.$){
            window.$(".tw-hero-slider").owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                nav: true,
                dots: false,
                autoplayTimeout: 8000,
                autoplayHoverPause: true,
                mouseDrag: false,
                smartSpeed: 1100,
                navText: ['<i class="icon icon-left-arrow2">', '<i class="icon icon-right-arrow2">'],
            });
        }
    }
    render() {
        return (
            <div className="tw-hero-slider owl-carousel slider-dark">
                <div className="slider-2 tw-slider-bg-dark">
                <div className="slider-wrapper d-table">
                <div className="slider-inner" style={{ paddingTop: "50px" }}>
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                        <div className="slider-content slider-content-dark">
                            <h1>Nx
                            <span> Digital</span>
                            </h1>
                            <p>Proudly serving the marketing needs of all kinds of businesses</p>
                            <p>Digital Marketing is for everyone. You decide your budget upfront and then design campaigns accordingly. </p>
                        </div>
                        </div>
                        {/* Col end */}
                        <div className="col-md-5 mr-auto ml-auto align-self-center">
                        <h3>Connect with us over a coffee to understand:</h3>
                        <span className="bottom-border tw-mt-20 tw-mb-30" />
                        <p>
                            How #DigitalMarketing fuels business growth
                        </p>
                        <p>
                            How #Technology helps businesses become better
                        </p>
                        <p>
                            How #WebsiteDesign can increase brand value
                        </p>
                        <p>
                            How #MobileApp can transform your brand
                        </p>
                        <p>
                            How #Software can smoothen your business 
                        </p>

                        </div>
                        {/* col end */}
                    </div>
                    {/* Row End */}
                    </div>
                    {/* Container End */}
                </div>
                {/* Slider Inner End */}
                </div>
                {/* Slider Wrapper End */}
            </div>
        </div>
        );
    }
}

export default Carousel;