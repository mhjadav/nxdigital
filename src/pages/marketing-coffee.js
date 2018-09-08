import React, { Component  } from "react";
import Helmet from 'react-helmet'
import Layout from "../components/layout";
import Carousel from "../components/carousel-2";

import  "./index.css";

import blogImage1 from "../static/images/news/post1.jpg";
import blogImage2 from "../static/images/news/post2.jpg"
import blogImage3 from "../static/images/news/post3.jpg"

class MarketingAndCofee extends Component {
    render() {
        return(
        <Layout>    
            <Carousel />       
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
        </Layout>
        )
  }
}

export default MarketingAndCofee;
