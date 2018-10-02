import React from 'react';
import Layout from '../components/layout';

import NotFoundImage from '../static/images/check-seo/announce.png';

const Success = () => {
  const handleGoBackClick = (event) => {
    window.history.back();
    event.preventDefault();
  };
  return (
    <Layout>
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center align-self-center">
              <div className="error-page text-center">
                <div className="error-message">
                  <h3>Thank you for getting in touch!</h3>
                </div>
                <div className="error-body">
                We appreciate you contacting us. One of our colleagues will get back to you shortly.
                  <br />
                    Have a great day!
                  <br />
                  <button type="button" onClick={handleGoBackClick} href="#" className="btn btn-primary solid blank">
                    <i className="fa fa-arrow-circle-left">&nbsp;</i>
                    Go Back
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center align-self-center mt-4">
              <img className="img-fluid" src={NotFoundImage} alt="" />
            </div>
          </div>
          {/* Main row end */}
        </div>
      </section>
    </Layout>

  );
};

export default Success;
