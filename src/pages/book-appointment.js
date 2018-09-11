import React, { Component  } from "react";
import Helmet from 'react-helmet'
import Layout from "../components/layout";
import ContactForm from "../components/contact-form";

class BookAppointment extends Component {
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
    render() {
        return(
        <Layout>    
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
                                    <div className="contact-us-form service-contact-form">
                                        <ContactForm subjectText="New Message On Marketing And Coffee Page" fields={this.fields} submitButtonText="Let's Have A Coffee" formName="marketing-and-coffee" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Col */}
                    </div>
                    {/* End Row */}
                </div>
                {/* End Container */}
                </section>
        
        </Layout>
        )
  }
}

export default BookAppointment;
