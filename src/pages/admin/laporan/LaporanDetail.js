import React from 'react';
import { useParams } from 'react-router-dom';
import {
  BsCalendarDate, BsStopwatch, BsHash,
} from 'react-icons/bs';

import { getData, updateData } from '../../../data/data-source';
import Template from '../../../components/admin/Template';
import SwalCustom from '../../../data/swal-custom';

function LaporanDetail() {
  const { id } = useParams();
  const [laporan, setLaporan] = React.useState(null);

  async function onStatusChange(idLaporan, status) {
    const data = { id: idLaporan, data: { status } };

    SwalCustom.showLoading();
    await updateData('laporan', data);
    await SwalCustom.showSuccess('Berhasil mengubah status laporan');

    window.location.reload();
  }

  React.useEffect(() => {
    (async () => {
      const result = await getData('laporan', id);
      const user = await getData('user', result.data.idUser);
      setLaporan({
        id: result.id,
        data: {
          ...result.data,
          user: user.data,
        },
      });
    })();

    return () => {
      setLaporan();
    };
  }, []);

  function renderStatusLaporan(status) {
    if (status === 'dilaporkan') {
      return (
        <div className="d-flex align-items-center text-primary fw-semibold">
          <BsStopwatch className="me-2" />
          <span>Dilaporkan</span>
        </div>
      );
    }
    if (status === 'dalamProses') {
      return (
        <div className="d-flex align-items-center text-warning fw-semibold">
          <BsStopwatch className="me-2" />
          <span>Dalam Proses</span>
        </div>
      );
    }

    return (
      <div className="d-flex align-items-center text-success fw-semibold">
        <BsStopwatch className="me-2" />
        <span>Selesai</span>
      </div>
    );
  }

  function renderContent() {
    return (
      <div className="container py-4">
        <div className="row mb-3">
          <a href="/laporan">&#8592; kembali ke laporan</a>
        </div>
        {
          laporan
            ? (
              <>
                <label htmlFor="statusInput">
                  Ubah Status
                  <select
                    id="statusInput"
                    className="form-select w-auto"
                    aria-label="Pilih status laporan"
                    value={laporan.data.status}
                    onChange={(event) => onStatusChange(laporan.id, event.target.value)}
                  >
                    <option value="dilaporkan">dilaporkan</option>
                    <option value="dalamProses">dalamProses</option>
                    <option value="selesai">selesai</option>
                  </select>
                </label>

                <div className="card my-3">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <img src="https://github.com/mdo.png" alt="" width="30" height="30" className="rounded-circle me-3" />
                      <span className="text-primary">
                        <a href={`profil/${laporan.data.idUser}`}>{laporan.data.user.nama}</a>
                      </span>
                    </div>
                    <div className="d-flex gap-4 mb-3 text-secondary">
                      <div className="d-flex align-items-center">
                        <BsHash className="me-2" />
                        <span>{laporan.id}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <BsCalendarDate className="me-2" />
                        <span>{laporan.data.waktuKejadian}</span>
                      </div>
                      {renderStatusLaporan(laporan.data.status)}
                    </div>
                    <h3 className="card-title fs-4 mb-2">
                      <a href={`/laporan/${laporan.id}`} className="text-decoration-none">
                        {laporan.data.judul}
                      </a>
                    </h3>
                    <p className="card-text pre-line">{laporan.data.isi}</p>
                    <p>Lampiran :</p>
                    {laporan.data.lampiran.length > 0
                      ? laporan.data.lampiran.map((lampiranUrl, index) => (
                        <a href={lampiranUrl} rel="noreferrer" target="_blank" key={`lampiran-${index + 1}`}>
                          <img src={lampiranUrl} className="img-thumbnail" alt={`Link lampiran ${index + 1}`} />
                        </a>
                      ))
                      : (<p>Tidak ada lampiran</p>)}
                  </div>
                </div>
              </>
            )
            : null
        }
      </div>
    );
  }

  return <Template content={renderContent()} />;
}

export default LaporanDetail;
