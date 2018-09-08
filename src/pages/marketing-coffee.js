import React, { Component  } from "react";
import Helmet from 'react-helmet'
import Header from "../components/header";
import Carousel from '../components/carousel';
import Testimonial from '../components/testimonial';
import Footer from '../components/footer';
import "../utils/importFiles";
import  "./index.css";

import blogImage1 from "../static/images/news/post1.jpg";
import blogImage2 from "../static/images/news/post2.jpg"
import blogImage3 from "../static/images/news/post3.jpg"

class MarketingAndCofee extends Component {
    componentDidMount() {
        if(window.$){
            window.$(".tw-hero-slider").owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                nav: true,
                dots: false,
                autoplayTimeout: 8000,
                autoplayHoverPause: true,
                mouseDrag: false,
                smartSpeed: 1100,
                navText: ['<i class="icon icon-left-arrow2">', '<i class="icon icon-right-arrow2">'],
            });
        }
    }
    render() {
        return(
        <React.Fragment>
            <Header />
            {/* Start hero slider/ Owl Carousel Slider */}
            <div className="tw-hero-slider owl-carousel slider-dark">
                <div className="slider-2 tw-slider-bg-dark">
                    <div className="slider-wrapper d-table">
                    <div className="slider-inner d-table-cell">
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                            <div className="slider-content slider-content-dark">
                                <h1>NX
                                <span> Digital</span>
                                </h1>
                                <p>Marketing Made
                                    <span> Beautiful</span>
                                </p>
                                <p>We take offline businesses online. We assist those businesses which already have an online presence to reach out to greater heights via. innovative marketing campaigns on various online platforms like LinkedIn, Google, Facebook, Instagram, Twitter and so on. </p>
                            </div>
                            </div>
                            {/* Col end */}
                            <div className="col-md-5 mr-auto ml-auto align-self-center">
                                <div className="col-xs-12">
                                    <div className="contact-us-form service-contact-form">
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
                                                <input className="form-control form-email" name="email" placeholder="Email" type="email" required />
                                            </div>
                                            </div>
                                            {/* Col End */}
                                            <div className="col-lg-12">
                                            <div className="form-group">
                                                <input className="form-control form-subject" placeholder="Subject" name="subject" id="subject" type="text" />
                                            </div>
                                            </div>
                                            {/* Col End */}
                                            <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control form-message required-field" id="message" placeholder="Message" rows={1} defaultValue={""} />
                                            </div>
                                            </div>
                                            {/* Col 12 end */}
                                        </div>
                                        {/* Form row end */}
                                        <div className="text-right">
                                            <button className="btn btn-primary tw-mt-30" type="submit">Let's Have A Coffee</button>
                                        </div>
                                        </form>
                                        {/* Form end */}
                                    </div>
                                    {/* Contact us form end */}
                                </div>

                            </div>
                            {/* col end */}
                        </div>
                        {/* Row End */}
                        </div>
                        {/* Container End */}
                    </div>
                    {/* Slider Inner End */}
                    </div>
                    {/* Slider Wrapper End */}
                </div>
                {/* Slider 2 end */}
            </div>
            {/* End Carousel */}
            <section id="tw-blog" className="tw-blog">
            <div className="container">
                <div className="row text-center">
                    <div className="col section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
                        <h2>
                        <small>our blog</small>
                        Latest
                        <span>Blog</span>
                        </h2>
                    </div>
                    {/* Col end */}
                </div>
                {/* Row End */}
                <div className="row wow fadeInUp mb-5" data-wow-duration="1s" data-wow-delay=".2s">
                <div className="col-lg-4 col-md-12">
                    <div className="tw-latest-post">
                    <div className="latest-post-media text-center">
                        <img src={blogImage1} alt="blog_image_one" className="img-fluid" />
                    </div>
                    {/* End Latest Post Media */}
                    <div className="post-body">
                        <div className="post-item-date">
                        <div className="post-date">
                            <span className="date">29</span>
                            <span className="month">May</span>
                        </div>
                        </div>
                        {/* End Post Item Date */}
                        <div className="post-info">
                        <div className="post-meta">
                            <span className="post-author">
                            Posted by
                            <a href="#">Admin</a>
                            </span>
                        </div>
                        {/* End Post Meta */}
                        <h3 className="post-title">
                            <a href="#">SEO trend to look for the best in 2018</a>
                        </h3>
                        <div className="entry-content">
                            <p>
                            One of the top 100 advertising of a marketing agencies know that how to grow your busines
                            </p>
                        </div>
                        {/* End Entry Content */}
                        </div>
                        {/* End Post info */}
                    </div>
                    {/* End Post Body */}
                    </div>
                    {/* End Tw Latest Post */}
                </div>
                {/* End Col */}
                <div className="col-lg-4 col-md-12">
                    <div className="tw-latest-post">
                    <div className="latest-post-media text-center">
                        <img src={blogImage2} alt="blog_image_one" className="img-fluid" />
                    </div>
                    {/* End Latest Post Media */}
                    <div className="post-body">
                        <div className="post-item-date">
                        <div className="post-date">
                            <span className="date">29</span>
                            <span className="month">May</span>
                        </div>
                        </div>
                        {/* End Post Item Date */}
                        <div className="post-info">
                        <div className="post-meta">
                            <span className="post-author">
                            Posted by
                            <a href="#">Admin</a>
                            </span>
                        </div>
                        {/* End Post Meta */}
                        <h3 className="post-title">
                            <a href="#">SEO trend to look for the best in 2018</a>
                        </h3>
                        <div className="entry-content">
                            <p>
                            One of the top 100 advertising of a marketing agencies know that how to grow your busines
                            </p>
                        </div>
                        {/* End Entry Content */}
                        </div>
                        {/* End Post info */}
                    </div>
                    {/* End Post Body */}
                    </div>
                    {/* End Tw Latest Post */}
                </div>
                {/* End Col */}
                <div className="col-lg-4 col-md-12">
                    <div className="tw-latest-post">
                    <div className="latest-post-media text-center">
                        <img src={blogImage3} alt="blog_image_one" className="img-fluid" />
                    </div>
                    {/* End Latest Post Media */}
                    <div className="post-body">
                        <div className="post-item-date">
                        <div className="post-date">
                            <span className="date">29</span>
                            <span className="month">May</span>
                        </div>
                        </div>
                        {/* End Post Item Date */}
                        <div className="post-info">
                        <div className="post-meta">
                            <span className="post-author">
                            Posted by
                            <a href="#">Admin</a>
                            </span>
                        </div>
                        {/* End Post Meta */}
                        <h3 className="post-title">
                            <a href="#">SEO trend to look for the best in 2018</a>
                        </h3>
                        <div className="entry-content">
                            <p>
                            One of the top 100 advertising of a marketing agencies know that how to grow your busines
                            </p>
                        </div>
                        {/* End Entry Content */}
                        </div>
                        {/* End Post info */}
                    </div>
                    {/* End Post Body */}
                    </div>
                    {/* End Tw Latest Post */}
                </div>
                {/* End Col */}
                </div>
                {/* End Row */}
                <div className="row wow fadeInUp mb-5" data-wow-duration="1s" data-wow-delay=".2s">
                <div className="col-lg-4 col-md-12">
                    <div className="tw-latest-post">
                    <div className="latest-post-media text-center">
                        <img src={blogImage1} alt="blog_image_one" className="img-fluid" />
                    </div>
                    {/* End Latest Post Media */}
                    <div className="post-body">
                        <div className="post-item-date">
                        <div className="post-date">
                            <span className="date">29</span>
                            <span className="month">May</span>
                        </div>
                        </div>
                        {/* End Post Item Date */}
                        <div className="post-info">
                        <div className="post-meta">
                            <span className="post-author">
                            Posted by
                            <a href="#">Admin</a>
                            </span>
                        </div>
                        {/* End Post Meta */}
                        <h3 className="post-title">
                            <a href="#">SEO trend to look for the best in 2018</a>
                        </h3>
                        <div className="entry-content">
                            <p>
                            One of the top 100 advertising of a marketing agencies know that how to grow your busines
                            </p>
                        </div>
                        {/* End Entry Content */}
                        </div>
                        {/* End Post info */}
                    </div>
                    {/* End Post Body */}
                    </div>
                    {/* End Tw Latest Post */}
                </div>
                {/* End Col */}
                <div className="col-lg-4 col-md-12">
                    <div className="tw-latest-post">
                    <div className="latest-post-media text-center">
                        <img src={blogImage2} alt="blog_image_one" className="img-fluid" />
                    </div>
                    {/* End Latest Post Media */}
                    <div className="post-body">
                        <div className="post-item-date">
                        <div className="post-date">
                            <span className="date">29</span>
                            <span className="month">May</span>
                        </div>
                        </div>
                        {/* End Post Item Date */}
                        <div className="post-info">
                        <div className="post-meta">
                            <span className="post-author">
                            Posted by
                            <a href="#">Admin</a>
                            </span>
                        </div>
                        {/* End Post Meta */}
                        <h3 className="post-title">
                            <a href="#">SEO trend to look for the best in 2018</a>
                        </h3>
                        <div className="entry-content">
                            <p>
                            One of the top 100 advertising of a marketing agencies know that how to grow your busines
                            </p>
                        </div>
                        {/* End Entry Content */}
                        </div>
                        {/* End Post info */}
                    </div>
                    {/* End Post Body */}
                    </div>
                    {/* End Tw Latest Post */}
                </div>
                {/* End Col */}
                <div className="col-lg-4 col-md-12">
                    <div className="tw-latest-post">
                    <div className="latest-post-media text-center">
                        <img src={blogImage3} alt="blog_image_one" className="img-fluid" />
                    </div>
                    {/* End Latest Post Media */}
                    <div className="post-body">
                        <div className="post-item-date">
                        <div className="post-date">
                            <span className="date">29</span>
                            <span className="month">May</span>
                        </div>
                        </div>
                        {/* End Post Item Date */}
                        <div className="post-info">
                        <div className="post-meta">
                            <span className="post-author">
                            Posted by
                            <a href="#">Admin</a>
                            </span>
                        </div>
                        {/* End Post Meta */}
                        <h3 className="post-title">
                            <a href="#">SEO trend to look for the best in 2018</a>
                        </h3>
                        <div className="entry-content">
                            <p>
                            One of the top 100 advertising of a marketing agencies know that how to grow your busines
                            </p>
                        </div>
                        {/* End Entry Content */}
                        </div>
                        {/* End Post info */}
                    </div>
                    {/* End Post Body */}
                    </div>
                    {/* End Tw Latest Post */}
                </div>
                {/* End Col */}
                </div>
                {/* End Row */}
                
            </div>
            {/* Container End */}
            </section>
            {/* End tw blog */}
            <Footer />
        </React.Fragment>
        )
  }
}

export default MarketingAndCofee;
