import React from "react";

const ContactForm = (props) => {
    return (
        <section id="tw-contact-us" className="tw-contact-us bg-offwhite">
            <div className="container">
                <div className="row">
                <div className="col">
                    <div className="section-heading text-center">
                    <h2>
                        <small>leave a message</small>
                        Give a <span>Message</span>
                    </h2>
                    <span className="animate-border border-ash ml-auto mr-auto tw-mt-20 tw-mb-40" />
                    </div>
                </div>
                {/* Col End */}
                </div>
                {/* Row End */}
                <div className="contact-us-form">
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
                        <input className="form-control form-phone" name="phone" id="phone" placeholder="Phone" type="phone" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                        <input className="form-control form-email" name="email" id="email" placeholder="Email" type="email" required />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                        <input className="form-control form-subject" placeholder="Subject" name="subject" id="subject" type="text" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                        <textarea className="form-control form-message required-field" id="message" placeholder="Comments" rows={5} defaultValue={""} />
                        </div>
                    </div>
                    {/* Col 12 end */}
                    </div>
                    {/* Form row end */}
                    <div className="text-center">
                    <button className="btn btn-primary tw-mt-30" type="submit">Contact US</button>
                    </div>
                </form>
                {/* Form end */}
                </div>
                {/* Contact us form end */}
            </div>
            {/* Container End */}
        </section>
    )
}

export default ContactForm;
