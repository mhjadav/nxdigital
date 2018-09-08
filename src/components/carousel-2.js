import React, { Component } from 'react';

class Carousel2 extends Component {
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
                    <div className="slider-wrapper d-table slider-wrapper-marketing">
                    <div className="slider-inner d-table-cell">
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                            <div className="slider-content slider-content-dark">
                                <h1>NX
                                <span> Digital</span>
                                </h1>
                                <p>Marketing Made
                                    <span> Beautiful</span>
                                </p>
                                <p>We take offline businesses online. We assist those businesses which already have an online presence to reach out to greater heights via. innovative marketing campaigns on various online platforms like LinkedIn, Google, Facebook, Instagram, Twitter and so on. </p>
                            </div>
                            </div>
                            {/* Col end */}
                            <div className="col-md-5 mr-auto ml-auto align-self-center">
                                <div className="col-xs-12">
                                    <div className="contact-us-form service-contact-form">
                                        <form id="contact-form" className="contact-form" action="contact-form.php" method="POST">
                                        <div className="error-container" />
                                        <div className="row">
                                            <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control form-name" name="name" id="name" placeholder="Name" type="text" required />
                                            </div>
                                            </div>
                                            {/* Col end */}
                                            <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control form-email" name="email" placeholder="Email" type="email" required />
                                            </div>
                                            </div>
                                            {/* Col End */}
                                            <div className="col-lg-12">
                                            <div className="form-group">
                                                <input className="form-control form-subject" placeholder="Subject" name="subject" id="subject" type="text" />
                                            </div>
                                            </div>
                                            {/* Col End */}
                                            <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control form-message required-field" id="message" placeholder="Message" rows={1} defaultValue={""} />
                                            </div>
                                            </div>
                                            {/* Col 12 end */}
                                        </div>
                                        {/* Form row end */}
                                        <div className="text-right">
                                            <button className="btn btn-primary tw-mt-30" type="submit">Let's Have A Coffee</button>
                                        </div>
                                        </form>
                                        {/* Form end */}
                                    </div>
                                    {/* Contact us form end */}
                                </div>

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

export default Carousel2;