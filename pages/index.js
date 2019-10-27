import React from 'react';
import Layout from '../app-data/shared/components/Layout';
import Header from '../app-data/pages/index/components/Header';
import Suppliers from '../app-data/pages/index/components/Suppliers';

const IndexPage = () => (
  <Layout>
    <Header />
    <Suppliers />
  </Layout>
);

export default IndexPage;
