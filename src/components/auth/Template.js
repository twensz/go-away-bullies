import React from 'react';
import PropTypes from 'prop-types';

import authSideHero from '../../images/auth-side-hero.jpg';

function Template({ content }) {
  return (
    <div className="auth row d-flex justify-content-center">
      <div className="auth__side-hero col-6 d-none d-md-block h-100">
        <img src={authSideHero} className="img-fluid" alt="Auth side hero" />
      </div>
      <div className="auth__content col-10 col-md-6 d-flex flex-column justify-content-center px-5">{content}</div>
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
