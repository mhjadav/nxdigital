import React, { Component  } from "react";
import Layout from '../../components/layout';
import ServicesList from '../../components/services-list';


import serviceImage1 from "../../static/images/services/single_service_img1.png";
import serviceImage2 from "../../static/images/services/single_service_img2.png";
import serviceImage3 from "../../static/images/services/single_service_img3.png";

const WebsiteDevelopment = () => {
    return(
      <Layout>
         <section id="main-container" className="main-container">
                <div className="container">
                <div className="row">
                    <div className="col text-center">
                    <div className="section-heading">
                        <h2>
                        <small>we are best</small>
                        App <span>Dev</span>
                        </h2>
                        <span className="animate-border tw-mt-20 tw-mb-40 mr-auto ml-auto" />
                    </div>
                    </div>
                    {/* Col End */}
                </div>
                {/* Row End */}
                <div className="row">
                    <div className="col-md-6 align-self-md-center">
                        <img src={serviceImage1} alt="Website Development" className="img-fluid analytics-img" />
                    </div>
                    {/* Col End */}
                    <div className="col-md-5 ml-auto align-self-center">
                    <div className="tw-web-analytics-content">
                        <i className="icon icon-question-circle" />
                        <h3>Why should you be Interested?</h3>
                        <span className="bottom-border tw-mt-20 tw-mb-30" />
                        <p>
                        Digital Marketing is for everyone. You decide your budget upfront and then design campaigns accordingly. 
                        It let's you define your target audience very precisely. You can run your campaigns for a longer period of time at lesser costs.
                        </p>
                    </div>
                    {/* Analytics Content End */}
                    </div>
                    {/* Col End */}
                </div>
                {/* 1st Content Row End */}
                <div className="row">
                    <div className="col-md-5 align-self-center">
                    <div className="tw-web-analytics-content">
                        <i className="icon icon-coins-1" />
                        <h3>Improve website’s performance</h3>
                        <span className="bottom-border tw-mt-20 tw-mb-30" />
                        <p>
                            Digital Marketing is for everyone. You decide your budget upfront and then design campaigns accordingly. 
                            It let's you define your target audience very precisely. You can run your campaigns for a longer period of time at lesser costs.
                        </p>
                    </div>
                    {/* Analytics Content End */}
                    </div>
                    {/* Col End */}
                    <div className="col-md-6 ml-auto align-self-md-center">
                    <img src={serviceImage2} alt="website development" className="img-fluid analytics-img" />
                    </div>
                    {/* Col End */}
                </div>
                {/* 2nd Content Row End */}
                <div className="row">
                    {/* Col End */}
                    <div className="col-md-6 align-self-md-center">
                    <img src={serviceImage3} alt="website development" className="img-fluid analytics-img" />
                    </div>
                    {/* Col End */}
                    <div className="col-md-5 ml-auto align-self-center">
                    <div className="tw-web-analytics-content">
                        <i className="icon icon-target" />
                        <h3>Improve website’s performance</h3>
                        <span className="bottom-border tw-mt-20 tw-mb-30" />
                        <p>
                            Digital Marketing is for everyone. You decide your budget upfront and then design campaigns accordingly. 
                            It let's you define your target audience very precisely. You can run your campaigns for a longer period of time at lesser costs.
                        </p>
                    </div>
                    {/* Analytics Content End */}
                    </div>
                </div>
                {/* 3rd Content Row End */}
                </div>
                {/* Container End */}
            </section>
            <ServicesList />
      </Layout>
    )
}

export default WebsiteDevelopment;
