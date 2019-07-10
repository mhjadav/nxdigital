import React from 'react';

const Statastics = () => (

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


)

export default Statastics;