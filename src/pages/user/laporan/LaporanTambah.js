import React from 'react';
import { useNavigate } from 'react-router-dom';

import { addData, uploadFile } from '../../../data/data-source';
import SwalCustom from '../../../data/swal-custom';
import useInput from '../../../hooks/useInput';
import Template from '../../../components/user/Template';
import InputLokasi from '../../../components/admin/InputLokasi';
import AuthedUserContext from '../../../contexts/AuthedUserContext';
import InputLabel from '../../../components/admin/InputLabel';

function LaporanTambah() {
  const navigate = useNavigate();

  const [judul, onJudulChange] = useInput('');
  const [isi, onIsiChange] = useInput('');
  const [waktuKejadian, onWaktuKejadianChange] = useInput('');

  const [lokasi, onLokasiChange] = React.useState();
  const [listLampiran, setListLampiran] = React.useState([]);
  const { authedUser } = React.useContext(AuthedUserContext);

  function onLampiranChange(event) {
    setListLampiran([...event.target.files]);
  }

  async function onSubmit(event) {
    event.preventDefault();
    SwalCustom.showLoading();

    const lampiranUrl = [];
    if (listLampiran.length > 0) {
      for (const lampiran of listLampiran) {
        const fileUrl = await uploadFile(lampiran);

        if (!fileUrl) {
          await SwalCustom.showError('Upload file gagal');
        } else {
          lampiranUrl.push(fileUrl);
        }
      }
    }

    const data = {
      judul,
      isi,
      lokasi,
      waktuKejadian,
      lampiran: lampiranUrl,
      idUser: authedUser.id,
      status: 'dilaporkan',
    };

    if (await addData('laporan', data)) {
      await SwalCustom.showSuccess('Berhasil menambahkan laporan');
      navigate('/laporan');
    }
  }

  function renderContent() {
    return (
      <div className="container py-4">
        <h2 className="text-primary fs-4 mb-4">Tambah Laporan Baru</h2>

        <form className="container" onSubmit={onSubmit}>
          <div className="row mb-2">
            <InputLabel
              textLabel="Judul Laporan"
              placeholder="Judul Laporan"
              inputId="judul"
              value={judul}
              onValueChange={onJudulChange}
            />
          </div>
          <div className="row mb-2">
            <InputLabel
              textarea
              textLabel="Isi Laporan"
              placeholder="Isi Laporan"
              inputId="isi"
              value={isi}
              onValueChange={onIsiChange}
            />
          </div>
          <div className="row mb-2">
            <InputLabel
              type="date"
              textLabel="Waktu Kejadian"
              inputId="waktuKejadian"
              value={waktuKejadian}
              onValueChange={onWaktuKejadianChange}
            />
          </div>
          <div className="row mb-2">
            <InputLokasi lokasi={lokasi} onLokasiChange={onLokasiChange} />
          </div>
          <div className="row mb-2">
            <InputLabel
              type="file"
              textLabel="Lampiran"
              inputId="lampiran"
              onValueChange={onLampiranChange}
              required
            />
          </div>
          <div className="row mt-3 justify-content-end">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary text-end">Tambah Laporan</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return <Template content={renderContent()} />;
}

export default LaporanTambah;
