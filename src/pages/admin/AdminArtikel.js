import React from 'react';
import { BsPencil, BsTrash } from 'react-icons/bs';

import { deleteArtikel, formatDate, getAllArtikel } from '../../data/artikel-source';
import AdminTemplate from './AdminTemplate';
import SwalCustom from '../../data/swal-custom';

function AdminArtikel() {
  const [artikels, setArtikels] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function onDelete(id) {
    if (!(await SwalCustom.showConfirm())) {
      return;
    }

    SwalCustom.showLoading();
    await deleteArtikel(id);
    await SwalCustom.showSuccess('Berhasil menghapus artikel');

    window.location.reload();
  }

  React.useEffect(() => {
    (async () => {
      const result = await getAllArtikel();

      setArtikels(result);
      setLoading(false);
    })();
  }, []);

  function renderArtikel() {
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

    if (artikels.length > 0) {
      return artikels.map((artikel, index) => (
        <tr key={artikel.id}>
          <th scope="row">{index + 1}</th>
          <td>{artikel.data.judul}</td>
          <td className="pre-line">
            {artikel.data.isi}
          </td>
          <td>{artikel.data.penulis}</td>
          <td>{formatDate(artikel.data.dibuatPada)}</td>
          <td>
            <div className="d-flex flex-nowrap">
              <a className="btn btn-primary me-1 d-flex align-items-center flex-nowrap" href={`/artikel-ubah/${artikel.id}`}>
                <BsPencil className="me-sm-1" />
                <span className="d-none d-sm-inline">Ubah</span>
              </a>
              <button
                className="btn btn-danger me-1 d-flex align-items-center flex-nowrap"
                type="button"
                onClick={() => onDelete(artikel.id)}
              >
                <BsTrash className="me-sm-1" />
                <span className="d-none d-sm-inline">Hapus</span>
              </button>
            </div>
          </td>
        </tr>
      ));
    }

    return null;
  }

  function renderContent() {
    return (
      <>
        <h2 className="fs-3 mb-3">Artikel</h2>

        <a className="btn btn-primary mb-2" href="/artikel-tambah">Tambah Artikel</a>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Judul</th>
                <th scope="col">Isi</th>
                <th scope="col">Penulis</th>
                <th scope="col">Dibuat pada</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {renderArtikel()}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  return <AdminTemplate content={renderContent()} />;
}

export default AdminArtikel;
