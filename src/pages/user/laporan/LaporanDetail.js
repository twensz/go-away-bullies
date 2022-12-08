import React from 'react';
import { useParams } from 'react-router-dom';

import { getData } from '../../../data/data-source';
import LaporanItem from '../../../components/laporan/Laporan';
import Template from '../../../components/user/Template';

function LaporanDetail() {
  const { id } = useParams();
  const [laporan, setLaporan] = React.useState(null);

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
              <div className="mb-4">
                <LaporanItem laporan={laporan} />
              </div>
            )
            : null
        }
      </div>
    );
  }

  return <Template content={renderContent()} />;
}

export default LaporanDetail;
