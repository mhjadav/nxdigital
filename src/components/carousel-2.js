import React, { Component } from 'react';

class Carousel2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            callbackDays: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            workshopDays: [
                "Monday To Friday",
                "Saturday"
            ],
            callbackSlot:[
                "10 AM",
                "11 AM",
                "12 PM",
                "1 PM",
                "2 PM",
                "3 PM",
                "4 PM",
                "5 PM",
                "6 PM",
                "7 PM",
                "8 PM"
            ],
            workshopSlot:[
                "10 AM",
                "4 PM"
            ],
            callBackSelected: false
        }
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
    _handleRequestChange = (event) => {
       this.setState({
            callBackSelected: !this.state.callBackSelected
       })
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
                                        <form id="contact-form" className="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                                        <div className="error-container" />
                                        <div className="row">
                                            <div className="col-lg-12">
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
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input className="form-control form-email" name="contactno" placeholder="Contact Number" type="text" required />
                                                </div>
                                            </div>
                                            {/* Col End */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input className="form-control form-subject" placeholder="City" name="city" id="city" type="text" />
                                                </div>
                                            </div>
                                            {/* Col End */}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <input className="form-check-input" name="request" value="workshop" id="workshop" type="radio" onChange={ this._handleRequestChange } checked={!this.state.callBackSelected}/>
                                                        <label className="form-check-label" htmlFor="workshop" onClick={ this._handleRequestChange }>
                                                            Attend Free Workshop
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" name="request" value="callback" id="callback" type="radio" onClick={ this._handleRequestChange } checked={this.state.callBackSelected}/>
                                                        <label className="form-check-label" htmlFor="callback">
                                                            Request A Call-Back
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                this.state.callBackSelected ? <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <select id="callbackday" name="callback-day" className="form-control" defaultValue="">
                                                            <option value="">Select Day</option>
                                                            {
                                                                this.state.callbackDays.map((item, index)=>{
                                                                    return  <option key={index} value={item}>{item}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <select id="callbackday" className="form-control" name="workshop-slot" defaultValue="">
                                                            <option value="">Select Slot</option>
                                                            {
                                                                this.state.callbackSlot.map((item, index)=>{
                                                                    return  <option key={index} value={item}>{item}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            :   <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <select id="workshopday" className="form-control" name="workshop-day" defaultValue="">
                                                            <option value="">Select Day</option>
                                                            {
                                                                this.state.workshopDays.map((item, index)=>{
                                                                    return  <option key={index} value={item}>{item}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <select id="workshopslot" className="form-control" name="workshop-slot" defaultValue="">
                                                            <option value="">Select Slot</option>
                                                            {
                                                                this.state.workshopSlot.map((item, index)=>{
                                                                    return  <option key={index}value={item}>{item}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            
                                            }
                                            {/* Col End */}
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