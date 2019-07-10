import React, { Component } from 'react';
import Img from 'gatsby-image';
import { Link, StaticQuery, graphql } from 'gatsby';
import cmo from "../static/images/testimonial/vvi.png"

const CaseStudies = () => ( 
  <StaticQuery
  query={graphql`
query {
 
    allFile(sort: {fields: name}, filter: {name: {in: ["vvi", "nainorita", "convergesol"]}}) {
      edges {
        node {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  
}
`}
  render={(data) => {
    const {
      
      allFile: { edges: imagesTestimonial },
      
    } = data;

    return (
        <section className="tw-inro-item">
            <div className="container">
              <div className="row text-center">
                <div className="col section-heading">
                  <h2>
                    Success
                    <span> Stories</span>
                  </h2>
                  <span className="animate-border ml-auto mr-auto tw-mt-20" />
                </div>
                {/* Title Col End */}
              </div>

              <div className="row">
                 
                <div className="col-lg-4 col-md-12">
                  <div className="tw-latest-post">
                    <div className="latest-post-media text-center">
                    <Img fluid={imagesTestimonial[0].node.childImageSharp.fluid} alt="digital marketing" className="img-fluid" />
                    </div>
                    {/* End Latest Post Media */}
                    <div className="post-body">
                      <div className="post-info m-0">
                        {/* End Post Meta */}
                        <h3 className="post-title">
                        CREEDA
                        </h3>
                        <div className="entry-content text-left">
                          <p>
                          CREEDA is a platform where individuals with similar interests in sporting activities can connect and play. Creeda helps you create and organize sports and outdoor activities for you and your friends. You can invite people to join games scheduled near you as well as join the games being played around you. Creeda aims to make this world one big, giant playground.
                            <Link className="tw-readmore" to="/contact/">Click here</Link>
                            {' '}
                            to Book a Consultation Session with us to know how you can accelerate your business through Digital Marketing and Technology.
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
                    <Img fluid={imagesTestimonial[0].node.childImageSharp.fluid} alt="digital marketing" className="img-fluid" />
                    </div>
                    {/* End Latest Post Media */}
                    <div className="post-body">
                      <div className="post-info m-0">
                        {/* End Post Meta */}
                        <h3 className="post-title">
                        Nx DIGITAL
                        </h3>
                        <div className="entry-content text-left">
                          <p>
                          Nx Digital is a consultancy firm based in Australia. Our partner Nx Digital was well acquainted with the culture and the business needs in Australia. We at Optimus DM have the best resources to lead digital marketing and technology business. This established a successful strategic partnership between Nx Digital and Optimus DM. With the assistance of Optimus DM, Nx Digital achieved the best of both worlds, providing superior quality of consultancy to its clients as well as access to the latest technology regarding marketing of their brand to achieve their goals.  

                            <Link className="tw-readmore" to="/contact/">Click here</Link>
                            {' '}
                            to Book a Consultation Session with us to know how you can accelerate your business through Digital Marketing and Technology.
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
                    <Img fluid={imagesTestimonial[1].node.childImageSharp.fluid} alt="digital marketing" className="img-fluid" />

                    </div>
                    {/* End Latest Post Media */}
                    <div className="post-body">
                      <div className="post-info m-0">
                        {/* End Post Meta */}
                        <h3 className="post-title">
                        NAINORITA
                        </h3>
                        <div className="entry-content text-left">
                          <p>
                          Our country has several unique crafts, which are rare and hold immense cultural value. One such product is Pashmina wool from the foothills of the Himalayas. Pashmina is product with quality of par excellence and has an immense demand to consumers globally. Enter Nainorita, a company with a vision to sell pashmina shawls and scarves all over the world. But how did it plan its global reach? The answer was a global digital marketing campaign. Optimus DM analyzed the market, especially the US market and ran a concentrated campaign for Nainorita. This campaign has resulted in generating interest and recognition worldwide.

                            <Link className="tw-readmore" to="/contact/">Click here</Link>
                            {' '}
                            to Book a Consultation Session with us to know how you can accelerate your business through Digital Marketing and Technology.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Col */}
                <div className="col-lg-4 col-md-12">
                  <div className="tw-latest-post">
                    <div className="latest-post-media text-center">
                    <Img fluid={imagesTestimonial[0].node.childImageSharp.fluid} alt="digital marketing" className="img-fluid" />

                    </div>
                    {/* End Latest Post Media */}
                    <div className="post-body">
                      <div className="post-info m-0">
                        {/* End Post Meta */}
                        <h3 className="post-title">
                        FINLEARN ACADEMY
                        </h3>
                        <div className="entry-content text-left">
                          <p>
                          Stock market trading is a double-edged sword. If one is well acquainted with the nuances of trading, one is sure to reap profits. Finlearn offers courses on how to trade in the financial  markets. Finlearn had the right tools and techniques for teaching trading courses, but they required medium and techniques through which they can reach to the broad spectrum of interested individuals. Optimus DM developed a digital marketing strategy for Finlearn which helped the company in becoming a leader in providing training regarding trading in the financial market.

                            <Link className="tw-readmore" to="/contact/">Click here</Link>
                            {' '}
                            to Book a Consultation Session with us to know how you can accelerate your business through Digital Marketing and Technology.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Col */}
                <div className="col-lg-4 col-md-12">
                  <div className="tw-latest-post">
                    <div className="latest-post-media text-center">
                    <Img fluid={imagesTestimonial[2].node.childImageSharp.fluid} alt="digital marketing" className="img-fluid" />

                    </div>
                    {/* End Latest Post Media */}
                    <div className="post-body">
                      <div className="post-info m-0">
                        {/* End Post Meta */}
                        <h3 className="post-title">
                        VVI HARDWARE
                        </h3>
                        <div className="entry-content text-left">
                          <p>
                          VVI Hardware are manufacturers of ultra premium range of glass automation and glass hardware fittings. They approached Optimus DM with the vision of taking the brand VVI to the next level. Optimus DM designed a top notch website for VVI and then formulated social media marketing strategy. This strategy was executed to utmost perfection, aligned with the vision of the client generating a high RoI. Today, VVI looks at Optimus DM as their perfect digital partner.
                            <Link className="tw-readmore" to="/contact/">Click here</Link>
                            {' '}
                            to Book a Consultation Session with us to know how you can accelerate your business through Digital Marketing and Technology.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Col */}
                
              </div>
            </div>
          </section>
        );
      }}
    />
  );
  

export default CaseStudies;
