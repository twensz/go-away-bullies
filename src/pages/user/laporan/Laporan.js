import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getAllData, getData } from '../../../data/data-source';
import LaporanItem from '../../../components/laporan/Laporan';
import Template from '../../../components/user/Template';
import AuthedUserContext from '../../../contexts/AuthedUserContext';
import SwalCustom from '../../../data/swal-custom';

function Laporan() {
  const collectionName = 'laporan';

  const navigate = useNavigate();
  const { authedUser } = React.useContext(AuthedUserContext);
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

  function onTambahLaporanClick() {
    if (!authedUser) {
      SwalCustom.showError('Silahkan login terlebih dahulu untuk menambah laporan');
      return;
    }

    navigate('/laporan/tambah');
  }

  function renderContent() {
    return (
      <div className="container py-4">
        <h2 className="fs-3 mb-4">Semua Laporan</h2>
        <button type="button" className="btn btn-primary mb-4" onClick={onTambahLaporanClick}>Buat Laporan</button>
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
