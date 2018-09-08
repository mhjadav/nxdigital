import React, { Component  } from "react";
import Helmet from 'react-helmet'
import Header from "../components/header";
import Carousel from '../components/carousel';
import Testimonial from '../components/testimonial';
import Footer from '../components/footer';
import "../utils/importFiles";
import  "./index.css";

import laptopImage from "../static/images/about/about_image.png";

class Index extends Component {
 
  render() {
    return(
      <React.Fragment>
        <Header />
        <Carousel />
        <section id="tw-intro" className="tw-intro-area">
        <div className="container">
            <div className="row">
            <div className="col-lg-6 col-md-12 text-lg-right text-md-center wow fadeInLeft" data-wow-duration="1s">
                <img src={laptopImage} alt="" className="img-fluid" />
            </div>
            {/* End Col */}
            <div className="col-lg-5 ml-auto col-md-12 wow fadeInRight" data-wow-duration="1s">
                <h2 className="column-title">A better website means better user experience</h2>
                <span className="animate-border tw-mb-40" />
                <p>
                We take offline businesses online. We assist those businesses which already have an online presence to reach out to greater heights via. innovative marketing campaigns on various online platforms like LinkedIn, Google, Facebook, Instagram, Twitter and so on. 
                </p>
                <p>
                Our style is unique and elegant. We will never suggests an "in your face" style of hammering to promote businesses. Our marketing campaigns are inspired by the core values of the clients' businesses. Our designs are based on logic and clarity of thought. Our quality is highest and that is what drives us. We never settle for anything less than the best and that is why our work will always be impeccable.
                </p>
                {/* End Intro list */}
                <a href="#" className="btn btn-primary">learn more</a>
                {/* Default Round Btn */}
                <a href="#" className="btn btn-secondary">contact us</a>
            </div>
            {/* End Col */}
            </div>
            {/* End Row */}
        </div>
        {/* End Container */}
        </section>
        <Testimonial />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Index;
