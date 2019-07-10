import React from 'react';
import Img from 'gatsby-image';
import { Link, StaticQuery, graphql } from 'gatsby';
import WhyOptimus from './why-optimus'

const LatestBlog = () => (
  <StaticQuery
    query={graphql`
  query {
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
       
        allWordpressPost: { edges: blogList },
      } = data;

      return (
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
                        {node.featured_media && (
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
      );
    }}
  />
);

export default LatestBlog;
