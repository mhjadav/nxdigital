import React from 'react';
import Img from 'gatsby-image';
import { Link, StaticQuery, graphql } from 'gatsby';
import WhyOptimus from './why-optimus'
import CaseStudies from './case-studies'
import LatestBlog from './latest-blog'
import Statastics from './statastics'
import ContactFormHome from './contact-form-home'

const SoftwareDevelopment = () => (
  <StaticQuery
    query={graphql`
  query {
    allImageSharp(sort: {fields: fixed___originalName}, filter: {fixed: {originalName: {in: ["cmo.jpeg", "digital-marketing.jpeg", "cto.jpeg"]}}}) {
        edges {
          node {
            fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
            }
          }
        }
      }
  }
`}
    render={(data) => {
      const {
        allImageSharp: { edges: images },
      } = data;

      return (
        <React.Fragment>
          <section id="tw-features" className="tw-features-area">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h2 className="column-title text-md-right text-sm-center">
          Optimus DM
                    <br />
                    {' '}
            Your ideal technology partner
                  </h2>
                </div>
                {/* Col End */}
                <div className="col-md-7 ml-md-auto">
                  <p className="features-text">
                  We at Optimus DM provide end to end digital marketing and technology services to our clients worldwide. We aim to deliver consistent exponential growth to businesses through our Technology, Digital Transformation and Strategy Expertise.

                  </p>
                </div>
                {/* Col End */}
              </div>
              {/* End Row 1 */}
              <div className="tw-mt-60" />
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-map-marker2" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>Website Development</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-1" />
                      <ul className="read-more-wrap">
                        <li>
                        Websites have become the first point of contact between your business and its prospects as well as customers. It represents your brand and build brand value.
                        </li>
                        <li className="read-more-target">
                        A good website is attractive, secure and loads very fast.
                        </li>
                        <li className="read-more-target">
                        SEO (Search Engine Optimization) plays a vital role in the development of any type of website.
                        </li>
                        <li className="read-more-target">
                        UI and UX designing tools, when used efficiently, help in improving the user’s experience while surfing your website. 
                        </li>
                        <li className="read-more-target">
                        Elegant colors, clear fonts and the overall look and feel along with a compliance to brand elements is what brings out the best in your website.
                        </li>
                      </ul>
                      <label htmlFor="post-1" className="read-more-trigger" />
                      <span className="link-get-started"><a href="#tw-features-contact">Get Started <i class="fa fa-angle-right"></i></a> </span>
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-pie-chart2" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>App Development</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-2" />
                      <ul className="read-more-wrap">
                        <li>
                        In addition to websites, apps are preferred for offering your clientele and target audiences convenience to know more about you or transact with your business.
                        </li>
                        <li className="read-more-target">
                        App development is classified into Android app development, iOS app development, Hybrid apps and Progressive web apps.
                        </li>
                        <li className="read-more-target">
                        A user-friendly app possesses ease of navigation for users and delivers rich experience through UI/UX designing.
                        </li>
                        <li className="read-more-target">
                        The app should be light in weight, so it occupies less storage space in the user's phone as well as it should load faster for better on hand experience.
                        </li>
                        <li className="read-more-target">
                        The app should provide right kind of engaging content to its users for sustaining in the market.
                        </li>
                      </ul>
                      <label htmlFor="post-2" className="read-more-trigger" />
                      <span className="link-get-started"><a href="#tw-features-contact">Get Started <i class="fa fa-angle-right"></i></a> </span>
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-mutual-fund" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>Android App Development</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-3" />
                      <ul className="read-more-wrap">
                        <li>
                        Android app development is the process by which new applications are created for devices running on the Android operating system.
                        </li>
                        <li className="read-more-target">
                        Advantage of Android app is, it requires low investment and provides high ROI.
                        </li>
                        <li className="read-more-target">
                        It is also easy to integrate and one can modify it according to its business needs.
                        </li>
                        <li className="read-more-target">
                        It even provides secured environment for development of best apps in smooth and hassle-free way.
                        </li>
                      </ul>
                      <label htmlFor="post-3" className="read-more-trigger" />
                      <span className="link-get-started"><a href="#tw-features-contact">Get Started <i class="fa fa-angle-right"></i></a> </span>
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}

              </div>

              <div className="tw-mt-80" />
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-map-marker2" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>iOS App Development</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-4" />
                      <ul className="read-more-wrap">
                        <li>
                        An application developed for use on Apple’s powered iPhone devices is called an iOS App.
                        </li>
                        <li className="read-more-target">
                        iOS app development provides enhanced security for enterprises keen on protecting their data from breaching. It gives total protection against malware and viruses.
                        </li>
                        <li className="read-more-target">
                        It provides enhanced user experience with its high quality and user-friendly interface.
                        </li>
                        <li className="read-more-target">
                        It possesses safe environment for online transactions through the apps on the platform.
                        </li>
                      
                      </ul>
                      <label htmlFor="post-4" className="read-more-trigger" />
                      <span className="link-get-started"><a href="#tw-features-contact">Get Started <i class="fa fa-angle-right"></i></a> </span>
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-pie-chart2" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>Hybrid Apps</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-5" />
                      <ul className="read-more-wrap">
                        <li>
                        Hybrid apps are developed to function simultaneously on both android and iOS platforms.
                        </li>
                        <li className="read-more-target">
                        Hybrid apps provide the advantage of ease of development but offer limited customisation..
                        </li>
                        <li className="read-more-target">
                        The code for Hybrid app once developed can function on both Android and iOS platforms saving time and cost for businesses.
                        </li>
                       
                      </ul>
                      <label htmlFor="post-5" className="read-more-trigger" />
                      <span className="link-get-started"><a href="#tw-features-contact">Get Started <i class="fa fa-angle-right"></i></a> </span>
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-mutual-fund" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>Progressive Web Apps</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-6" />
                      <ul className="read-more-wrap">
                        <li>
                        Progressive Web Apps (PWA) are web apps which provide app-like experience to the users.
                        </li>
                        <li className="read-more-target">
                        PWA are reliable, fast and engaging as they load instantly and provide experience like original app on the device.
                        </li>
                        <li className="read-more-target">
                        PWA can be downloaded in zero install time without going through the usual download-install procedure of play store or app store.
                        </li>
                        <li className="read-more-target">
                        PWA provide advantage of working even in offline mode allowing users to work even when there is limited internet connection.
                        </li>
                      </ul>
                      <label htmlFor="post-6" className="read-more-trigger" />
                      <span className="link-get-started"><a href="#tw-features-contact">Get Started <i class="fa fa-angle-right"></i></a> </span>
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}

              </div>
              {/* its 11 july code start */}
              <div className="tw-mt-80" />
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-map-marker2" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>Enterprise Resource Planning (ERP)</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-7" />
                      <ul className="read-more-wrap">
                        <li>
                        ERP is a software used to manage large as well as small scale businesses.
                        </li>
                        <li className="read-more-target">
                        It is typically, a combination of different operations of a business such as sales, marketing, product planning, product development, human resources and financials.
                        </li>
                        <li className="read-more-target">
                        ERP helps in storing all the data at one place and secures it through built-in protections.
                        </li>
                        <li className="read-more-target">
                        ERP systems are well known for its flexible interface, modular design and central database.
                        </li>
                      
                      </ul>
                      <label htmlFor="post-7" className="read-more-trigger" />
                      <span className="link-get-started"><a href="#tw-features-contact">Get Started <i class="fa fa-angle-right"></i></a> </span>
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-pie-chart2" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>Customer Relationship Manager (CRM)</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-8" />
                      <ul className="read-more-wrap">
                        <li>
                        The relationships we cultivate with clients help us in achieving growth in our business.
                        </li>
                        <li className="read-more-target">
                         CRM is a software used to manage that relationship.
                        </li>
                        <li className="read-more-target">
                        CRM assists us in knowing our clients in better way through identifying, documenting and recording each and every interaction with them.
                        </li>
                        <li className="read-more-target">
                        CRM provides improved customer service through quick information related to the problems, suggestions and feedback of the clients.
                        </li>
                       
                      </ul>
                      <label htmlFor="post-8" className="read-more-trigger" />
                      <span className="link-get-started"><a href="#tw-features-contact">Get Started <i class="fa fa-angle-right"></i></a> </span>
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-mutual-fund" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>Customized Software</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-9" />
                      <ul className="read-more-wrap">
                        <li>
                        Customized software is designed and developed keeping your company’s requirements and expectations in mind.
                        </li>
                        <li className="read-more-target">
                        Getting customized software for your company is a long-term investment as well as it saves the expense of buying licensed software.
                        </li>
                        <li className="read-more-target">
                        It is also more secure than other off-the-shelf software as it is custom made and holds minimal possibility of getting hacked.
                        </li>
                        <li className="read-more-target">
                        Custom software holds the advantage of evolving as the business evolves. It is tailored accordingly to sustain large amount of data fed into the same.
                        </li>
                      </ul>
                      <label htmlFor="post-9" className="read-more-trigger" />
                      <span className="link-get-started"><a href="#tw-features-contact">Get Started <i class="fa fa-angle-right"></i></a> </span>
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}

              </div>
              
              <div className="tw-mt-80" />
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-map-marker2" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>E-commerce Portal</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-10" />
                      <ul className="read-more-wrap">
                        <li>
                        In today’s era of E-commerce, creating an E-commerce platform for establishing your company’s presence online has been a trend and it’s here to stay.
                        </li>
                        <li className="read-more-target">
                        E-commerce platform is a combination of front-end interface which is visible to users and a back-end engine which is operated by the company.
                        </li>
                        <li className="read-more-target">
                        We provide complete service regarding setting up of an E-commerce platform beginning from understanding the client’s requirements to delivering the E-commerce platform which is flexible, robust, attractive and fulfills all the requirements of the client.
                        </li>
                      </ul>
                      <label htmlFor="post-10" className="read-more-trigger" />
                      <span className="link-get-started"><a href="#tw-features-contact">Get Started <i class="fa fa-angle-right"></i></a> </span>
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-pie-chart2" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>Technology Consultation</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-11" />
                      <ul className="read-more-wrap">
                        <li>
                        The primary role of software for any business is to automate the processes. This reduces human efforts and increases efficiency of the company.
                        </li>
                        <li className="read-more-target">
                        As technology requirements vary from company to company, we provide complete guidance and provide vital inputs regarding development of a software which can meet the company's requirements.
                        </li>
                        <li className="read-more-target">
                        Various factors like security, costs, advantages, disadvantages, licensing fees, downtime tolerance etc. are considered before developing customized software for any company.
                        </li>
                        <li className="read-more-target">
                        Two important software for the company are its Enterprise Resource Planning software (ERP) and Customer Relationship Management software (CRM), which helps in smooth functioning of the company.
                        </li>
                       
                      </ul>
                      <label htmlFor="post-11" className="read-more-trigger" />
                      <span className="link-get-started"><a href="#tw-features-contact">Get Started <i class="fa fa-angle-right"></i></a> </span>
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}
                
                {/* Col End */}

              </div>
              {/* End Row 2 */}
            </div>
            {/* End Container */}
          </section>

          <CaseStudies />
          

          <Statastics />
         <WhyOptimus />
         
         <LatestBlog />
        <ContactFormHome />

        

        </React.Fragment>
      );
    }}
  />
);

export default SoftwareDevelopment;
