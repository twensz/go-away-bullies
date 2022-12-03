import React from 'react';
import {
  BsPencil,
  BsTrash,
  BsEye,
  BsFolder2Open,
} from 'react-icons/bs';

import { deleteData, getAllData, formatDate } from '../../../data/data-source';
import SwalCustom from '../../../data/swal-custom';
import Template from '../../../components/admin/Template';

function Artikel() {
  const [listArtikel, setListArtikel] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function onDelete(id) {
    if (!(await SwalCustom.showConfirm())) {
      return;
    }

    SwalCustom.showLoading();
    await deleteData('artikel', id);
    await SwalCustom.showSuccess('Berhasil menghapus artikel');

    window.location.reload();
  }

  React.useEffect(() => {
    (async () => {
      const result = await getAllData('artikel');

      setListArtikel(result);
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

    if (listArtikel.length > 0) {
      return listArtikel.map((artikel, index) => (
        <tr key={artikel.id}>
          <th scope="row">{index + 1}</th>
          <td className="text-nowrap">{artikel.data.judul}</td>
          <td>{artikel.data.penulis}</td>
          <td>{formatDate(artikel.data.dibuatPada)}</td>
          <td>
            <div className="d-flex flex-nowrap">
              <a className="btn btn-icon btn-primary me-1" href={`/artikel/${artikel.id}`}>
                <BsEye />
              </a>
              <a className="btn btn-icon btn-success me-1" href={`/artikel/ubah/${artikel.id}`}>
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
        <h2 className="text-primary fs-3 mb-4">Artikel</h2>
        <a className="btn btn-primary mb-3" href="/artikel/tambah">Tambah Artikel</a>
        <div className="table-responsive">
          <table className="table bg-white rounded shadow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Judul</th>
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
