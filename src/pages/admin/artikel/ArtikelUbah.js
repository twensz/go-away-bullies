import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getArtikel, updateArtikel } from '../../../data/artikel-source';
import SwalCustom from '../../../data/swal-custom';
import useInput from '../../../hooks/useInput';

import Template from '../../../components/admin/Template';
import FormArtikel from '../../../components/admin/FormArtikel';

function ArtikelUbah() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [judul, onJudulChange, setJudul] = useInput('');
  const [isi, onIsiChange, setIsi] = useInput('');
  const [penulis, onPenulisChange, setPenulis] = useInput('');

  async function onSubmit(event) {
    event.preventDefault();
    SwalCustom.showLoading();
    if (await updateArtikel({
      id,
      data: {
        judul,
        isi,
        penulis,
      },
    })) {
      await SwalCustom.showSuccess('Berhasil mengubah artikel');
      navigate('/artikel');
    }
  }

  React.useEffect(() => {
    (async () => {
      const result = await getArtikel(id);

      if (result) {
        setJudul(result.data.judul);
        setIsi(result.data.isi);
        setPenulis(result.data.penulis);
      }
    })();
  }, []);

  function renderContent() {
    return (
      <>
        <h2 className="fs-4 mb-4">Ubah Artikel</h2>

        {FormArtikel(
          'Ubah Artikel',
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

  return <Template content={renderContent()} />;
}

export default ArtikelUbah;
