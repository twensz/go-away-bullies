// BELUM ADA LAMPIRAN => KOPI AJA DARI FUNGSI USER

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { addData, uploadFile } from '../../../data/data-source';
import SwalCustom from '../../../data/swal-custom';
import useInput from '../../../hooks/useInput';
import Template from '../../../components/admin/Template';
import InputLokasi from '../../../components/admin/InputLokasi';
import InputLabel from '../../../components/admin/InputLabel';

function LaporanTambah() {
  const navigate = useNavigate();

  const [judul, onJudulChange] = useInput('');
  const [isi, onIsiChange] = useInput('');
  const [waktuKejadian, onWaktuKejadianChange] = useInput('');
  const [status, onStatusChange] = useInput('');

  const [lokasi, onLokasiChange] = React.useState();
  const [listLampiran, setListLampiran] = React.useState([]);

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
      // idUser: authedUser.id,
      status: 'dilaporkan',
    };

    if (await addData('laporan', data)) {
      await SwalCustom.showSuccess('Berhasil menambahkan laporan');
      navigate('/laporan');
    }
  }

  function renderContent() {
    return (
      <>
        <h2 className="fs-4 mb-4">Tambah Laporan Baru</h2>

        <form className="container" onSubmit={onSubmit}>
          <div className="row mb-2">
            <InputLabel
              placeholder="Judul Laporan"
              inputId="judul"
              value={judul}
              onValueChange={onJudulChange}
            />
          </div>
          <div className="row mb-2">
            <InputLabel
              textarea
              placeholder="Isi Laporan"
              inputId="isi"
              value={isi}
              onValueChange={onIsiChange}
            />
          </div>
          <div className="row mb-2">
            <InputLabel
              type="date"
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
              inputId="lampiran"
              onValueChange={onLampiranChange}
            />
          </div>
          <div className="row mb-2">
            <select
              id="statusInput"
              className="form-select mt-1"
              aria-label="Pilih status laporan"
              value={status || ''}
              onChange={onStatusChange}
              required
            >
              <option value="" disabled>
                Pilih status
              </option>
              <option value="dilaporkan">dilaporkan</option>
              <option value="dalamProses">dalamProses</option>
              <option value="selesai">selesai</option>
            </select>
          </div>
          <div className="row mt-3 justify-content-end">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary text-end">Tambah Laporan</button>
            </div>
          </div>
        </form>
      </>
    );
  }

  return <Template content={renderContent()} />;
}

export default LaporanTambah;
