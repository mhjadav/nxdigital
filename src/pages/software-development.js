import React from 'react';
import SoftwareDevelopment from '../components/software-development';
import SwitchTab from '../components/switch-page';
import Layout from '../components/layout';
import './index.css';

const SoftwareDevelopmentPage = () => (
  <Layout>
    <SwitchTab softwareDevelopment="active" />
    <SoftwareDevelopment />
  </Layout>
);

export default SoftwareDevelopmentPage;
