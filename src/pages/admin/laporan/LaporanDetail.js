import React from 'react';
import { useParams } from 'react-router-dom';

import { getData, updateData } from '../../../data/data-source';
import Template from '../../../components/admin/Template';
import SwalCustom from '../../../data/swal-custom';
import Laporan from '../../../components/laporan/Laporan';

function LaporanDetail() {
  const { id } = useParams();
  const [laporan, setLaporan] = React.useState(null);

  async function onStatusChange(idLaporan, status) {
    const data = { id: idLaporan, data: { status } };

    SwalCustom.showLoading();
    await updateData('laporan', data);
    await SwalCustom.showSuccess('Berhasil mengubah status laporan');

    window.location.reload();
  }

  React.useEffect(() => {
    (async () => {
      const result = await getData('laporan', id);
      const user = await getData('user', result.data.idUser);
      setLaporan({
        id: result.id,
        data: {
          ...result.data,
          user: user.data,
        },
      });
    })();

    return () => {
      setLaporan();
    };
  }, []);

  function renderContent() {
    return (
      <div className="container py-4">
        <div className="row mb-3">
          <a href="/laporan">&#8592; kembali ke laporan</a>
        </div>
        {
          laporan
            ? (
              <>
                <label className="mb-3" htmlFor="statusInput">
                  Ubah Status
                  <select
                    id="statusInput"
                    className="form-select w-auto mt-1"
                    aria-label="Pilih status laporan"
                    value={laporan.data.status}
                    onChange={(event) => onStatusChange(laporan.id, event.target.value)}
                  >
                    <option value="dilaporkan">dilaporkan</option>
                    <option value="dalamProses">dalamProses</option>
                    <option value="selesai">selesai</option>
                  </select>
                </label>

                <Laporan laporan={laporan} />
              </>
            )
            : null
        }
      </div>
    );
  }

  return <Template content={renderContent()} />;
}

export default LaporanDetail;
