import React, { Component } from "react";
import PropTypes from 'prop-types';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}


class ContactForm extends Component {
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
    }
    componentDidMount() {
    }
    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": this.props.formName, ...this.state.form })
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
    handleRequestChange = (event) => {
       this.setState({
            callBackSelected: !this.state.callBackSelected
       });
       this.handleChange(event);
    }
    render() {
        const labelClassName = `form-check-label ${this.props.labelClass}`;
        return (
            <form onSubmit={ this.handleSubmit } className="contact-form" name={this.props.formName} method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/success/">
                <input type="hidden" name="form-name" value={this.props.formName} />
                <div className="error-container" />
                <div className="row">
                    {   this.props.fields.name && 
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control form-name" name="name" id="name" placeholder="Name" type="text" required onChange={ this.handleChange } />
                        </div>
                    </div>}
                    {/* Col end */}
                    {this.props.fields.email && 
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input className="form-control form-email" name="email" placeholder="Email" type="email" required onChange={ this.handleChange } />
                            </div>
                        </div>
                    }
                    {this.props.fields.contactno && 
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input className="form-control form-email" name="contact-no" placeholder="Contact Number" type="text" required onChange={ this.handleChange } />
                            </div>
                        </div>
                    }
                    {this.props.fields.subject && 
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control form-subject" placeholder="Subject" name="subject" id="subject" type="text"  onChange={ this.handleChange } />
                        </div>
                    </div>
                    }
                    {this.props.fields.message && 
                    <div className="col-lg-12">
                        <div className="form-group">
                        <textarea className="form-control form-message required-field" id="message" placeholder="Comments" rows={5} defaultValue={""} name="message" onChange={ this.handleChange } />
                        </div>
                    </div>
                    }
                    {/* Col End */}
                    {this.props.fields.city && 
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input className="form-control form-subject" placeholder="City" name="city" id="city" type="text" onChange={ this.handleChange } />
                            </div>
                        </div>
                    }
                    {/* Col End */}
                    {this.props.fields.request && 
                        <div className="col-lg-12">
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" name="request" value="workshop" id="workshop" type="radio" onChange={ this.handleRequestChange } checked={!this.state.callBackSelected}/>
                                    <label className={labelClassName} htmlFor="workshop">
                                        Attend Free Workshop
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" name="request" value="callback" id="callback" type="radio" onClick={ this.handleRequestChange } checked={this.state.callBackSelected}/>
                                    <label className={labelClassName} htmlFor="callback">
                                        Request A Call-Back
                                    </label>
                                </div>
                            </div>
                        </div>
                    }
                    {
                    this.props.fields.request && 
                        (this.state.callBackSelected ? <div className="col-lg-12">
                                <div className="form-group">
                                    <select id="callbackday" name="day" className="form-control" defaultValue="" onChange={ this.handleChange } >
                                        <option value="">Select Day</option>
                                        {
                                            this.state.callbackDays.map((item, index)=>{
                                                return  <option key={index} value={item}>{item}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                <select id="callback slot" className="form-control" name="slot" defaultValue="" onChange={ this.handleChange } >
                                    <option value="">Select Slot</option>
                                    {
                                        this.state.callbackSlot.map((item, index)=>{
                                            return  <option key={index} value={item}>{item}</option>
                                        })
                                    }
                                </select>
                            </div>
                            </div>
                            : <div className="col-lg-12">
                                <div className="form-group">
                                <select id="workshopday" className="form-control" name="day" defaultValue="" onChange={ this.handleChange } >
                                    <option value="">Select Day</option>
                                    {
                                        this.state.workshopDays.map((item, index)=>{
                                            return  <option key={index} value={item}>{item}</option>
                                        })
                                    }
                                </select>
                            </div>
                                <div className="form-group">
                                <select id="workshopslot" className="form-control" name="slot" defaultValue="" onChange={ this.handleChange } >
                                    <option value="">Select Slot</option>
                                    {
                                        this.state.workshopSlot.map((item, index)=>{
                                            return  <option key={index}value={item}>{item}</option>
                                        })
                                    }
                                </select>
                            </div>
                            </div>)
                    }
                    {/* Col End */}
                </div>
                {/* Form row end */}
                <div className="text-right">
                    <button className="btn btn-primary tw-mt-30" type="submit">{this.props.submitButtonText}</button>
                </div>
            </form>              
        )
    }
}

ContactForm.propTypes = {
    fields: PropTypes.shape({}),
    formName: PropTypes.string,
    submitButtonText: PropTypes.string,
    labelClass: PropTypes.string
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
    labelClass: ''
}
export default ContactForm;
