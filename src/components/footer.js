import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer id="tw-footer" className="tw-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <div className="row">
            <div className="col-md-5">
              <div className="contact-us col-md-10">
                <div className="contact-icon">
                  <a target="_blank" rel="noopener referrer" href="https://goo.gl/maps/6fPen7Xpgq82">
                    <i className="icon icon-map2" />
                  </a>
                </div>
                {/* End contact Icon */}
                <div className="contact-info">
                  <h3>Optimus DM</h3>
                  <span>11th floor, Earth Arise,</span>
                  <span> Beside YMCA, Sarkhej - Gandhinagar Hwy,</span>
                  <span> Ahmedabad, Gujarat 380015</span>
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
                    <li><a href="https://www.linkedin.com/company/optimus-dm/"><i className="fa fa-linkedin" /></a></li>

                    {/* <li><a href="#twitter"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#google"><i className="fa fa-google-plus" /></a></li>
                     <li><a href="#instagram"><i className="fa fa-instagram" /></a></li> */}
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
    <div className="copyright mt-0">
      <div className="container">
        <div className="row">
          <div className="col-md-3" style={{ padding: '.5rem 1rem' }}>
            <span>
Designed & Developed By
              {' '}
              <a href="https://mojaave.com">Mahipat</a>
            </span>
          </div>
          <div className="col-md-4 text-center" style={{ padding: '.5rem 1rem' }}>
            <span>Copyright © 2019 - Optimus DM</span>
          </div>
          {/* End Col */}
          <div className="col-md-5">
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
