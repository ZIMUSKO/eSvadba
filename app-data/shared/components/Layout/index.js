import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Styles, { Reset } from '../../styles/global.style';

const Layout = ({ children }) => (
  <>
    <Reset />
    <Styles />
    <Navigation />
    { children }
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
