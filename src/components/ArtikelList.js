import React from 'react';
import PropTypes from 'prop-types';
import { BsFolder2Open } from 'react-icons/bs';

import { formatDate } from '../data/data-source';
import CONFIG from '../globals/config';

function ArtikelList({ artikelList }) {
  if (artikelList.length <= 0) {
    return (
      <div className="col">
        <div className="my-5 d-flex align-items-center justify-content-center">
          <BsFolder2Open className="fs-4 me-2 text-dark text-opacity-75" />
          <span className="fs-5 text-dark text-opacity-75">Artikel masih kosong</span>
        </div>
      </div>
    );
  }

  return (
    <div className="artikel-list row justify-content-center align-items-stretch gx-md-4 mt-4">
      {artikelList.map((artikel) => (
        <div className="artikel-item col-md-4 mb-3" key={artikel.id}>
          <div className="card shadow-sm">
            <img
              src={artikel.data.gambar || CONFIG.DEFAULT_IMAGE}
              className="artikel-item__image card-img-top"
              alt="Hero Artikel"
            />
            <div className="card-body">
              <p className="card-subtitle text-muted fw-semibold mb-2">{formatDate(artikel.data.dibuatPada)}</p>
              <h3 className="fs-4 card-title">
                <a href={`/artikel/${artikel.id}`} className="text-decoration-none">
                  {artikel.data.judul}
                </a>
              </h3>
              <p className="artikel-item__isi card-text text-truncate">{artikel.data.isi}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

ArtikelList.propTypes = {
  artikelList: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default ArtikelList;
