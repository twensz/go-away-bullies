import React from 'react';
import { useParams } from 'react-router-dom';

import Template from '../../components/admin/Template';
import Spinner from '../../components/Spinner';
import AuthedUserContext from '../../contexts/AuthedUserContext';
import { getData } from '../../data/data-source';
import CONFIG from '../../globals/config';

function Profil() {
  const { id } = useParams();
  const { authedUser } = React.useContext(AuthedUserContext);

  const [user, setUser] = React.useState();
  const [loading, setLoading] = React.useState(true);

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

    setLoading(false);

    return () => {
      setUser();
    };
  }, []);

  function renderContent() {
    if (loading) {
      return <Spinner />;
    }

    if (user) {
      return (
        <div className="container">
          <h2 className="text-primary fs-3 mb-4">Profil</h2>
          <div className="row align-items-center">
            <div className="col-auto">
              <img src={CONFIG.DEFAULT_AVATAR} alt="User Avatar" width="150" height="150" className="border border-primary rounded border-opacity-75 me-4" />
            </div>
            <div className="col">
              <div className="fs-4 fw-semibold">{user.data.nama}</div>
              <div>{user.data.email}</div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }

  return <Template content={renderContent()} />;
}

export default Profil;
