import React, { Component } from 'react';
import { push } from 'gatsby';
import Layout from '../components/layout';
import encode from '../utils/index';
import { currentOpenings } from '../../site-config';

let LinkedinSDK = () => <div>Nothing</div>;
if (typeof window !== 'undefined') {
  LinkedinSDK = require('react-linkedin-sdk').default;
}
class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userApplied: false,
      selectedJob: '',
    };
  }

    handleSubmit = (e) => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'career', ...this.state }),
      })
        .then(() => push('/success'))
        .catch(error => alert(error));

      console.log('Form data', this.state);
      e.preventDefault();
    };

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    handleApplyJob = (e) => {
      const jobTitle = e.target.getAttribute('data-title');
      this.setState({
        headline: jobTitle,
        userApplied: true,
      });
      e.preventDefault();
    }

    responseLinkedin = (response) => {
      this.setState({
        userApplied: true,
      });
      const fullname = `${response.firstName} ${response.lastName}`;
      const { headline } = response;
      const location = response.location.name;
      const profilelink = response.siteStandardProfileRequest.url;
      const company = response.positions.values ? response.positions.values[0].company.name : '';
      this.setState({
        fullname,
        headline,
        location,
        profilelink,
        company,
      });
    }

    render() {
      const {
        userApplied,
        fullname,
        location,
        headline,
        profilelink,
        company,
        email,
        contactnumber,
      } = this.state;
      return (
        <Layout>
          <div id="banner-area" className="banner-area bg-overlay case-bg-overlay">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="banner-heading">
                    <h1 className="banner-title">
                                      Career
                    </h1>
                  </div>
                </div>
                {/* Col end */}
              </div>
              {/* Row end */}
            </div>
            {/* Container end */}
          </div>
          {/* Banner area end */}
          <section id="main-container" className="main-container">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <div className="section-heading">
                    <h2>
                      <small>The Beginning</small>
                              We are
                      {' '}
                      <span>hiring</span>
                    </h2>
                    <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
                    <p>
                      If you are looking for change email your CV with subject
                      &apos;Applying for the post of &quot;Job Title&quot;&apos;
                      @ connect@nxdigital.com.au
                    </p>
                  </div>
                  {/* section Heading End */}
                </div>
                {/* Col End */}
              </div>
              {
                       userApplied ? (
                         <div className="row">
                           <div className="col-lg-12">
                             <section id="tw-contact-us" className="tw-contact-us bg-offwhite">
                               <div className="container">
                                 <div className="row">
                                   <div className="col">
                                     <div className="section-heading text-center">
                                       <h2>
                                          Fill In
                                         {' '}
                                         <span> Details</span>
                                       </h2>
                                     </div>
                                   </div>
                                   {/* Col End */}
                                 </div>
                                 {/* Row End */}
                                 <div className="contact-us-form">
                                   <form onSubmit={this.handleSubmit} className="contact-form" name="career" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/success/">
                                     <input type="hidden" name="form-name" value="career" />
                                     <div className="error-container" />
                                     <div className="row">
                                       <div className="col-lg-6">
                                         <div className="form-group">
                                           <input className="form-control form-name" value={fullname} name="fullname" id="fullname" placeholder="Full Name" type="text" required onChange={this.handleChange} />
                                         </div>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="form-group">
                                           <input className="form-control form-name" value={location} name="location" id="location" placeholder="Current Location" type="text" required onChange={this.handleChange} />
                                         </div>
                                       </div>
                                       <div className="col-lg-12">
                                         <div className="form-group">
                                           <input className="form-control form-name" value={headline} name="headling" id="headling" placeholder="Job Title" type="text" required onChange={this.handleChange} />
                                         </div>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="form-group">
                                           <input className="form-control form-name" value={profilelink} name="profilelink" id="profilelink" placeholder="Linkedin or Portfolio Url" type="url" required onChange={this.handleChange} />
                                         </div>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="form-group">
                                           <input className="form-control form-name" value={company} name="company" id="company" placeholder="Current Company" type="text" required onChange={this.handleChange} />
                                         </div>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="form-group">
                                           <input className="form-control form-name" value={email} name="email" id="email" placeholder="Email" type="email" required onChange={this.handleChange} />
                                         </div>
                                       </div>
                                       <div className="col-lg-6">
                                         <div className="form-group">
                                           <input className="form-control form-name" value={contactnumber} name="contactnumber" id="contactnumber" placeholder="Contact Number" type="phone" required onChange={this.handleChange} />
                                         </div>
                                       </div>
                                     </div>
                                     <div className="text-center">
                                       <button className="btn btn-primary tw-mt-30" type="submit">Submit</button>
                                     </div>
                                   </form>
                                   {/* Form end */}
                                 </div>
                                 {/* Contact us form end */}
                               </div>
                               {/* Container End */}
                             </section>
                           </div>
                         </div>
                       )
                         : (
                           <div className="row" style={{ background: 'rgb(247, 249, 248)' }}>
                             <div className="col-lg-12 col-md-12">
                               {currentOpenings.map(job => (
                                 <article key={job.title} className="post tw-news-post">
                                   <div className="post-body">
                                     <div className="entry-header">
                                       <h2 className="entry-title">
                                         <span>{job.title}</span>
                                       </h2>
                                       {/* End Post Meta */}
                                     </div>
                                     {/* header end */}
                                     <div className="entry-content">
                                       <p>
                                         {job.description}
                                       </p>
                                     </div>
                                     {/* End Entry Content */}
                                     <div className="post-footer">
                                       <LinkedinSDK
                                         clientId="816psos5oxo4mk"
                                         callBack={this.responseLinkedin}
                                         fields=":(id,site-standard-profile-request,num-connections,picture-url,first-name,last-name,headline,location,summary,specialties,positions)"
                                         className="btn btn-primary solid blank"
                                         loginButtonText="Apply Via Linkedin"
                                         logoutButtonText="Logout from Linkedin"
                                         buttonType="button"
                                       />
                                       <button type="button" data-title={job.title} onClick={this.handleApplyJob} className="btn btn-primary">Apply Directly</button>
                                     </div>
                                     {/* End Post Footer */}
                                   </div>
                                   {/* End Post Body */}
                                 </article>
                               ))
                          }

                             </div>
                           </div>
                         )

                      }
            </div>
          </section>
        </Layout>
      );
    }
}

export default Career;
