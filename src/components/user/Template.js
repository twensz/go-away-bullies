import React from 'react';
import PropTypes from 'prop-types';

import AppBar from './AppBar';
import Footer from './Footer';

function Template({ content }) {
  return (
    <div className="app-container">
      <AppBar />
      <div className="content bg-light">
        {content}
      </div>
      <Footer />
    </div>
  );
}

Template.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
Template.defaultProps = {
  content: {},
};

export default Template;
