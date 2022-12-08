import React from 'react';

function Footer() {
  return (
    <footer className="border-top bg-white shadow-sm">
      <div className="container py-4">
        <div className="row gy-2">
          <div className="col-md text-center text-md-start">
            <p className="mb-0 text-muted">© 2022 Go Away Bullies!</p>
          </div>

          <div className="col-md-auto">
            <ul className="nav justify-content-center justify-content-md-end">
              <li className="nav-item"><a href="/" className="nav-link px-2">Beranda</a></li>
              <li className="nav-item"><a href="/laporan" className="nav-link px-2">Laporan</a></li>
              <li className="nav-item"><a href="/artikel" className="nav-link px-2">Artikel</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
