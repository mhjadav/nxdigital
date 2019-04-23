import React from 'react';
import { Link } from 'gatsby';

const SwitchTab = ({ digitalMarketing, softwareDevelopment }) => (
  <section id="tw-pricing-one" className="tw-pricing">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="pricing-tab">
            <ul className="nav">
              <li className="nav-item">
                <Link data-toggle="tab" to="/digital-marketing/" className={digitalMarketing}>Digital Marketing</Link>
              </li>
              <li className="nav-item">
                <Link data-toggle="tab" to="/technology/" className={softwareDevelopment}>Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SwitchTab;
