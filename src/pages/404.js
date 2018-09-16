import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import NotFoundImage from '../static/images/404.png';

const PageNotFound = () => (
  <Layout>
    <section id="main-container" className="main-container">
      <div className="container">
        <div className="row">
          <div className="col-6 text-center align-self-center">
            <div className="error-page text-center">
              <div className="error-code">
                <strong>404</strong>
              </div>
              <div className="error-message">
                <h3>Oops... Page Not Found!</h3>
              </div>
              <div className="error-body">
                                Try using the button below to go to main page of the site
                {' '}
                <br />
                <Link to="/" className="btn btn-primary solid blank">
                  <i className="fa fa-arrow-circle-left">&nbsp;</i>
                  {' '}
Go to Home
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-right">
            <img className="img-fluid" src={NotFoundImage} alt="" />
          </div>
        </div>
        {/* Main row end */}
      </div>
    </section>
  </Layout>

);

export default PageNotFound;
