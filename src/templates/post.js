import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const stripHtml = (html) => {
  if (typeof window !== 'undefined') {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }
  return html;
};
const PostTemplate = (props) => {
  const { data: { wordpressPost: post } } = props;
  const seoTitle = stripHtml(post.title);
  const seoDescription = stripHtml(post.excerpt);
  return (
    <Layout seoTitle={seoTitle} seoDescription={seoDescription}>
      <div id="banner-area" className="banner-area bg-overlay case-bg-overlay">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-heading">
                <h1
                  className="banner-title"
                  style={{
                    overflow: 'hidden', textOverflow: 'ellipsis', width: '60%', whiteSpace: 'nowrap', textAlign: 'center',
                  }}
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
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
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="post-content post-single">
                <div className="post-media post-image">
                  { post.featured_media && (
                  <Img
                    src={post.featured_media.localFile.childImageSharp.sizes.src}
                    sizes={post.featured_media.localFile.childImageSharp.sizes}
                    className="img-fluid"
                    alt={post.title}
                  />
                  )}
                </div>
                {/* End Post Media */}
                <div className="post-body">
                  {/* End Post Item Date */}
                  <div className="entry-header">
                    <div className="post-meta">
                      <span className="post-meta-date">
                        <i className="fa fa-clock-o" />
                        <span className="day">{post.date}</span>
                      </span>
                      <span className="post-author">
                                Posted By
                        <a href="#author">
                          {post.author.name}
                        </a>
                      </span>
                      <span className="post-cat">
                        <i className="icon icon-folder" />
                        <a href="#categories">
                          {post.categories && post.categories.map(category => ` ${category.name},`)}
                        </a>
                      </span>
                    </div>
                    <Link to={post.slug}>
                      <h1 className="entry-title" dangerouslySetInnerHTML={{ __html: post.title }} />
                    </Link>
                    {/* End Post Meta */}
                  </div>
                  {/* header end */}
                  <div className="entry-content" style={{ '-webkit-box-orient': 'vertical' }} dangerouslySetInnerHTML={{ __html: post.content }} />
                  {/* End Entry Content */}
                  <div className="post-footer clearfix">
                    <div className="post-tags pull-left">
                      <strong>Tags: </strong>
                      {
                        post.tags && post.tags.map(tag => <Link key={tag.id} to={post.slug}>{tag.name}</Link>)
                    }
                    </div>
                    {/* Post tags end */}
                    <div className="share-items pull-right">
                      <ul className="post-social-icons unstyled">
                        <li><strong>Share: </strong></li>
                        <li><a href="#facebook"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#twitter"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#google"><i className="fa fa-google-plus" /></a></li>
                        <li><a href="#linkedin"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="#instagram"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    {/* Share items end */}
                  </div>
                  {/* Post footer end */}
                </div>
                {/* End Post Body */}
              </div>
              {/* Post Content End */}
              <div className="author-box">
                <div className="author-img">
                  <img src={post.author.avatar_urls.wordpress_48} alt={post.author.name} />
                </div>
                {/* Author Img End */}
                <div className="author-info">
                  <h3>{post.author.name}</h3>
                  <p>{post.author.description}</p>
                </div>
                {/* Author Info End */}
              </div>
              {/* Author Box End */}
            </div>
            {/* Content Col end */}
          </div>
          {/* Main row end */}
        </div>
        {/* Container end */}
      </section>
      {/* Main container end */}
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.shape(PropTypes.object),
};
PostTemplate.defaultProps = {
  data: {},
};

export default PostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
        title
        content
        excerpt
        date(formatString: "DD, MMM")
        categories {
            id
            name
        }
        tags {
            id
            name     
        }
        author{
            name
            description
            avatar_urls{
              wordpress_48
            }
        }
        featured_media{
          localFile{
            childImageSharp{
              id
              sizes( maxWidth: 800 ) {
                  ...GatsbyImageSharpSizes
              }
            }
          }
        }
        slug
    }
    site{
        siteMetadata{
          title
          description
        }
      }
  }
`;
