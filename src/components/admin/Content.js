import React from 'react';
import PropTypes from 'prop-types';
import { BsList } from 'react-icons/bs';

function Content({ onSidebarToggleCLick, content }) {
  return (
    <div className="admin-content flex-grow-1 d-flex flex-column bg-light">
      <div className="topbar navbar navbar-expand-lg bg-white">
        <div className="container px-4">
          <button
            className="btn btn-outline-primary d-flex"
            type="button"
            id="sidebarToggle"
            onClick={onSidebarToggleCLick}
          >
            <BsList className="fs-5 fw-bold" />
          </button>
        </div>
      </div>
      <div className="container p-4 flex-grow-1">{content}</div>
    </div>
  );
}

Content.propTypes = {
  onSidebarToggleCLick: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
Content.defaultProps = {
  content: {},
};

export default Content;
