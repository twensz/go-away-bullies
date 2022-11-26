import React from 'react';
import { useNavigate } from 'react-router-dom';

import { addData } from '../../../data/data-source';
import SwalCustom from '../../../data/swal-custom';
import useInput from '../../../hooks/useInput';
import Template from '../../../components/admin/template/Template';
import { renderLaporanFormTemplate } from '../../../utils/template-creator';

function LaporanTambah() {
  const navigate = useNavigate();

  const [judul, onJudulChange] = useInput('');
  const [isi, onIsiChange] = useInput('');
  const [waktuKejadian, onWaktuKejadianChange] = useInput('');
  const [status, onStatusChange] = useInput('');

  const [lokasi, onLokasiChange] = React.useState();

  async function onSubmit(event) {
    event.preventDefault();
    SwalCustom.showLoading();

    const data = {
      judul,
      isi,
      lokasi,
      waktuKejadian,
      status,
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

        {renderLaporanFormTemplate(
          'Tambah Laporan',
          {
            onSubmit,
            judul,
            onJudulChange,
            isi,
            onIsiChange,
            waktuKejadian,
            onWaktuKejadianChange,
            lokasi,
            onLokasiChange,
            status,
            onStatusChange,
          },
        )}
      </>
    );
  }

  return <Template content={renderContent()} />;
}

export default LaporanTambah;
