import React from 'react';

import { getAllData, getData } from '../../../data/data-source';
import LaporanItem from '../../../components/laporan/Laporan';
import Template from '../../../components/user/Template';

function Laporan() {
  const collectionName = 'laporan';

  const [listLaporan, setListLaporan] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const result = await getAllData(collectionName);
      result.forEach(async (res) => {
        const user = await getData('user', res.data.idUser);
        setListLaporan((prevState) => [
          ...prevState,
          {
            id: res.id,
            data: {
              ...res.data,
              user: user.data,
            },
          },
        ]);
      });
    })();

    return () => {
      setListLaporan([]);
    };
  }, []);

  function renderContent() {
    return (
      <div className="container py-4">
        <h2 className="fs-3 mb-4">Semua Laporan</h2>
        <a className="btn btn-primary mb-4" href="/laporan/tambah">Buat Laporan</a>
        {
          listLaporan.length > 0
            ? listLaporan.map((laporan) => (
              <div className="mb-4">
                <LaporanItem laporan={laporan} />
              </div>
            ))
            : null
        }
      </div>
    );
  }

  return <Template content={renderContent()} />;
}

export default Laporan;
