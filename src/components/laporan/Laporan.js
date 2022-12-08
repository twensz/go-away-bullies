import React from 'react';
import PropTypes from 'prop-types';
import { BsCalendarDateFill } from 'react-icons/bs';

import { formatDateForInput } from '../../data/data-source';
import CONFIG from '../../globals/config';
import StatusLaporan from './StatusLaporan';

function Laporan({ laporan }) {
  return (
    <div className="laporan card shadow-sm">
      <div className="card-body p-4">

        <div className="laporan__header mb-5">
          <div className="row gx-3 gy-3 text-secondary">
            <div className="col d-flex align-items-center me-2">
              <img src={CONFIG.DEFAULT_AVATAR} alt="User Avatar" width="30" height="30" className="rounded-circle shadow-sm me-3" />
              <a className="text-primary" href={`profil/${laporan.data.idUser}`}>{laporan.data.user.nama}</a>
            </div>
            <div className="col-auto">
              <div className="row">
                <div className="col-auto d-flex align-items-center">
                  <BsCalendarDateFill className="me-3" />
                  <span className="text-nowrap">{formatDateForInput(laporan.data.waktuKejadian)}</span>
                </div>
                <div className="col-auto d-flex align-items-center">
                  <StatusLaporan status={laporan.data.status} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="laporan__body">
          <h3 className="card-title fs-4 mb-2">
            <a href={`/laporan/${laporan.id}`} className="text-decoration-none">
              {laporan.data.judul}
            </a>
          </h3>
          <p className="card-text pre-line">{laporan.data.isi}</p>
          <p>Lampiran :</p>

          <div className="d-flex gap-2">
            {laporan.data.lampiran.length > 0 ? (
              laporan.data.lampiran.map((lampiranUrl, index) => (
                <a href={lampiranUrl} rel="noreferrer" target="_blank" key={`lampiran-${index + 1}`}>
                  <img src={lampiranUrl} className="img-thumbnail lampiran" alt={`Link lampiran ${index + 1}`} />
                </a>
              ))
            ) : <p>Tidak ada lampiran</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

Laporan.propTypes = {
  laporan: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Laporan;
