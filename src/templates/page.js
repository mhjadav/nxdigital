import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const PageTemplate = (props) => {
  const { data: { wordpressPage: currentPage } } = props;
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
      <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.shape(PropTypes.object).isRequired,
};

export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`;
