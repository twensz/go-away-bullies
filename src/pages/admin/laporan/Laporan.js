import React from 'react';
import { BsPencil, BsTrash, BsFolder2Open } from 'react-icons/bs';

import { deleteData, getAllData, updateData } from '../../../data/data-source';
import SwalCustom from '../../../data/swal-custom';
import Template from '../../../components/admin/template/Template';

function Laporan() {
  const collectionName = 'laporan';

  const [laporans, setLaporans] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function onDelete(id) {
    if (!(await SwalCustom.showConfirm())) {
      return;
    }

    SwalCustom.showLoading();
    await deleteData(collectionName, id);
    await SwalCustom.showSuccess('Berhasil menghapus laporan');

    window.location.reload();
  }

  async function onStatusChange(id, status) {
    const data = { id, data: { status } };

    SwalCustom.showLoading();
    await updateData(collectionName, data);
    await SwalCustom.showSuccess('Berhasil mengubah status laporan');

    window.location.reload();
  }

  React.useEffect(() => {
    (async () => {
      const result = await getAllData(collectionName);

      setLaporans(result);
      setLoading(false);
    })();
  }, []);

  function renderTableData() {
    if (loading) {
      return (
        <tr>
          <td colSpan="6">
            <div className="my-4 text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </td>
        </tr>
      );
    }

    if (laporans.length > 0) {
      return laporans.map((laporan, index) => (
        <tr key={laporan.id}>
          <th scope="row">{index + 1}</th>
          <td>{laporan.data.judul}</td>
          <td className="min-width-300 pre-line">
            {laporan.data.isi}
          </td>
          <td className="min-width-150">
            {`${laporan.data.lokasi.provinsi.nama}, 
              ${laporan.data.lokasi.kota.nama}, 
              ${laporan.data.lokasi.kecamatan.nama}, 
              ${laporan.data.lokasi.kelurahan.nama}`}
          </td>
          <td className="text-nowrap">{laporan.data.waktuKejadian}</td>
          <td>
            <select
              className="form-select w-auto"
              aria-label="Pilih status laporan"
              value={laporan.data.status}
              onChange={(event) => onStatusChange(laporan.id, event.target.value)}
            >
              <option value="dilaporkan">dilaporkan</option>
              <option value="dalamProses">dalamProses</option>
              <option value="selesai">selesai</option>
            </select>
          </td>
          <td>
            <div className="d-flex flex-nowrap">
              <a
                className="btn btn-icon btn-primary me-1"
                href={`/laporan/ubah/${laporan.id}`}
              >
                <BsPencil />
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
        <td colSpan="6">
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
        <a className="btn btn-primary mb-2" href="/laporan/tambah">Tambah Laporan</a>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Judul</th>
                <th scope="col">Isi</th>
                <th scope="col">Lokasi</th>
                <th scope="col">Waktu</th>
                <th scope="col">Status</th>
                <th scope="col">Aksi</th>
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
