import React from 'react';
import PropTypes from 'prop-types';
import { BsX } from 'react-icons/bs';

import logo from '../../../images/logo.png';

function Sidebar({ onSidebarToggleCLick }) {
  return (
    <nav className="admin-sidebar d-flex flex-column flex-shrink-0 p-3 bg-light">
      <div className="d-flex justify-content-between">
        <a className="navbar-brand fw-semibold" href="/">
          <img src={logo} alt="logo" width="120" />
        </a>
        <button
          className="btn btn-outline-danger d-sm-flex d-md-none"
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
      <div className="dropdown">
        <a
          href="/#"
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          {/* <strong>{authedUser.data.name}</strong> */}
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="/#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button className="dropdown-item" type="button" onClick={() => { }}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Sidebar.propTypes = {
  onSidebarToggleCLick: PropTypes.func.isRequired,
};

export default Sidebar;
