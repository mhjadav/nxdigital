import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer id="tw-footer" className="tw-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <div className="row">
            <div className="col-md-5">
              <div className="contact-us">
                <div className="contact-icon">
                  <a target="_blank" href="https://goo.gl/maps/NSFMHDBpUdB2">
                    <i className="icon icon-map2" />
                  </a>
                </div>
                {/* End contact Icon */}
                <div className="contact-info">
                  
                  <h3>Optimus DM,</h3>
                  <p>11th floor, Earth Arise, </p>
                  <p>Beside YMCA, Sarkhej - Gandhinagar Hwy</p>
                  <p>Ahmedabad, Gujarat 380015</p>
                </div>
                {/* End Contact Info */}
              </div>
              {/* End Contact Us */}
            </div>
            {/* End Col */}
            <div className="col-md-3">
              <div className="contact-us contact-us-last">
                <div className="contact-icon">
                  <Link to="tel:+919152009066">
                    <i className="icon icon-phone3" />
                  </Link>
                </div>
                {/* End contact Icon */}
                <div className="contact-info">
                  <Link to="tel:+919152009066">
                    <h3>
                    (+91)9152009066
                    </h3>
                    <p>Give us a call</p>
                  </Link>
                </div>
              </div>
              {/* End Contact Us */}
              <div className="contact-us contact-us-last">
                <div className="contact-icon">
                  <Link to="mailto:ruchir@optimusdm.in">
                    <i className="icon icon-envelope3" />
                  </Link>
                </div>
                {/* End contact Icon */}
                <div className="contact-info">
                  <Link to="mailto:ruchir@optimusdm.in">
                    <h3>
                    ruchir@optimusdm.in
                    </h3>
                    <p>Send us an email</p>
                  </Link>
                </div>
              </div>
              {/* End Contact Us */}
            </div>
            {/* End Col */}
            <div className="col-md-4">
              <div className="tw-footer-info-box">
                <div className="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li><a href="https://www.facebook.com/OptimusDM.India"><i className="fa fa-facebook" /></a></li>
                    <li><a href="https://twitter.com/realOptimusDM"><i className="fa fa-twitter" /></a></li>
                    <li><a href="https://www.linkedin.com/company/optimus-dm/"><i className="fa fa-linkedin" /></a></li>
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
            <span>Copyright © 2018, All Right Reserved Optimus DM</span>
          </div>
          {/* End Col */}
          <div className="col-md-6">
            <div className="copyright-menu">
              <ul>
                <li>
                  <Link to="/" className="nav-link">
                                About
                  </Link>
                </li>
                <li>
                  <Link to="/career/" className="nav-link">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/blog/" className="nav-link">
                                Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact/" className="nav-link">
                                Contact
                  </Link>
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
      <button type="button" className="btn btn-dark" title="Back to Top">
        <i className="fa fa-angle-up" />
      </button>
    </div>
    {/* End Back to top */}
  </footer>
);

export default Footer;
