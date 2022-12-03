import React from 'react';
import {
  BsPencil,
  BsTrash,
  BsFolder2Open,
} from 'react-icons/bs';

import { deleteData, getAllData, formatDate } from '../../../data/data-source';
import SwalCustom from '../../../data/swal-custom';
import Template from '../../../components/admin/Template';

function Artikel() {
  const collectionName = 'artikel';

  const [artikels, setArtikels] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function onDelete(id) {
    if (!(await SwalCustom.showConfirm())) {
      return;
    }

    SwalCustom.showLoading();
    await deleteData(collectionName, id);
    await SwalCustom.showSuccess('Berhasil menghapus artikel');

    window.location.reload();
  }

  React.useEffect(() => {
    (async () => {
      const result = await getAllData(collectionName);

      setArtikels(result);
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

    if (artikels.length > 0) {
      return artikels.map((artikel, index) => (
        <tr key={artikel.id} className="align-middle">
          <th scope="row">{index + 1}</th>
          <td>{artikel.data.judul}</td>
          <td className="min-width-300 pre-line">
            {artikel.data.isi}
          </td>
          <td>{artikel.data.penulis}</td>
          <td>{formatDate(artikel.data.dibuatPada)}</td>
          <td>
            <div className="d-flex flex-nowrap">
              <a className="btn btn-icon btn-primary me-1" href={`/artikel/ubah/${artikel.id}`}>
                <BsPencil />
              </a>
              <button
                className="btn btn-danger me-1"
                type="button"
                onClick={() => onDelete(artikel.id)}
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
        <h2 className="fs-3 mb-4 text-primary">Artikel</h2>
        <a className="btn btn-primary mb-2" href="/artikel/tambah">
          Tambah Artikel
        </a>
        <div className="table-responsive">
          <table className="table table-bordered">
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
              {renderTableData()}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  return <Template content={renderContent()} />;
}

export default Artikel;
