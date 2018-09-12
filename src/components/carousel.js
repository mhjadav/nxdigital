import React, { Component } from 'react';
import sliderImage from "../static/images/slider/slider2.png";
import { Link } from 'gatsby';

class Carousel extends Component {
    constructor(props){
        super(props);
    }
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
        <React.Fragment>
            {/* Start hero slider/ Owl Carousel Slider */}
            <div className="tw-hero-slider owl-carousel slider-dark">
            <div className="slider-2 tw-slider-bg-dark">
                <div className="slider-wrapper d-table">
                <div className="slider-inner">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                        <div className="slider-content slider-content-dark">
                            <h1>
                                <span> Nx Digital </span><br/>
                                <small>Your ideal digital partner</small>
                            </h1>
                            <h1>
                                
                            </h1>
                            <p>We offer end to end digital marketing and technology services to our clients world wide, </p>
                            <Link to="/book-appointment/" className="btn btn-primary">Let's Grab A Coffee</Link>
                        </div>
                        </div>
                        {/* Col end */}
                        <div className="col-md-5 mr-auto ml-auto align-self-center">
                        <img src={sliderImage} alt="" className="img-fluid slider-img" />
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
            {/* Slider 2 end */}
            </div>
            {/* End Carousel */}
        </React.Fragment>
        );
    }
}

export default Carousel;