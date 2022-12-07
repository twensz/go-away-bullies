import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import AuthedUserContext from './contexts/AuthedUserContext';
import { getUserLogged, putAccessToken } from './data/auth-source';

import Dashboard from './pages/admin/Dashboard';
import AdminLaporan from './pages/admin/laporan/Laporan';
import AdminLaporanTambah from './pages/admin/laporan/LaporanTambah';
import AdminLaporanDetail from './pages/admin/laporan/LaporanDetail';
import AdminArtikel from './pages/admin/artikel/Artikel';
import AdminArtikelTambah from './pages/admin/artikel/ArtikelTambah';
import AdminArtikelUbah from './pages/admin/artikel/ArtikelUbah';
import AdminArtikelDetail from './pages/admin/artikel/ArtikelDetail';

import Beranda from './pages/Beranda';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import SwalCustom from './data/swal-custom';

function App() {
  const navigate = useNavigate();
  const [authedUser, setAuthedUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  function onLogout() {
    setAuthedUser(null);
    putAccessToken('');
    navigate('/');
    SwalCustom.showSuccess('Berhasil logout');
  }

  function onLoginSuccess(user) {
    setAuthedUser(user);
    putAccessToken(user.id);
  }

  const authedUserContextValue = React.useMemo(() => (
    { authedUser, setAuthedUser, onLogout }
  ), [authedUser]);

  React.useEffect(() => {
    (async () => {
      setAuthedUser(await getUserLogged());
      setLoading(false);
      SwalCustom.close();
    })();

    return () => {
      setAuthedUser(null);
    };
  }, []);

  function renderApp() {
    if (loading) {
      SwalCustom.showLoading();
      return null;
    }

    if (authedUser) {
      if (authedUser.data.role === 'admin') {
        return (
          <AuthedUserContext.Provider value={authedUserContextValue}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/laporan" element={<AdminLaporan />} />
              <Route path="/laporan/:id" element={<AdminLaporanDetail />} />
              <Route path="/laporan/tambah" element={<AdminLaporanTambah />} />
              <Route path="/artikel" element={<AdminArtikel />} />
              <Route path="/artikel/:id" element={<AdminArtikelDetail />} />
              <Route path="/artikel/tambah" element={<AdminArtikelTambah />} />
              <Route path="/artikel/ubah/:id" element={<AdminArtikelUbah />} />
            </Routes>
          </AuthedUserContext.Provider>
        );
      }

      return (
        <AuthedUserContext.Provider value={authedUserContextValue}>
          <Routes>
            <Route path="/" element={<Beranda />} />
          </Routes>
        </AuthedUserContext.Provider>
      );
    }

    return (
      <AuthedUserContext.Provider value={authedUserContextValue}>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLoginSuccess={onLoginSuccess} />} />
        </Routes>
      </AuthedUserContext.Provider>
    );
  }

  return renderApp();
}

export default App;
