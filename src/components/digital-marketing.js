import React from 'react';
import Img from 'gatsby-image';
import { Link, StaticQuery, graphql } from 'gatsby';

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
            We offer end to end digital marketing and technology services to our clients world wide. Through a complimentary consultation session understand:
                    <br />
                    {' '}
                    <ul>
                      <li>How # Digital Marketing propels businesses</li>
                      <li>How # Websites can increase brand value</li>
                    </ul>
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
                      <p>
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
                      </p>
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
                    <h3>SEO Management</h3>
                    <div className="text-left">
                      <p>
                        SEO (Search Engine Optimisation), link-building, blogging, updating the website with relevant content and several other activities are required for growing your reach organically...
                      </p>
                      <p>
                        <Link to="/services/digital-marketing/" className="tw-readmore">
                  Read More
                          <i className="fa fa-angle-right" />
                        </Link>
                      </p>
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
                    <h3>Outsourced CMO</h3>
                    <div className="text-left">
                      <p>
                    Outsourced CMO is your Chief Marketing Officer with a team of highly talented digital marketers, designers and tech guys required for execution of digital marketing strategies...
                      </p>
                      <p>
                        <Link to="/services/digital-marketing/" className="tw-readmore">
                  Read More
                          <i className="fa fa-angle-right" />
                        </Link>
                      </p>
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
                      <Img fluid={imagesTestimonial[2].node.childImageSharp.fluid} alt="digital marketing" className="img-fluid" />
                    </div>
                    {/* End Latest Post Media */}
                    <div className="post-body">
                      <div className="post-info m-0">
                        {/* End Post Meta */}
                        <h3 className="post-title">
                        Optimus DM and VVI : Strategy done right!
                        </h3>
                        <div className="entry-content text-left">
                          <p>
                          Mr. Abhimanyu approached us with a vision of taking brand VVI to the next level. They are manufacturers of ultra premium range of glass automation and glass hardware fittings.
                          After designing a top-notch #Website, #SocialMedia presence and other #DigitalElements, we have now moved onto the next phase of our #project.
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
                          Nainorita SuccessStory
                        </h3>
                        <div className="entry-content text-left">
                          <p>
                            The first step towards serving the foreign market began with our first sale in the US Market earlier today. Thank you for your love USA.
                            Nainorita now exports premium stoles and scarves to USA. This Christmas, you can let your loved ones get cozy in the soft caressing fabric handcrafted by the artisans of Nainorita. From the foothills of the exotic Himalayas, comes authentic Pashmina, now in the US.
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
                        International Marketing Case Study
                        </h3>
                        <div className="entry-content text-left">
                          <p>
How to connect businesses to their prospects worldwide:
                          ConvergeSol has been a long term client for us and is focussed on providing high quality customised #software solutions and #technology consultancy to #FinancialServices companies #globally.
                          Our #DigitalMarketing campaign for them is divided into multiple parts
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

          <section id="tw-facts" className="tw-facts tw-facts-item">
            <div className="container">
              <div className="row">
                <div className="col-md-3 text-center">
                  <div className="tw-facts-box">
                    <div className="facts-img">
                      <i className="icon icon-pie-chart2" />
                    </div>
                    {/* End Fatcs image */}
                    <div className="facts-content">
                      <h4 className="facts-title">Active clients</h4>
                    </div>
                    {/* Facts Content End */}
                  </div>
                  {/* Facts Box End */}
                </div>
                {/* Col End */}
                <div className="col-md-3 text-center">
                  <div className="tw-facts-box">
                    <div className="facts-img">
                      <i className="icon icon-pie-chart" />
                    </div>
                    {/* End Facts Image */}
                    <div className="facts-content">
                      <h4 className="facts-title">Projects Done</h4>
                    </div>
                    {/* End Facts Content */}
                  </div>
                  {/* End Facts Box */}
                </div>
                {/* Col End */}
                <div className="col-md-3 text-center">
                  <div className="tw-facts-box">
                    <div className="facts-img">
                      <i className="icon icon-map-marker" />
                    </div>
                    {/* End Facts Image */}
                    <div className="facts-content">
                      <h4 className="facts-title">Success Rate</h4>
                    </div>
                    {/* End Facts Content */}
                  </div>
                  {/* End Facts Box */}
                </div>
                {/* Col End */}
                <div className="col-md-3 text-center">
                  <div className="tw-facts-box">
                    <div className="facts-img">
                      <i className="icon icon-mutual-fund" />
                    </div>
                    {/* End Facts Image */}
                    <div className="facts-content">
                      <h4 className="facts-title">Awards</h4>
                    </div>
                    {/* End Facts Content */}
                  </div>
                  {/* End Facts Box */}
                </div>
                {/* Col End */}
              </div>
              {/* Row End */}
            </div>
            {/* Container End */}
          </section>
          <section id="tw-service" className="tw-service">
            <div className="container">
              <div className="row text-center">
                <div className="col section-heading">
                  <h2>
                    Why
                    <span> Optimus DM?</span>
                  </h2>
                  <span className="animate-border ml-auto mr-auto tw-mt-20" />
                </div>
                {/* Title Col End */}
              </div>
              {/* Title Row End */}
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="tw-service-box">
                    <div className="service-content">
                      <h3>SEO Optimization</h3>
                      <p>One of the top 100 advertising and marketing agencies knows what it means to be</p>
                    </div>
                    {/* Service Content end */}
                  </div>
                  {/* Service box end */}
                </div>
                {/* Col End */}
                <div className="col-md-4 text-center">
                  <div className="tw-service-box">
                    <div className="service-content">
                      <h3>Content Marketing</h3>
                      <p>One of the top 100 advertising and marketing agencies knows what it means to be</p>
                    </div>
                    {/* Service content end */}
                  </div>
                  {/* Service box End */}
                </div>
                {/* Col End */}
                <div className="col-md-4 text-center">
                  <div className="tw-service-box">
                    <div className="service-content">
                      <h3>Data Analysis</h3>
                      <p>
One of the top 100 advertising and marketing agencies knows what it means to be
                      </p>
                    </div>
                    {/* Service content end */}
                  </div>
                  {/* Service box End */}
                </div>
                {/* Col end */}
              </div>
              {/* Row end */}
              <div className="tw-mb-105" />
            </div>
            {/* container */}
          </section>


          <section id="tw-blog" className="tw-blog">
            <div className="container">
              <div className="row text-center">
                <div className="col section-heading">
                  <h2>
                    <small>our blog</small>
          Latest
                    {' '}
                    <span>Blog</span>
                  </h2>
                  <span className="animate-border ml-auto mr-auto tw-mt-20" />
                </div>
                {/* Col end */}
              </div>
              {/* Row End */}
              <div className="row">
                {blogList.map(({ node }) => (
                  <div key={node.slug} className="col-lg-4 col-md-12">
                    <div className="tw-latest-post">
                      <div className="latest-post-media text-center">
                        { node.featured_media && (
                        <Img
                          fluid={node.featured_media.localFile.childImageSharp.fluid}
                          alt={node.title}
                          className="img-fluid"
                        />
                        )}

                      </div>
                      {/* End Latest Post Media */}
                      <div className="post-body">
                        <div className="post-item-date">
                          <div className="post-date">
                            <span className="date">{node.day}</span>
                            <span className="month">{node.month}</span>
                          </div>
                        </div>
                        {/* End Post Item Date */}
                        <div className="post-info">
                          <div className="post-meta">
                            <span className="post-author">
                     Posted by
                              {' '}
                              <Link to={`/blog/${node.slug}`}>{node.author.name}</Link>
                            </span>
                          </div>
                          {/* End Post Meta */}
                          <Link to={`/blog/${node.slug}`}>
                            <h3
                              style={{
                                overflow: 'hidden', textOverflow: 'ellipsis', width: '95%', whiteSpace: 'nowrap',
                              }}
                              dangerouslySetInnerHTML={{ __html: node.title }}
                              className="post-title"
                            />
                          </Link>
                          <div className="entry-content" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                          <Link to={`/blog/${node.slug}`} className="tw-readmore">
Read More
                            <i className="fa fa-angle-right" />
                          </Link>
                          {/* End Entry Content */}
                        </div>
                        {/* End Post info */}
                      </div>
                      {/* End Post Body */}
                    </div>
                    {/* End Tw Latest Post */}
                  </div>
                ))}
                <div className="col-md-12 text-center"><Link to="/blog" className="btn btn-primary btn-lg tw-mt-80">view all</Link></div>
              </div>
              {/* End Row */}
            </div>
            {/* Container End */}
          </section>

        </React.Fragment>
      );
    }}
  />
);

export default DigitalMarketing;
