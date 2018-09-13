import React from "react";
import Layout from "../components/layout";
import { Link } from 'gatsby';

const About = () => {
    return(
        <Layout>
            
        <div id="banner-area" className="banner-area bg-overlay case-bg-overlay">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="banner-heading">
                            <h1 className="banner-title">
                                Blog
                            </h1>
                        </div>
                    </div>
                    {/* Col end */}
                </div>
                {/* Row end */}
            </div>
            {/* Container end */}
        </div>
        {/* Banner area end */}

            <section id="main-container" className="main-container">
                <div className="container">
                    
                </div>
            </section>
            <section id="tw-about" className="tw-final-result" style={{ paddingTop: "0px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 features-box" style={{textAlign: "left"}}>
                        <h2>
                            <span>How do businesses become brands?</span>
                        </h2>
                        <p>
                            Brands are born out of trustworthy products backed by brilliant communication with their audiences. 
                            <br/>
                            <br/>
                            Good products are obviously at the base of all successful businesses. But, if you do not have a great marketing strategy for taking those products to your audiences, you will never realise the true potential of your business. 
                            <br/>
                            <br/>
                            One can never begin to know the losses businesses incur due to the lack of attention given to marketing.
                            Marketing is all about delivering the correct content to the right kind of audiences at the right moments. Now, how do you create the "correct content" for the "right kind of audiences" in the right moments? After every campaign that we, at Nx Digital, design for our audiences, we ask ourselves: Will this campaign touch the heart of the audiences? We accept the campaign only if the answer to that question is YES.
                        </p>
                    </div>  
                    <div className="col-lg-12 features-box" style={{textAlign: "left"}}>
                        <h2>
                            <span>How do you make a Sale?</span>
                        </h2>
                        <p>
                            You actually believe a Sale is made when a prospect has paid you for your service or product. You are wrong.
                            <br/>
                            <br/>
                            First of all, you bought his attention. For this, you found out a touchpoint. A touchpoint is your first point of hashtag#contact with that prospect. It could be through a magazine he reads or via. LinkedIn Ad. If your ad was smooth, you have earned his attention.
                            <br/>
                            <br/>
                            Now, you have connected to him at superficial level. Second thing you need to buy is his trust. If he sees you as a trustworthy entity, you have his trust. Client testimonials, WordOfMouth, SharePrices, BrandValue and several other factors determine this.
                            <br/>
                            <br/>
                            If you have won his trust, he will actually go for a transaction. Here, he will meet hashtag#influencers, like a ShopKeeper or a Bank whose CreditCard he is using. So, only if you have bought the trust of these influencers, the transaction will happen smoothly and that prospect will be your Customer. 
                            <br/>
                            <br/>
                            The sale is merely a physical acknowledgment. You first had to buy attention, then you had to buy the influencers' as well as his trust and then he bought your offering.
                            <br/>
                            <br/>
                            And this, ladies and gentlemen, is how you have actually Sold your stuff!
                        </p>
                    </div>  
                </div>
                {/* 1st Row End */}
            </div>
            {/* Container End */}
            </section>
        </Layout>

    )
}

export default About;