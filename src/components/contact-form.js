import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'gatsby';
import encode from '../utils';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callbackDays: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      workshopDays: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      callbackSlot: [
        'Morning',
        'Afternoon',
        'Evening',
      ],
      workshopSlot: [
        'Morning',
        'Afternoon',
        'Evening',
      ],
      callBackSelected: false,
      form: {
        request: 'workshop',
      },
    };
  }

  componentDidMount() {
  }

    handleSubmit = (e) => {
      const { formName } = this.props;
      const { form } = this.state;
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': formName, ...form }),
      })
        .then(() => push('/success'))
        .catch(error => window.console.log(error));

      window.console.log('Form data', form);
      e.preventDefault();
    };

    // [e.target.name]: e.target.value
    handleChange = (e) => {
      const { form } = this.state;
      this.setState({
        form: { ...form, ...{ [e.target.name]: e.target.value } },
      });
    }

    handleRequestChange = (event) => {
      const { callBackSelected } = this.state;
      this.setState({
        callBackSelected: !callBackSelected,
      });
      this.handleChange(event);
    }

    render() {
      const {
        labelClass,
        formName,
        fields,
        subjectText,
        submitButtonText,
      } = this.props;
      const {
        callBackSelected,
        callbackDays,
        workshopDays,
        workshopSlot,
        callbackSlot,
      } = this.state;
      const labelClassName = `form-check-label ${labelClass}`;
      return (
        <form onSubmit={this.handleSubmit} className="contact-form" name={formName} id={`${formName}-form`} method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/success/">
          <input type="hidden" name="form-name" value={formName} />
          <div className="error-container" />
          <div className="row">
            { fields.name
                    && (
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input className="form-control form-name" name="name" id="name" placeholder="Name" type="text" required onChange={this.handleChange} />
                      </div>
                    </div>
                    )}
            {/* Col end */}
            {fields.email
                        && (
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="form-control form-email" name="email" placeholder="Email" type="email" required onChange={this.handleChange} />
                          </div>
                        </div>
                        )
                    }
            {fields.contactno
                        && (
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="form-control form-email" name="contact-no" placeholder="Contact Number" type="text" required onChange={this.handleChange} />
                          </div>
                        </div>
                        )
                    }
            {fields.subject
              ? (
                <div className="col-lg-12">
                  <div className="form-group">
                    <input className="form-control form-subject" placeholder="Subject" name="subject" id="subject" type="text" onChange={this.handleChange} />
                  </div>
                </div>
              )
              : <input type="hidden" name="subject" value={subjectText} />
                    }
            {fields.message
                    && (
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea className="form-control form-message required-field" id="message" placeholder="Comments" rows={5} defaultValue="" name="message" onChange={this.handleChange} />
                      </div>
                    </div>
                    )
                    }
            {/* Col End */}
            {fields.city
                        && (
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input className="form-control form-subject" placeholder="City" name="city" id="city" type="text" onChange={this.handleChange} />
                          </div>
                        </div>
                        )
                    }
            {/* Col End */}
            {fields.request
                        && (
                        <div className="col-lg-12">
                          <div className="form-group">
                            <div className="form-check">
                              <input className="form-check-input" name="request" value="workshop" id="workshop" type="radio" onChange={this.handleChange} />
                              <label className={labelClassName} htmlFor="workshop">
                                Complimentary Consultation
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" name="request" value="callback" id="callback" type="radio" onClick={this.handleChange} />
                              <label className={labelClassName} htmlFor="callback" id="lbl-callback">
                                Request A Call-Back
                              </label>
                            </div>
                          </div>
                        </div>
                        )
                    }
            {
                   fields.request
                        && (callBackSelected ? (
                          <div className="col-lg-12">
                            <div className="form-group">
                              <select id="callbackday" name="day" className="form-control" defaultValue="" onChange={this.handleChange}>
                                <option value="">Select Day</option>
                                {
                                            callbackDays.map(item => <option key={item} value={item}>{item}</option>)
                                        }
                              </select>
                            </div>
                            <div className="form-group">
                              <select id="callback slot" className="form-control" name="slot" defaultValue="" onChange={this.handleChange}>
                                <option value="">Select Slot</option>
                                {
                                        callbackSlot.map(item => <option key={item} value={item}>{item}</option>)
                                    }
                              </select>
                            </div>
                          </div>
                        )
                          : (
                            <div className="col-lg-12">
                              <div className="form-group">
                                <select id="workshopday" className="form-control" name="day" defaultValue="" onChange={this.handleChange}>
                                  <option value="">Select Day</option>
                                  {
                                    workshopDays.map(item => <option key={item} value={item}>{item}</option>)
                                }
                                </select>
                              </div>
                              <div className="form-group">
                                <select id="workshopslot" className="form-control" name="slot" defaultValue="" onChange={this.handleChange}>
                                  <option value="">Select Slot</option>
                                  {
                                        workshopSlot.map(item => <option key={item} value={item}>{item}</option>)
                                    }
                                </select>
                              </div>
                            </div>
                          ))
                    }
            {/* Col End */}
          </div>
          {/* Form row end */}
          <div className="text-center">
            <button className="btn btn-primary tw-mt-30" type="submit">{submitButtonText}</button>
          </div>
        </form>
      );
    }
}

ContactForm.propTypes = {
  fields: PropTypes.shape({}),
  formName: PropTypes.string,
  submitButtonText: PropTypes.string,
  subjectText: PropTypes.string,
  labelClass: PropTypes.string,
};

ContactForm.defaultProps = {
  fields: {
    name: true,
    email: true,
    contactno: true,
    subject: true,
    message: true,
  },
  formName: 'contact',
  submitButtonText: 'Contact US',
  labelClass: '',
  subjectText: '',
};
export default ContactForm;
