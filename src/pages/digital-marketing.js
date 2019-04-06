import React from 'react';
import DigitalMarketing from '../components/digital-marketing';
import SwitchTab from '../components/switch-page';
import Layout from '../components/layout';
import './index.css';

const DigitalMarketingPage = () => (
  <Layout>
    <SwitchTab digitalMarketing="active" />
    <DigitalMarketing />
  </Layout>
);

export default DigitalMarketingPage;
