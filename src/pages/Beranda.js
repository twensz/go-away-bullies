import React from 'react';

import AuthedUserContext from '../contexts/AuthedUserContext';

function Beranda() {
  const { authedUser, onLogout } = React.useContext(AuthedUserContext);

  return (
    <div className="container py-5">
      <h1>Beranda</h1>
      {authedUser
        ? (
          <>
            <span>{authedUser.data.nama}</span>
            <button className="btn btn-danger ms-2" type="button" onClick={onLogout}>Logout</button>
          </>
        )
        : <a href="/login">Login</a>}
    </div>
  );
}

export default Beranda;
