import React from "react";
import Helmet from 'react-helmet'

//Css files
import '../static/plugins/bootstrap/bootstrap.min.css';
import '../static/plugins/magnific-popup/magnific-popup.css';
import '../static/plugins/slick/slick.css';
import '../static/plugins/slick/slick-theme.css';
import '../static/plugins/themify-icons/themify-icons.css';
import '../static/plugins/animate/animate.css';
import '../static/plugins/aos/aos.css';
import '../static/css/style.css'
import  "./index.css";

import userAvatar from  "../static/images/mahipat.jpg";
import favicon32  from   "../static/images/mahipat32.jpg";
import favicon16  from   "../static/images/mahipat16.jpg";
import logo  from   "../static/images/logo.png";
import banner  from   "../static/images/banner-2.jpg";
import chartImage from "../static/images/chart.png";
import servicesImage from "../static/images/service-1.jpg";
import videoBgImage from "../static/images/about-bg.jpg";

export default () => (
  <React.Fragment>
    <header className="header">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="list-inline text-lg-right text-center">
                <li className="list-inline-item">
                  <a href="mailto:info@companyname.com">info@companyname.com</a>
                </li>
                <li className="list-inline-item">
                  <a href="callto:1234565523">Call Us Now:&nbsp; &nbsp;
                    <span> 123 456 7890</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="index.html">
              <img src={logo} alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown active">
                  <a className="nav-link" href="#" role="button">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Marketing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-primary btn-sm" href="#">get a quote</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <section className="hero-area">
      <div className="hero-slider">
        <div className="hero-slider-item" style={{backgroundImage: `url(${banner})`}} data-icon="ti-comments" data-text="Consultation">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-content">
                  <h4 data-duration-in=".5" data-animation-in="fadeInLeft" data-delay-in=".1">We are here to</h4>
                  <h1 data-duration-in=".5" data-animation-in="fadeInLeft" data-delay-in=".5">Lorem ipsum dolor amet</h1>
                  <p data-duration-in=".5" data-animation-in="fadeInLeft" data-delay-in=".9">Lorem ipsum dolor amet Lorem ipsum dolor amet 
                  <br />
                  Lorem ipsum dolor amet Lorem ipsum dolor amet
                  </p>
                  <a data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in="1.3" href="#" className="btn btn-outline">more details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* about */}
      <section className="about section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-50">
              <h5 className="section-title-small">Welcome To Nx Digital</h5>
              <h2 className="section-title section-title-border-half">Lorem ipsum dolor amet
                <br />  &amp; Investment</h2>
              <p className="mb-4">Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet 
              Lorem ipsum dolor amet Lorem ipsum dolor amet </p>
              <a href="#" className="btn btn-primary">Explore More</a>
            </div>
            <div className="col-lg-6 align-self-center">
              <img className="img-fluid w-100" src={chartImage} alt="chart" />
            </div>
          </div>
        </div>
      </section>
      {/* /about */}
      <section className="cta" style={{backgroundImage: 'url(images/background/cta.jpg)'}}>
        <div className="cta-overlay">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <h3>Lorem ipsum dolor amet, Lorem ipsum dolor amet
                Lorem ipsum
                </h3>
              </div>
              <div className="col-lg-6 text-lg-right align-self-center">
                <a href="#" className="btn btn-light">GET AN QUOTE</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service section pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h5 className="section-title-small">Best Service</h5>
              <h2 className="section-title section-title-border">Service We Provide</h2>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <div className="service-item-image border-radius-top">
                  <img className="img-fluid w-100" src={servicesImage} alt="service-image" />
                </div>
                <h4>Lorem ipsum dolor amet</h4>
                <p>Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet</p>
                <a href="service-single.html" className="btn btn-secondary">Read More</a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <div className="service-item-image border-radius-top">
                  <img className="img-fluid w-100" src={servicesImage} alt="service-image" />
                </div>
                <h4>Lorem ipsum dolor amet</h4>
                <p>Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet</p>
                <a href="service-single.html" className="btn btn-secondary">Read More</a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item">
                <div className="service-item-image border-radius-top">
                  <img className="img-fluid w-100" src={servicesImage} alt="service-image" />
                </div>
                <h4>Lorem ipsum dolor amet</h4>
                <p>Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet</p>
                <a href="service-single.html" className="btn btn-secondary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about overlay" style={{backgroundImage: `url(${videoBgImage})`}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 mx-0 align-self-center">
              <div className="about-video">
                {/* about-video */}
                <a className="popup-youtube play-icon" href="../../../www.youtube.com/watche80b.html?v=6ZfuNTqbHE8">
                  <i className="ti-control-play" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 px-0">
              <div className="about-content about-content-2">
                <h3 className="section-title section-title-border-half">Who We Are?</h3>
                <p>Who We Are Who We AreWho We AreWho We AreWho We AreWho We AreWho We AreWho We AreWho We AreWho We Are Who We AreWho We AreWho We AreWho We AreWho We Are.
                </p>
                {/* about item */}
                <div className="about-item">
                  <ul>
                    <li>
                      <i className="ti-arrow-circle-right" />Business Services</li>
                    <li>
                      <i className="ti-arrow-circle-right" />Audit  &amp; Assurance</li>
                    <li>
                      <i className="ti-arrow-circle-right" />IT Control Solutions</li>
                  </ul>
                  <ul>
                    <li>
                      <i className="ti-arrow-circle-right" />Business Services</li>
                    <li>
                      <i className="ti-arrow-circle-right" />Audit  &amp; Assurance</li>
                    <li>
                      <i className="ti-arrow-circle-right" />IT Control Solutions</li>
                  </ul>
                </div>
                <a href="#" className="btn btn-primary">Explore More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="blog section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h5 className="section-title-small">Latest News</h5>
              <h2 className="section-title section-title-border">Latest Article</h2>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="blog-item">
                <div className="blog-image">
                  <img className="img-fluid w-100" src={servicesImage} alt="news-thumbnail" />
                </div>
                <div className="blog-content-2">
                  <h6>Dec 20, 2017</h6>
                  <a href="blog-single.html" className="h4">Lorem ipsum dolor amet consectur.</a>
                  <p>Lorem ipsum dolor amet consectur, Lorem ipsum dolor amet consectur, Lorem ipsum dolor amet consectur Lorem ipsum dolor amet consectur</p>
                </div>
                <ul className="list-inline">
                  <li className="list-inline-item"><a href="#"><i className="ti-user" />Admin</a></li>
                  <li className="list-inline-item"><a href="#"><i className="ti-comments-smiley" />30 Comments</a></li>
                  <li className="list-inline-item"><a href="#"><i className="ti-share" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="blog-item">
                <div className="blog-image">
                  <img className="img-fluid w-100" src={servicesImage} alt="news-thumbnail" />
                </div>
                <div className="blog-content-2">
                  <h6>Dec 20, 2017</h6>
                  <a href="blog-single.html" className="h4">Lorem ipsum dolor amet consectur.</a>
                  <p>Lorem ipsum dolor amet consectur, Lorem ipsum dolor amet consectur, Lorem ipsum dolor amet consectur Lorem ipsum dolor amet consectur</p>
                </div>
                <ul className="list-inline">
                  <li className="list-inline-item"><a href="#"><i className="ti-user" />Admin</a></li>
                  <li className="list-inline-item"><a href="#"><i className="ti-comments-smiley" />30 Comments</a></li>
                  <li className="list-inline-item"><a href="#"><i className="ti-share" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="blog-item">
                <div className="blog-image">
                  <img className="img-fluid w-100" src={servicesImage} alt="news-thumbnail" />
                </div>
                <div className="blog-content-2">
                  <h6>Dec 20, 2017</h6>
                  <a href="blog-single.html" className="h4">Lorem ipsum dolor amet consectur.</a>
                  <p>Lorem ipsum dolor amet consectur, Lorem ipsum dolor amet consectur, Lorem ipsum dolor amet consectur Lorem ipsum dolor amet consectur</p>
                </div>
                <ul className="list-inline">
                  <li className="list-inline-item"><a href="#"><i className="ti-user" />Admin</a></li>
                  <li className="list-inline-item"><a href="#"><i className="ti-comments-smiley" />30 Comments</a></li>
                  <li className="list-inline-item"><a href="#"><i className="ti-share" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-logo client-logo-2">
        <div className="container">
          <div className="client-logo-slider">
           
          </div>
        </div>
      </section>

      <div className="footer section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="footer-content">
                <img src={logo} alt="logo" />
                <p>Lorem ipsum dolor amet consectetur adipisicing, Lorem ipsum dolor amet consectetur adipisicing, Lorem ipsum dolor amet consectetur adipisicing,Lorem ipsum dolor amet consectetur adipisicing
                </p>
                <div className="social-link">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="ti-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="ti-twitter-alt" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="ti-vimeo-alt" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="ti-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-link">
                <h4>Services</h4>
                <ul>
                  <li>
                    <a href="#">Company History</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-link">
                <h4>Quick Link</h4>
                <ul>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 offset-lg-1">
              <div className="subscription">
                <h4>Subscribe Us</h4>
                <p>Lorem ipsum dolor sit amet, consect etur adipisicing. elit sed do eiusmod. </p>
                <form action="#">
                  <input type="text" className="form-control" name="subcribe" id="Subscribe" placeholder="Enter Your Email" />
                  <button className="btn-subscribe" type="submit" value="send">
                    <i className="ti-arrow-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <footer className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5">
              <p>
                <span>Nx Digital</span> © 2017 All Right Reserved</p>
            </div>
            <div className="col-lg-6 col-md-7">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#">Legal</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Sitemap</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button className="back-to-top">
            <i className="ti-angle-up" />
          </button>
      </footer>
 </React.Fragment>
)