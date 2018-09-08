import React, { Component  } from "react";
import Helmet from 'react-helmet'
import Carousel from '../components/carousel';
import Testimonial from '../components/testimonial';
import Layout from '../components/layout';
import  "./index.css";

import laptopImage from "../static/images/about/about_image.png";

class Success extends Component {
 
  render() {
    return(
        <section id="tw-intro" className="tw-intro-area">
        <div className="container">
            <div className="row">
            {/* End Col */}
            <div className="col-lg-5 ml-auto col-md-12 wow fadeInRight" data-wow-duration="1s">
                <h2 className="column-title">Success</h2>
            </div>
            {/* End Col */}
            </div>
            {/* End Row */}
        </div>
        {/* End Container */}
        </section>
    )
  }
}

export default Success;