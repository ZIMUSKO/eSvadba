import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Styles, { Reset } from '../../styles/global.style';

const Layout = ({ children }) => (
  <>
    <Reset />
    <Styles />
    <Navigation />
    { children }
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
