import React from 'react';
import PropTypes from 'prop-types';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

import '@scss/styles.scss';

const Layout = ({ children }) => (
  <>
    <Header />
    <main role="main">{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  /** Components to render in layout **/
  children: PropTypes.node.isRequired,
};

export default Layout;
