/* eslint-disable max-len */
import React from 'react';
import { useParams } from 'react-router-dom';

import Laporan from '../../components/laporan/Laporan';
import Template from '../../components/user/Template';
import AuthedUserContext from '../../contexts/AuthedUserContext';
import { getAllData, getData } from '../../data/data-source';
import CONFIG from '../../globals/config';

function Profil() {
  const { id } = useParams();
  const { authedUser } = React.useContext(AuthedUserContext);

  const [user, setUser] = React.useState();
  const [listLaporan, setListLaporan] = React.useState([]);

  React.useEffect(() => {
    if (authedUser) {
      if (id === authedUser.id) {
        setUser(authedUser);
      } else {
        (async () => {
          const userData = await getData('user', id);
          setUser(userData);
        })();
      }
    } else {
      (async () => {
        const userData = await getData('user', id);
        setUser(userData);
      })();
    }

    return () => {
      setUser();
    };
  }, []);
  React.useEffect(() => {
    if (user) {
      (async () => {
        const laporanData = await getAllData('laporan');
        laporanData.forEach(async (res) => {
          if (res.data.idUser === id) {
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
          }
        });
      })();
    }

    return () => {
      setListLaporan([]);
    };
  }, [user]);

  function renderContent() {
    if (user) {
      return (
        <div className="profil">
          <div className="profil__header text-white py-5">
            <div className="container d-flex align-items-start">
              <img src={CONFIG.DEFAULT_AVATAR} alt="" width="150" height="150" className="border border-primary rounded-circle border-opacity-75 me-4" />
              <span className="fs-3 fw-semibold align-self-center flex-grow-1">{user.data.nama}</span>
              {/* <a className="btn btn-primary disabled align-self-end" href="/">Ubah profil</a> */}
            </div>
          </div>
          <div className="container py-5">
            <h2 className="fs-3 mb-4">
              {`Laporan ${user.data.nama}`}
            </h2>
            {
              listLaporan.length > 0
                ? listLaporan.map((laporan) => (
                  <Laporan laporan={laporan} />
                ))
                : null
            }
          </div>
        </div>
      );
    }

    return null;
  }

  return <Template content={renderContent()} />;
}

export default Profil;
