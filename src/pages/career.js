import React, { Component } from "react";
import Layout from "../components/layout";
import { push } from 'gatsby';
import LinkedinSDK from 'react-linkedin-sdk';
import encode from '../utils/index';

class Career extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": 'career', ...this.state })
        })
        .then(() => push('/success'))
        .catch(error => alert(error));
        
        console.log("Form data", this.state);
        e.preventDefault();
    };
    responseLinkedin = response => {
        console.log(response);
        const fullName = `${response.firstName} ${response.lastName}`; 
        const headline = response.headline;
        const location = response.location.name;
        const profileLink = response.siteStandardProfileRequest.url;
        const currentCompany = response.positions.values ? response.positions.values[0].company.name : '';
        this.setState({
            fullName,
            headline,
            location,
            profileLink,
            currentCompany
        });
    }
    render() {
        return(
            <Layout>
                <div id="banner-area" className="banner-area">
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-12">
                            <div className="banner-heading">
                            <h1 className="banner-title">Career</h1>
                            <ol className="breadcrumb">
                                <li>Home</li>
                                <li><a href="#">Career</a></li>
                            </ol>
                            </div>
                        </div>
                        {/* Col end */}
                        </div>
                        {/* Row end */}
                    </div>
                    {/* Container end */}
                    </div>
                    {/* Banner area end */}
                    <section id="tw-features-contact" className="tw-features-contact">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-6">
                                <div className="section-heading">
                                <h2>We are hiring</h2>
                                <span className="animate-border tw-mt-30 tw-mb-40" />
                                </div>
                                <div className="tw-features-contact-info">
                                <p>If you are looking for change email your CV with subject `Job Application`</p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="contact-us">
                                            <div className="contact-icon">
                                            <i className="icon icon-envelope2" />
                                            </div>
                                            {/* End contact Icon */}
                                            <div className="contact-info">
                                            <h3>mail@nxdigital.com</h3>
                                            </div>
                                            {/* End Contact Info */}
                                        </div>
                                        {/* End Contact Us */}
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-us-form service-contact-form">
                                <form onSubmit={ this.handleSubmit } className="contact-form" name="career" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/success/">
                                    <input type="hidden" name="form-name" value="career" />
                                    <div className="error-container" />
                                    <div className="row">
                                        { this.state.fullName && 
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                <input readOnly className="form-control form-name" value={this.state.fullName} name="name" id="name" placeholder="Name" type="text" required />
                                                </div>
                                            </div>
                                        }
                                         { this.state.location && 
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                <input readOnly className="form-control form-name" value={this.state.location} name="name" id="name" placeholder="Name" type="text" required />
                                                </div>
                                            </div>
                                        }
                                        { this.state.headline && 
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                <input readOnly className="form-control form-name" value={this.state.headline} name="name" id="name" placeholder="Name" type="text" required />
                                                </div>
                                            </div>
                                        }
                                       
                                        { this.state.profileLink && 
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                <input readOnly className="form-control form-name" value={this.state.profileLink} name="name" id="name" placeholder="Name" type="text" required />
                                                </div>
                                            </div>
                                        }
                                        { this.state.currentCompany && 
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                <input readOnly className="form-control form-name" value={this.state.currentCompany} name="name" id="name" placeholder="Name" type="text" required />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    {/* Form row end */}
                                    {this.state.fullName ? 
                                        <div className="text-right">
                                            <button className="btn btn-primary tw-mt-30" type="submit">Submit</button>
                                        </div> :
                                        <div className="text-left">
                                        <LinkedinSDK
                                            clientId="816psos5oxo4mk"
                                            callBack={this.responseLinkedin}
                                            fields=":(id,site-standard-profile-request,num-connections,picture-url,first-name,last-name,headline,location,summary,specialties,positions)"
                                            className={'btn btn-primary solid blank'}
                                            loginButtonText={'Apply Via Linkedin'}
                                            logoutButtonText={'Logout from Linkedin'}
                                            buttonType={'button'}
                                        />
                                    </div>
                                    }
                                </form>
                                {/* Form end */}
                                </div>
                                {/* Contact us form end */}
                            </div>
                            {/* Col End */}
                            </div>
                            {/* Row End */}
                        </div>
                        {/* Container End */}
                    </section>
                    {/* Feature Contact Us end */}
                </Layout>
        )
    }
}

export default Career;