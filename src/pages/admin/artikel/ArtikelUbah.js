import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getData, updateData, uploadFile } from '../../../data/data-source';
import SwalCustom from '../../../data/swal-custom';
import useInput from '../../../hooks/useInput';

import Template from '../../../components/admin/Template';
import InputLabel from '../../../components/admin/InputLabel';

function ArtikelUbah() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [judul, onJudulChange, setJudul] = useInput('');
  const [isi, onIsiChange, setIsi] = useInput('');
  const [penulis, onPenulisChange, setPenulis] = useInput('');

  const [gambar, setGambar] = React.useState('');
  function onGambarChange(event) {
    setGambar(event.target.files[0]);
  }

  async function onSubmit(event) {
    event.preventDefault();
    SwalCustom.showLoading();

    const fileUrl = await uploadFile(gambar);
    if (!fileUrl) {
      await SwalCustom.showError('Upload file gagal');
      return;
    }

    if (await updateData('artikel', {
      id,
      data: {
        judul,
        isi,
        penulis,
        gambar: fileUrl,
      },
    })) {
      await SwalCustom.showSuccess('Berhasil mengubah artikel');
      navigate('/artikel');
    }
  }

  React.useEffect(() => {
    (async () => {
      const result = await getData('artikel', id);

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

        <form onSubmit={onSubmit}>
          <div className="row mb-2">
            <InputLabel
              textLabel="Judul Artikel"
              inputId="judul"
              value={judul}
              onValueChange={onJudulChange}
            />
          </div>
          <div className="row mb-1">
            <InputLabel
              textarea
              textLabel="Isi Artikel"
              inputId="isi"
              value={isi}
              onValueChange={onIsiChange}
            />
          </div>
          <div className="row mb-1">
            <InputLabel
              textLabel="Penulis"
              inputId="penulis"
              value={penulis}
              onValueChange={onPenulisChange}
            />
          </div>
          <div className="row mb-1">
            <label htmlFor="gambarInput" className="form-label">
              Pilih gambar hero
              <input
                type="file"
                id="gambarInput"
                className="form-control mt-1"
                onChange={onGambarChange}
                accept="image/png, image/gif, image/jpeg"
                required
              />
            </label>
          </div>
          <div className="row mt-3 justify-content-end">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary text-end">Perbarui Artikel</button>
            </div>
          </div>
        </form>
      </>
    );
  }

  return <Template content={renderContent()} />;
}

export default ArtikelUbah;
