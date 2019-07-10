import React from 'react';
import Img from 'gatsby-image';
import { Link, StaticQuery, graphql } from 'gatsby';
import WhyOptimus from './why-optimus'
import LatestBlog from './latest-blog'
import CaseStudies from './case-studies'
import Statastics from './statastics'

const DigitalMarketing = () => (
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
    allWordpressPost(sort: { fields: [date] }, limit: 3) {
        edges {
          node {
              month: date(formatString: "MMM")
              day: date(formatString: "DD")
            title
            excerpt
            author{
              name
            }
            featured_media{
              localFile{
                childImageSharp{
                  id
                  fluid( maxWidth: 350, maxHeight: 250 ) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            slug
          }
        }
      }
  }
`}
    render={(data) => {
      const {
        allImageSharp: { edges: images },
        allFile: { edges: imagesTestimonial },
        allWordpressPost: { edges: blogList },
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
                    Your ideal digital partner
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
                        <i className="icon icon-mobile2" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>Digital Marketing</h3>
                    <div className="text-left">
                      <input type="checkbox" className="read-more-state" id="post-1" />
                      <ul className="read-more-wrap">
                        <li>
                        Digital marketing refers to the process of using the digital medium to market a product. It is a highly targeted and an effective way of reaching your audience.
                        </li>
                        <li className="read-more-target">
                        With the advent of the internet and online media, marketing has taken innovative and bold steps.
                        </li>
                        <li className="read-more-target">
                        Digital marketing is one innovative method to reach your target audience.
                        </li>
                        <li className="read-more-target">
                        Digital Marketing comprises SEO, SEM, Content Marketing, data-driven marketing, e-commerce marketing, SMM, email marketing, display marketing etc.
                        </li>
                        <li className="read-more-target">
                        It is an effective and sure way of reaching your customers quickly and efficiently.
                        </li>
                      </ul>
                      <label htmlFor="post-1" className="read-more-trigger" />
                      {/*   <p>
                      Digital Marketing lets you define your target audience very precisely.
                      </p>
                      <p>
                    You can run your search engine or social media campaigns for a longer period of time at compelling prices...
                      </p>
                      <p>
                        <Link to="/services/digital-marketing/" className="tw-readmore">
                  Read More
                          <i className="fa fa-angle-right" />
                        </Link>
                      </p> */}
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
                    <h3>Search Engine Optimisation (SEO)</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-2" />
                      <ul className="read-more-wrap">
                        <li>
                        SEO refers to the process providing visibility of a business to consumers trying to search products or services using Google, Bing, Siri, Alexa etc.
                        </li>
                        <li className="read-more-target">
                        SEO involves the process of modifying, adding content, coding and increasing visibility by the use of specific and targeted keywords.
                        </li>
                        <li className="read-more-target">
                        SEO aims to optimize your content in such a way that it appears at the top of the results page in a search engine.
                        </li>
                        <li className="read-more-target">
                        User-friendly interface with relevant keywords will help increase traffic to your website and bring in more prospective clients.
                        </li>
                        <li className="read-more-target">
                        It is highly targeted, dynamic, low cost and offers local as well as global visibility.
                        </li>
                      </ul>
                      <label htmlFor="post-2" className="read-more-trigger" />
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-newspaper" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>Search Engine Marketing (SEM)</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-3" />
                      <ul className="read-more-wrap">
                        <li>
                        SEM refers to the process where business pay to search engines to show results about their company.
                        </li>
                       
                        <li className="read-more-target">
                        Advertisers bid on certain keywords that when typed will show their content, products or services.
                        </li>
                        <li className="read-more-target">
                        SEM network landscapes mainly comprise Google, Bing and Yahoo.
                        </li>
                        <li className="read-more-target">
                        The ROI on the SEM campaign can be clearly measured.
                        </li>
                        <li className="read-more-target">
                        A combination of SEM and SEO can be used to build a successful marketing campaign.
                        </li>

                        <li className="read-more-target">
                        SEM strategy is about increasing your website traffic, grow your customer base in the shorter term.
                        </li>
                        <li className="read-more-target">
                        As people spend more time on search engines there is a huge scope for your brand to get noticed which in turn can translate into revenue.
                        </li>
                      </ul>
                      <label htmlFor="post-3" className="read-more-trigger" />
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}

              </div>
              {/* End Row 2 */}

              <div className="tw-mt-80" />
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-mobile2" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3> Content Marketing</h3>
                    <div className="text-left">
                      <input type="checkbox" className="read-more-state" id="post-4" />
                      <ul className="read-more-wrap">
                        <li>
                        Content marketing provides information to customers to enhance their interest in the product.
                        </li>
                        <li className="read-more-target">
                        Information is given in the form of news, videos, infographics, blogs, podcasts etc.
                        </li>
                        <li className="read-more-target">
                        This form of marketing mainly works in the digital space.
                        </li>
                        <li className="read-more-target">
                        This may not always involve direct sales but builds trust and rapport with the customer.
                        </li>
                        <li className="read-more-target">
                        Brand loyalty, brand awareness, generating leads, direct engagement with the customers, an online presence are major goals of content marketing.
                        </li>
                        <li className="read-more-target">
                        Content marketing when combined with other digital marketing  techniques, formulate a great marketing strategy.
                        </li>
                      </ul>
                      <label htmlFor="post-4" className="read-more-trigger" />
                      {/*   <p>
                      Digital Marketing lets you define your target audience very precisely.
                      </p>
                      <p>
                    You can run your search engine or social media campaigns for a longer period of time at compelling prices...
                      </p>
                      <p>
                        <Link to="/services/digital-marketing/" className="tw-readmore">
                  Read More
                          <i className="fa fa-angle-right" />
                        </Link>
                      </p> */}
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
                    <h3>Email Marketing</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-5" />
                      <ul className="read-more-wrap">
                        <li>
                        Email marketing involves sending messages to people through email for commercial purposes
                    </li>
                        <li className="read-more-target">
                        It is mainly used to send advertisements, for soliciting sales, to build loyalty, brand awareness and for building brand personality
                        </li>
                        <li className="read-more-target">
                        Mails can be sent by purchasing data or by using existing customer database
                        </li>
                        <li className="read-more-target">
                        Mails can be personalized to suit your business needs
                        </li>
                        <li className="read-more-target">
                        It is a cost-effective and measurable form of advertising
                        </li>
                        <li className="read-more-target">
                        Emails can be designed according to the gender and the geographical location of the recipient. Customers can be updated about new offers and information that will increase their interest.
                        </li>
                      </ul>
                      <label htmlFor="post-5" className="read-more-trigger" />
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-newspaper" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>Influencer Marketing</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-6" />
                      <ul className="read-more-wrap">
                        <li>
                        Influencer marketing focuses on using individuals (often celebrities) with a lot of followers, to communicate directly to those followers.
                        </li>
                       
                        <li className="read-more-target">
                        Marketing strategy is formulated based solely on that celebrity.
                        </li>
                        <li className="read-more-target">
                        Influencers have a following on social media which in turn can be used to market products and services.
                        </li>
                        <li className="read-more-target">
                        Influencers advertise the products themselves or act as a third party.
                        </li>
                        <li className="read-more-target">
                        Influencer marketing is not about quick payments but building your brand, credibility and putting your idea to a specific client base.
                        </li>
                        <li className="read-more-target">
                        The R’s of Influence marketing will be Reach, Relevance and Resonance.
                        </li>
                        <li className="read-more-target">
                        Influencer marketing makes you implement out of the box ideas to market your products or services
                        </li>
                      </ul>
                      <label htmlFor="post-6" className="read-more-trigger" />
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}

              </div>
              {/* End Row 2 */}


              <div className="tw-mt-80" />
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-mobile2" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>Social Media Marketing</h3>
                    <div className="text-left">
                      <input type="checkbox" className="read-more-state" id="post-7" />
                      <ul className="read-more-wrap">
                        <li>
                        As the name suggests, Social Media Marketing uses social media platforms to run marketing campaigns.
                        </li>
                        <li className="read-more-target">
                        Businesses can address a wide range of stakeholders through social media platforms like Facebook, Instagram etc.
                        </li>
                        <li className="read-more-target">
                        A successful social media strategy can be developed by using a specific, measurable, attainable, relevant and time-bound approach.
                        </li>
                        <li className="read-more-target">
                        Business can project an image they want the customers to associate with their brand very efficiently.
                        </li>
                        <li className="read-more-target">
                        LinkedIn, Facebook, Instagram, Twitter etc. can be used to place target specific messages to cater to specific types of audiences.  
                        </li>
                        <li className="read-more-target">
                        Use of social media marketing enables direct engagement with potential customers.
                        </li>
                        <li className="read-more-target">
                        Use of various analytical tools can also help gather real-world data. This, in turn, helps us enhance campaigns and increase ROI.
                        </li>
                      </ul>
                      <label htmlFor="post-7" className="read-more-trigger" />
                   
                    </div>
                  </div>
               
                </div>
               
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-mutual-fund" />
                      </div>
                     
                    </div>
                 
                    <h3>Viral Marketing</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-8" />
                      <ul className="read-more-wrap">
                        <li>
                        Viral marketing generates interest in a product or a brand through extensive sharing of the content by the viewers.
                        </li>
                        <li className="read-more-target">
                        Viral marketing works more on social media platforms like Youtube, Facebook, Instagram and Twitter.
                        </li>
                        <li className="read-more-target">
                        Viral marketing may be in the form of video clips, interactive flash games, advergames, eBooks, memes, text messages, email messages or web pages.
                        </li>
                        <li className="read-more-target">
                        Key factors that drive viral marketing are triggers like emotion, mass appeal, practical value and stories.
                        </li>
                       
                      </ul>
                      <label htmlFor="post-8" className="read-more-trigger" />
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
                {/* Col End */}
                <div className="col-lg-4 col-md-12">
                  <div className="features-box">
                    <div className="features-icon d-table">
                      <div className="features-icon-inner d-table-cell">
                        <i className="icon icon-newspaper" />
                      </div>
                      {/* End Features icon inner */}
                    </div>
                    {/* End Features Icon */}
                    <h3>Affiliate Marketing</h3>
                    <div className="text-left">
                    <input type="checkbox" className="read-more-state" id="post-9" />
                      <ul className="read-more-wrap">
                        <li>
                        Affiliate marketing refers to the process where a third party sells products or services and gets a commission for it.
                        </li>
                       
                        <li className="read-more-target">
                        Affiliate marketing is totally based on performance.
                        </li>
                        <li className="read-more-target">
                        The company rewards affiliates for their marketing efforts when they bring in customers. 
                        </li>
                        <li className="read-more-target">
                        Common affiliate marketing channels include Influencers, Bloggers, Paid search focused microsites and large media websites.
                        </li>
                        <li className="read-more-target">
                        Affiliate marketing can be used to develop a rapport with the customer, by making it personal, by starting to review specific products and mainly choosing a campaign that has a maximum impact

                        </li>
                      </ul>
                      <label htmlFor="post-9" className="read-more-trigger" />
                    </div>
                  </div>
                  {/* End Single Features */}
                </div>
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
        

        </React.Fragment>
      );
    }}
  />
);

export default DigitalMarketing;
