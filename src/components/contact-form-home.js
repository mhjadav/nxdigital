import React from 'react';
import ContactForm from './contact-form';

const ContactFormHome = ({data}) => {
  const fields = {
    name: true,
    email: true,
    contactno: true,
    city: true,
    request: true,
  };
  return (
      <section id="tw-features-contact" className="tw-features-contact mt-5">
        <div className="container">
          <div className="row">
          
            <div className="col-md-12" id="services-form-section">
              <div className="section-heading text-center">
                <h2>Let's Get Started</h2>
                <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
              </div>
              <div className="contact-us-form service-contact-form">
                <ContactForm subjectText="New Message On Services Page" fields={fields} labelClass="text-dark" submitButtonText="Submit" formName="services" />
            
              </div>
              
            </div>
        
          </div>
          
        </div>
        
      </section>
    

    
      

  );
};

export default ContactFormHome;

