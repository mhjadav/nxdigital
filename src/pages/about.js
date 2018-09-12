import React from "react";
import Layout from "../components/layout";
import { Link } from 'gatsby';

const About = () => {
    return(
        <Layout>
            <section id="main-container" className="main-container">
                <div className="container">
                    <div className="row">
                    <div className="col text-center">
                        <div className="section-heading">
                        <h2>
                            About <span>Nx Digital</span>
                        </h2>
                        <span className="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40" />
                        <p>
                            We are Nx Digital and we aim to be your ideal digital partners. 
                        </p>
                        <p>
                            Growth and Profitability are at heart of all businesses, and we help businesses achieve that. Nx aims to deliver 2x, 5x, 10x and eventually, Nx growth to businesses through our Technology, Digital Transformation and Strategy expertise.  </p>
                        </div>
                        {/* section Heading End */}
                    </div>
                    {/* Col End */}
                    </div>
                </div>
            </section>
            <section style={{ "background": "rgb(247, 249, 248)" }} id="tw-final-result" className="tw-final-result">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <div className="section-heading">
                    <h2>
                        <span>Vision:</span>
                    </h2>
                    </div>
                    <div className="tw-results-content">
                    <p>
                    To be a leading Digital Transformation and Strategy Company globally with a solid Technology backbone to fuel business growth and increase profitability for our clients.
                    </p>
                    </div>
                </div>
                {/* Col End */}
                <div className="col-md-6">
                    <div className="section-heading">
                    <h2>
                        <span>Mission:</span>
                        
                    </h2>
                    </div>
                    <div className="tw-results-content">
                    <p>
                    To provide the highest quality of Digital Marketing and Technology services to businesses globally
                    </p>
                    </div>
                </div>
                {/* Col End */}
                </div>
                {/* 1st Row End */}
            </div>
            {/* Container End */}
            </section>
            <section id="tw-final-value" className="tw-final-result">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                        <h2>
                            <span>Our Values:</span>
                        </h2>
                        </div>
                        <div className="tw-results-content">
                        <article>
                            <p>
                                We believe in serving the needs of the market through our expertise about the digital world. For us, profitability and growth are by-products of client satisfaction. Our core competence is understanding the way businesses grow and through our digital and technology prowess, we aim to positively impact the ecosystem around us.
                            </p>
                            <p>
                            We value time extremely highly, for both ourselves as well as for our clients and hence, we focus on concise and clear communications will all the stakeholders in our ecosystem.
                            </p>
                            <p>
                                Ethics and empathy are at the core of our being. We respect and treat all human beings as equal and we are an equal opportunity employer.
                            </p>
                            <p>
                                The work that we do is our showcase to the world and that is what fuels our growth. Thus, we maintain extremely strict quality standards, always.
                            </p>
                        </article>
                        </div>
                    </div>
                    {/* Col End */}
                </div>
                {/* 1st Row End */}
            </div>
            {/* Container End */}
            </section>
            <section style={{ "background": "rgb(247, 249, 248)" }} id="tw-final-result" className="tw-final-result">
            <div className="container">
            <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                        <h2>
                            <span>Open Door Policy:</span>
                        </h2>
                        </div>
                        <div className="tw-results-content">
                        <article>
                            <p>
                                We follow an open door policy and we are always open to discuss business ideas with you, help your business grow or even talk about upcoming technology trends with you.
                            </p>
                        </article>
                        </div>
                    </div>
                    {/* Col End */}
                </div>
                {/* 1st Row End */}
            </div>
            {/* Container End */}
            </section>
            <section id="tw-final-value" className="tw-final-result">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                        <h2>
                            <span>Our Team:</span>
                        </h2>
                        </div>
                        <div className="tw-results-content">
                        <article>
                            <p>
                                The members of our company are who make us. We value all our members equally, and ensure that we recruit people who have the correct attitude and aptitude to match our clients' expectations. 
                            </p>
                            <p>
                                We are a flat organisational structure and do not believe in traditional hierarchies. We are young, enthusiastic and hungry for success and client satisfaction.
                            </p>
                        </article>
                        </div>
                    </div>
                    {/* Col End */}
                </div>
                {/* 1st Row End */}
            </div>
            {/* Container End */}
            </section>
            
        </Layout>

    )
}

export default About;