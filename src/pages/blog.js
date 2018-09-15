import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Blog = (props) => {
    const data = props.data;
    console.log(data);
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

            <section id="tw-blog" className="tw-blog">
                <div className="container">
                    {/* Row End */}
                    <div className="row fadeInUp" data-wow-duration="0.2s">
                        {data.allWordpressPost.edges.map(({ node }) => (
                            <div key={node.slug} className="col-lg-4 col-md-12">
                                    <div className="tw-latest-post">
                                    <div className="latest-post-media text-center">
                                      <Img src={node.featured_media.localFile.childImageSharp.sizes.src}
                                      sizes={ node.featured_media.localFile.childImageSharp.sizes }
                                       alt="blog_image_one" className="img-fluid" />
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
                                            Posted by <a href="#">{node.author.name}</a>
                                            </span>
                                        </div>
                                        {/* End Post Meta */}
                                        <Link to={`/blog/${node.slug}`}><h3 style={{ overflow: "hidden",textOverflow: 'ellipsis',width: '95%', 'whiteSpace': 'nowrap' }} dangerouslySetInnerHTML={{ __html:node.title}} className="post-title" /></Link>
                                        <div className="entry-content" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                        <Link to={`/blog/${node.slug}`} class="tw-readmore">Read More
                                            <i class="fa fa-angle-right"></i>
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
                    </div>
                    {/* End Row */}
                </div>
                {/* Container End */}
            </section>
            {/* End tw blog */}

        </Layout>

    )
}
export default Blog;

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressPost(sort: { fields: [date] }) {
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
                sizes( maxWidth: 1000 ) {
                    ...GatsbyImageSharpSizes
                }
              }
            }
          }
          slug
        }
      }
    }
  }
`