import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminArtikel from './pages/admin/AdminArtikel';
import AdminArtikelTambah from './pages/admin/AdminArtikelTambah';
import AdminArtikelUbah from './pages/admin/AdminArtikelUbah';

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminDetailLaporan from './pages/admin/AdminDetailLaporan';
import AdminLaporan from './pages/admin/AdminLaporan';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/laporan" element={<AdminLaporan />} />
      <Route path="/laporan/:id" element={<AdminDetailLaporan />} />
      <Route path="/artikel" element={<AdminArtikel />} />
      <Route path="/artikel-ubah/:id" element={<AdminArtikelUbah />} />
      <Route path="/artikel-tambah" element={<AdminArtikelTambah />} />
    </Routes>
  );
}

export default App;
