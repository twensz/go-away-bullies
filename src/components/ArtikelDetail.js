import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../data/data-source';

function ArtikelDetail({ artikel }) {
  return (
    <div className="d-flex justify-content-center">
      <div className="artikel-detail">
        <h2 className="fs-1 text-primary fw-semibold mb-3">{artikel.data.judul}</h2>
        <span className="text-muted my-3">{`${formatDate(artikel.data.dibuatPada)} - ${artikel.data.penulis}`}</span>
        <img
          style={{
            maxHeight: '400px', width: '100%', objectFit: 'cover', margin: '20px 0',
          }}
          src={artikel.data.gambar || 'https://dummyimage.com/600x400/000/fff'}
          className="img-fluid border"
          alt="artikel hero"
        />
        <p className="mt-3 lh-lg" style={{ whiteSpace: 'pre-wrap' }}>{artikel.data.isi}</p>
      </div>
    </div>
  );
}

ArtikelDetail.propTypes = {
  artikel: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ArtikelDetail;
