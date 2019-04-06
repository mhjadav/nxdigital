import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ServiceList = props => (
  <StaticQuery
    query={graphql`
  query images{
    allImageSharp(sort: {fields: fixed___originalName}, filter: { fixed:{originalName: { in: ["cmo.jpeg", "web-development.jpeg", "digital-marketing.jpeg", "cto.jpeg", "app-development.jpeg"]} } }){
      edges{
        node{
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`}
    render={(data) => {
      const { allImageSharp: { edges: images } } = data;
      console.log(images);
      return (
        <React.Fragment>
          <section id="tw-service" className="tw-service" style={{ background: 'rgb(247, 249, 248)', ...props.style }}>
            <div className="container">
              <div className="row text-center">
                <div className="col section-heading wow fadeInDown">
                  <h2>
                            Our
                    {' '}
                    <span>Services</span>
                  </h2>
                  <span className="animate-border ml-auto mr-auto tw-mt-20" />
                </div>
                {/* Title Col End */}
              </div>
              {/* Title Row End */}
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                    <div className="service-icon service-icon-bg-2 d-table">
                      <div className="service-icon-inner d-table-cell">
                        <Img fixed={images[0].node.fixed} alt="search engine" className="img-fluid" />
                      </div>
                    </div>
                    {/* Service icon end */}
                    <div className="service-content">
                      <h3>
                        <Link to="/services/app-development/" className="tw-readmore">
                    App Development
                        </Link>
                      </h3>
                      <p>
                                    Our App Development services give you:
                        <br />
                                    App Architecture And Designing
                        <br />
                                    UI / UX Designing
                        <br />
                                    User journey on the App
                        <br />
                                    iOS and Android Development
                        <br />
                                    Hybrid App Development
                        <br />
                                    Deployment on App Store and PlayStore
                        <Link to="/services/app-dev/" className="tw-readmore">
                          <i className="fa fa-angle-right" />
                        </Link>
                      </p>
                    </div>
                    {/* Service content end */}
                  </div>
                  {/* Service box End */}
                </div>
                {/* Col End */}
                <div className="col-md-4 text-center">
                  <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                    <div className="service-icon service-icon-bg-2 d-table">
                      <div className="service-icon-inner d-table-cell">
                        <Img fixed={images[3].node.fixed} alt="search engine" className="img-fluid" />
                      </div>
                    </div>
                    {/* Service icon end */}
                    <div className="service-content">
                      <h3>
                        <Link to="/services/digital-marketing/" className="tw-readmore">
                  Digital Marketing
                        </Link>
                      </h3>
                      <p>
                                    Our Digital Marketing services that include:
                        <br />
                                    SEO (Search Engine Optimisation) Services
                        <br />
                                    SEM (Search Engines Marketing) Services
                        <br />
                                    SMM (Social Media Marketing) Services
                        <br />
                                    LinkedIN Marketing
                        <br />
                                    Blogging and Content Writing
                        <br />
                                    Graphic Designing
                        <Link to="/services/digital-marketing/" className="tw-readmore">
                          <i className="fa fa-angle-right" />
                        </Link>
                      </p>
                    </div>
                    {/* Service content end */}
                  </div>
                  {/* Service box End */}
                </div>
                {/* Col End */}
                <div className="col-md-4 text-center">
                  <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                    <div className="service-icon service-icon-bg-2 d-table">
                      <div className="service-icon-inner d-table-cell">
                        <Img fixed={images[4].node.fixed} alt="search engine" className="img-fluid" />
                      </div>
                    </div>
                    {/* Service icon end */}
                    <div className="service-content">
                      <h3>
                        <Link to="/services/website-development/" className="tw-readmore">
                  Website Development
                        </Link>
                      </h3>
                      <p>
                                    We design and deliver websites which are:
                        <br />
                                    SEO Friendly
                        <br />
                                    Fast
                        <br />
                                    Secure
                        <br />
                                    Mobile Responsive
                        <br />
                                    Rich in terms of UI / UX
                        <br />
                                    Resonant with your brand elements
                        <Link to="/services/website-development/" className="tw-readmore">
                          <i className="fa fa-angle-right" />
                        </Link>
                      </p>
                    </div>
                    {/* Service content end */}
                  </div>
                  {/* Service box End */}
                </div>
                {/* Col End */}
                <div className="col-md-4 text-center">
                  <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                    <div className="service-icon service-icon-bg-2 d-table">
                      <div className="service-icon-inner d-table-cell">
                        <Img fixed={images[1].node.fixed} alt="search engine" className="img-fluid" />
                      </div>
                    </div>
                    {/* Service icon end */}
                    <div className="service-content">
                      <h3>
                        <Link to="/services/outsourced-cmo/" className="tw-readmore">
                    Outsourced CMO
                        </Link>
                      </h3>
                      <p>
                                    Our Outsourced CMO services comprise:
                        <br />

                                    Digital Marketing Strategy
                        <br />
                                    Brand Building
                        <br />
                                    Customized Campaign Creation
                        <br />
                                    End-to-End Online Marketing
                        <br />
                                    Developing Landing Pages
                        <br />
                                    Website Redesigning
                        <br />
                                    Delivering on your Marketing goals
                        <Link to="/services/outsourced-cmo/" className="tw-readmore">
                          <i className="fa fa-angle-right" />
                        </Link>
                      </p>
                    </div>
                    {/* Service content end */}
                  </div>
                  {/* Service box End */}
                </div>
                {/* Col End */}
                <div className="col-md-4 text-center">
                  <div className="tw-service-box wow zoomIn" data-wow-duration="1s" data-wow-delay=".4s">
                    <div className="service-icon service-icon-bg-2 d-table">
                      <div className="service-icon-inner d-table-cell">
                        <Img fixed={images[2].node.fixed} alt="search engine" className="img-fluid" />
                      </div>
                    </div>
                    {/* Service icon end */}
                    <div className="service-content">
                      <h3>
                        <Link to="/services/outsourced-cto/" className="tw-readmore">
                    Outsourced CTO
                        </Link>
                      </h3>
                      <p>
                                    Our Outsourced CTO Services offer you:
                        <br />
                                    Customized Software Development
                        <br />
                                    Business Analysis
                        <br />
                                    Technology Consultancy
                        <br />
                                    Buy versus Build Analysis
                        <br />
                                    Process Automation through Technology
                        <br />
                                    Developing your own Tech Products
                        <br />
                                    Upgrades on existing Software
                        <Link to="/services/outsourced-cto/" className="tw-readmore">
                          <i className="fa fa-angle-right" />
                        </Link>
                      </p>
                    </div>
                    {/* Service content end */}
                  </div>
                  {/* Service box End */}
                </div>
                {/* Col End */}

              </div>
              {/* Row end */}
              <div className="tw-mb-60" />
            </div>
            {/* container */}
          </section>
          {/* Tw Service End */}
        </React.Fragment>
      );
    }}
  />
);

export default ServiceList;
