import React from 'react';
import { Link } from "gatsby"
import logo from "../static/images/logo/logo.png"
const Footer = () => {
    return  <footer id="tw-footer" className="tw-footer">
                <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                    <div className="row">
                        <div className="col-md-4">
                        <div className="contact-us">
                            <div className="contact-icon">
                            <i className="icon icon-map2" />
                            </div>
                            {/* End contact Icon */}
                            <div className="contact-info">
                            <h3>Sydney, Australia</h3>
                            <p>1010 Grand Avenue</p>
                            </div>
                            {/* End Contact Info */}
                        </div>
                        {/* End Contact Us */}
                        </div>
                        {/* End Col */}
                        <div className="col-md-4">
                        <div className="contact-us contact-us-last">
                            <div className="contact-icon">
                            <i className="icon icon-phone3" />
                            </div>
                            {/* End contact Icon */}
                            <div className="contact-info">
                            <h3>01234567890</h3>
                            <p>Give us a call</p>
                            </div>
                            {/* End Contact Info */}
                        </div>
                        {/* End Contact Us */}
                        </div>
                        {/* End Col */}
                        <div className="col-md-4">
                            <div className="tw-footer-info-box">
                                <div className="footer-social-link">
                                    <h3>Follow us</h3>
                                    <ul>
                                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                    <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                </div>
                                {/* End Social link */}
                            </div>
                        </div>
                    </div>
                    {/* End Contact Row */}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Widget Row */}
                </div>
                {/* End Contact Container */}
                <div className="copyright">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <span>Copyright © 2018, All Right Reserved Nx Digital</span>
                    </div>
                    {/* End Col */}
                    <div className="col-md-6">
                        <div className="copyright-menu">
                        <ul>
                            <li>
                            <a href="#">Home</a>
                            </li>
                            <li>
                            <a href="#">Terms</a>
                            </li>
                            <li>
                            <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                            <a href="#">Contact</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    {/* End col */}
                    </div>
                    {/* End Row */}
                </div>
                {/* End Copyright Container */}
                </div>
                {/* End Copyright */}
                {/* Back to top */}
                <div id="back-to-top" className="back-to-top">
                <button className="btn btn-dark" title="Back to Top">
                    <i className="fa fa-angle-up" />
                </button>
                </div>
                {/* End Back to top */}
            </footer>      
}

export default Footer;