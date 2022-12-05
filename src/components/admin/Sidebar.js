import React from 'react';
import PropTypes from 'prop-types';
import { BsX } from 'react-icons/bs';

import AuthedUserContext from '../../contexts/AuthedUserContext';
import CONFIG from '../../globals/config';

function Sidebar({ onSidebarToggleCLick }) {
  const { onLogout } = React.useContext(AuthedUserContext);

  return (
    <nav className="admin-sidebar d-flex flex-column flex-shrink-0 p-3 bg-white shadow">
      <div className="d-flex justify-content-between">
        <a className="navbar-brand fw-semibold" href="/">
          <img src={CONFIG.LOGO_IMAGE} alt="logo" width="120" />
        </a>
        <button
          className="btn btn-outline-danger d-md-flex d-md-none"
          type="button"
          id="sidebarToggle"
          onClick={onSidebarToggleCLick}
        >
          <BsX className="fs-5 fw-bold" />
        </button>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="/"
            className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link link-dark'}
            aria-current="page"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="/laporan"
            className={window.location.pathname === '/laporan' ? 'nav-link active' : 'nav-link link-dark'}
          >
            Laporan
          </a>
        </li>
        <li>
          <a
            href="/artikel"
            className={window.location.pathname === '/artikel' ? 'nav-link active' : 'nav-link link-dark'}
          >
            Artikel
          </a>
        </li>
      </ul>
      <hr />
      <div className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={CONFIG.DEFAULT_AVATAR} alt="" width="35" height="35" className="border border-primary border-opacity-75 rounded-circle me-1" />
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="/profile">Profile</a></li>
          <li><button className="dropdown-item" type="button" onClick={onLogout}>Logout</button></li>
        </ul>
      </div>
    </nav>
  );
}

Sidebar.propTypes = {
  onSidebarToggleCLick: PropTypes.func.isRequired,
};

export default Sidebar;
