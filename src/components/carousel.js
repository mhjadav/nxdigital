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
                            <h1>NX
                            <span> Digital</span>
                            </h1>
                            <p>Proudly serving the marketing needs of all kinds of businesses</p>
                            <p>Digital Marketing is for everyone. You decide your budget upfront and then design campaigns accordingly. </p>
                        </div>
                        </div>
                        {/* Col end */}
                        <div className="col-md-5 mr-auto ml-auto align-self-center">
                        <img src={sliderImage} alt="slider image" className="img-fluid slider-img" />
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