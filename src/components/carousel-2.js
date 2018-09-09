import React, { Component } from 'react';
import ContactForm from '../components/contact-form';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

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
            callBackSelected: false,
            form: {
                request: 'workshop'
            }
        }
        this.fields = {
            name: true,
            email: true,
            contactno: true,
            city: true,
            request: true
        };
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
       });
       this.handleChange(event);
    }

    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "marketing-and-coffee", ...this.state.form })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
            console.log("this.state.form", this.state.form);
        e.preventDefault();
      };
  //[e.target.name]: e.target.value
    handleChange = e => {
        this.setState({
            form: {...this.state.form, ...{ [e.target.name]: e.target.value }}
        });
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
                                    {/* method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/success/" */}
                                        <ContactForm subjectText="New Message On Marketing And Coffee Page" fields={this.fields} submitButtonText="Let's Have A Coffee" formName="marketing-and-coffee" />
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