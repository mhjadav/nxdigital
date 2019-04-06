import React from 'react';
import SwitchTab from '../components/switch-page';
import DigitalMarketing from '../components/digital-marketing';
import Layout from '../components/layout';
import './index.css';

const Index = () => (
  <Layout>
    <SwitchTab digitalMarketing="active" />
    <DigitalMarketing />
  </Layout>
);

export default Index;
