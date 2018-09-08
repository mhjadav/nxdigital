import React, { Component } from 'react';
import sliderImage from "../static/images/slider/slider2.png";

class Carousel extends Component {
    componentDidMount() {
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
        <section id="tw-testimonial" className="tw-testimonial">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6 wow fadeInLeft" data-wow-duration="1s">
                  <div className="tw-testimonial-content text-center">
                    <h2 className="section-title">Love From Clients</h2>
                    <span className="animate-border border-green tw-mt-20 tw-mb-40 ml-auto mr-auto" />
                  </div>
                  <div className="tw-testimonial-carousel owl-carousel">
                    <div className="tw-testimonial-wrapper">
                      {/* End Testimonial bg */}
                      <div className="testimonial-text">
                        <p>
                        Optimus DM has provided a social intranet to AM Legals for managing leads and efficiently handling their business. Vat Profs, a sister concern of AM Legals based out of the Middle East is also our client for their LinkedIn Advertisements. AM Legals and Vat Profs advise, handle litigation & render non-litigation services specialised in Arbitration, Value Added Tax(VAT), IBC, Contracts & Agreements,Trademark – IPR, Company Laws, Corporate Laws, Commercial Laws and so on. 
                        </p>
                        <div className="testimonial-meta">
                          <h4>
                            AM Legals
                            <small>Ahmedabad</small>
                          </h4>
                          <i className="icon icon-quote2" />
                        </div>
                        {/* End Testimonial Meta */}
                      </div>
                      {/* End testimonial text */}
                    </div>
                    {/* End Tw testimonial wrapper */}
                    <div className="tw-testimonial-wrapper">
                      {/* End Testimonial bg */}
                      <div className="testimonial-text">
                        <p>
                        Optimus DM has provided a social intranet to AM Legals for managing leads and efficiently handling their business. Vat Profs, a sister concern of AM Legals based out of the Middle East is also our client for their LinkedIn Advertisements. AM Legals and Vat Profs advise, handle litigation & render non-litigation services specialised in Arbitration, Value Added Tax(VAT), IBC, Contracts & Agreements,Trademark – IPR, Company Laws, Corporate Laws, Commercial Laws and so on. 
                        </p>
                        <div className="testimonial-meta">
                          <h4>
                            AM Legals
                            <small>Ahmedabad</small>
                          </h4>
                          <i className="icon icon-quote2" />
                        </div>
                        {/* End Testimonial Meta */}
                      </div>
                      {/* End testimonial text */}
                    </div>
                    {/* End Tw testimonial wrapper */}
                    <div className="tw-testimonial-wrapper">
                      {/* end testimonial bg */}
                      <div className="testimonial-text">
                        <p>
                        Optimus DM has provided a social intranet to AM Legals for managing leads and efficiently handling their business. Vat Profs, a sister concern of AM Legals based out of the Middle East is also our client for their LinkedIn Advertisements. AM Legals and Vat Profs advise, handle litigation & render non-litigation services specialised in Arbitration, Value Added Tax(VAT), IBC, Contracts & Agreements,Trademark – IPR, Company Laws, Corporate Laws, Commercial Laws and so on. 
                        </p>
                        <div className="testimonial-meta">
                          <h4>
                            AM Legals
                            <small>Ahmedabad</small>
                          </h4>
                          <i className="icon icon-quote2" />
                        </div>
                        {/* End Testimonial Meta */}
                      </div>
                      {/* End testimonial text */}
                    </div>
                    {/* End tw testimonial wrapper */}
                  </div>
                  {/* End Tw testimonial carousel */}
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Container */}
          </section>
          );
    }
}

export default Carousel;