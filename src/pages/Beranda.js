import React from 'react';

import AuthedUserContext from '../contexts/AuthedUserContext';

function Beranda() {
  const { onLogout } = React.useContext(AuthedUserContext);

  return (
    <>
      <h1> Hello World</h1>
      <button className="btn btn-danger" type="button" onClick={onLogout}>Logout</button>
    </>
  );
}

export default Beranda;
