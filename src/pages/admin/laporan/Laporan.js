import React from 'react';
import {
  BsEye, BsTrash, BsFolder2Open, BsChatFill, BsStopwatchFill, BsCheckCircleFill,
} from 'react-icons/bs';

import {
  deleteData, formatDateForInput, getAllData, getData,
} from '../../../data/data-source';
import SwalCustom from '../../../data/swal-custom';
import Template from '../../../components/admin/Template';
import Spinner from '../../../components/Spinner';

function Laporan() {
  const [listLaporan, setListLaporan] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function onDelete(id) {
    if (!(await SwalCustom.showConfirm())) {
      return;
    }

    SwalCustom.showLoading();
    await deleteData('laporan', id);
    await SwalCustom.showSuccess('Berhasil menghapus laporan');

    window.location.reload();
  }

  React.useEffect(() => {
    (async () => {
      const result = await getAllData('laporan');
      for (const res of result) {
        const user = await getData('user', res.data.idUser);
        setListLaporan((prevState) => [
          ...prevState,
          {
            id: res.id,
            data: {
              ...res.data,
              user: user.data,
            },
          },
        ]);
      }

      setLoading(false);
    })();

    return () => {
      setListLaporan([]);
      setLoading(true);
    };
  }, []);

  function renderStatusLaporan(status) {
    if (status === 'dilaporkan') {
      return (
        <div className="laporan-item__status laporan-item__status--dilaporkan mx-auto">
          <BsChatFill className="me-2" />
          <span>Dilaporkan</span>
        </div>
      );
    }
    if (status === 'dalamProses') {
      return (
        <div className="laporan-item__status laporan-item__status--proses mx-auto">
          <BsStopwatchFill className="me-2" />
          <span>Dalam Proses</span>
        </div>
      );
    }

    return (
      <div className="laporan-item__status laporan-item__status--selesai mx-auto">
        <BsCheckCircleFill className="me-2" />
        <span>Selesai</span>
      </div>
    );
  }

  function renderTableData() {
    if (loading) {
      return (
        <tr>
          <td colSpan="8">
            <Spinner />
          </td>
        </tr>
      );
    }

    if (listLaporan.length > 0) {
      return listLaporan.map((laporan) => (
        <tr key={laporan.id}>
          <td className="text-nowrap fw-semibold">
            <div className="opacity-75 mb-1" style={{ fontSize: '.8rem' }}>{`# ${laporan.id}`}</div>
            <div>{`${laporan.data.judul}`}</div>
          </td>
          <td className="text-nowrap">{laporan.data.user.nama}</td>
          <td className="text-nowrap">{laporan.data.lokasi.provinsi.nama}</td>
          <td className="text-nowrap">{formatDateForInput(laporan.data.waktuKejadian)}</td>
          <td className="text-center">
            {renderStatusLaporan(laporan.data.status)}
          </td>
          <td>
            <div className="d-flex flex-nowrap justify-content-center">
              <a className="btn btn-icon btn-primary me-1" href={`/laporan/${laporan.id}`}>
                <BsEye />
              </a>
              <button
                className="btn btn-icon btn-danger me-1"
                type="button"
                onClick={() => onDelete(laporan.id)}
              >
                <BsTrash />
              </button>
            </div>
          </td>
        </tr>
      ));
    }

    return (
      <tr>
        <td colSpan="8">
          <div className="my-5 d-flex align-items-center justify-content-center">
            <BsFolder2Open className="fs-4 me-2 text-dark text-opacity-75" />
            <span className="fs-5 text-dark text-opacity-75">Data masih kosong</span>
          </div>
        </td>
      </tr>
    );
  }

  function renderContent() {
    return (
      <>
        <h2 className="text-primary fs-3 mb-4">Laporan</h2>
        <div className="table-responsive">
          <table className="table bg-white rounded shadow">
            <thead>
              <tr>
                <th scope="col">ID Laporan</th>
                <th scope="col">Pelapor</th>
                <th scope="col">Lokasi</th>
                <th scope="col">Waktu</th>
                <th scope="col" className="text-center">Status</th>
                <th scope="col" className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {renderTableData()}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  return <Template content={renderContent()} />;
}

export default Laporan;
