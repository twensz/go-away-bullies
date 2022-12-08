import React from 'react';

import AuthedUserContext from '../../contexts/AuthedUserContext';
import CONFIG from '../../globals/config';

function AppBar() {
  const { authedUser, onLogout } = React.useContext(AuthedUserContext);

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={CONFIG.LOGO_IMAGE} alt="logo" width="120" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center ms-auto">
            <li className="nav-item me-4">
              <a className="nav-link" href="/">Beranda</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="/artikel">Artikel</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="/laporan">Laporan</a>
            </li>
            {!authedUser
              ? (
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
              )
              : (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={CONFIG.DEFAULT_AVATAR} alt="" width="35" height="35" className="border border-primary border-opacity-75 rounded-circle me-1" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/profil">Profile</a></li>
                    <li><a className="dropdown-item" href={`/profil/${authedUser.id}`}>Laporan Saya</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item" type="button" onClick={onLogout}>Logout</button></li>
                  </ul>
                </li>
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppBar;
