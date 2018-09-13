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
                "Saturday",
                "Sunday"
            ],
            workshopDays: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            callbackSlot:[
                "Morning",
                "Afternoon",
                "Evening"
            ],
            workshopSlot:[
                "Morning",
                "Afternoon",
                "Evening"
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
                    <div className="col-lg-12">
                      <section id="tw-contact-us" className="tw-contact-us bg-offwhite">
                        <div className="container">
                            <div className="row">
                              <div className="col">
                                  <div className="section-heading text-center">
                                  <h2>
                                      Let's Connect
                                  </h2>
                                  <span className="animate-border border-ash ml-auto mr-auto tw-mt-20 tw-mb-40" />
                                  </div>
                              </div>
                              {/* Col End */}
                            </div>
                            {/* Row End */}
                            <div className="contact-us-form">
                                <ContactForm subjectText="New Message On Marketing And Coffee Page" fields={this.fields} submitButtonText="Submit" formName="marketing-and-coffee" />
                            </div>
                            {/* Contact us form end */}
                        </div>
                          {/* Container End */}
                      </section>
                    </div>
                  </div>
                  <br></br>
                </div>
                {/* End Container */}
                </section>
        
        </Layout>
        )
  }
}

export default BookAppointment;
