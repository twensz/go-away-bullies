/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import Content from './Content';

function Template({ content }) {
  function onSidebarToggleCLick() {
    document.querySelector('.admin-sidebar').classList.toggle('toggle');
  }

  return (
    <div className="admin">
      <Sidebar onSidebarToggleCLick={onSidebarToggleCLick} />
      <Content onSidebarToggleCLick={onSidebarToggleCLick} content={content} />
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
