import React from 'react';
import { useNavigate } from 'react-router-dom';

import { addArtikel } from '../../data/artikel-source';
import SwalCustom from '../../data/swal-custom';
import useInput from '../../hooks/useInput';
import renderArtikelFormTemplate from '../../utils/template-creator';
import AdminTemplate from './AdminTemplate';

function AdminArtikelTambah() {
  const navigate = useNavigate();

  const [judul, onJudulChange] = useInput('');
  const [isi, onIsiChange] = useInput('');
  const [penulis, onPenulisChange] = useInput('');

  async function onSubmit(event) {
    event.preventDefault();
    SwalCustom.showLoading();

    if (await addArtikel({
      judul,
      isi,
      penulis,
    })) {
      await SwalCustom.showSuccess('Berhasil menambahkan artikel');
      navigate('/artikel');
    }
  }

  function renderContent() {
    return (
      <>
        <h2 className="fs-4 mb-4">Tambah Artikel Baru</h2>

        {renderArtikelFormTemplate(
          'Tambah Artikel',
          {
            onSubmit,
            judul,
            onJudulChange,
            isi,
            onIsiChange,
            penulis,
            onPenulisChange,
          },
        )}
      </>
    );
  }

  return <AdminTemplate content={renderContent()} />;
}

export default AdminArtikelTambah;
