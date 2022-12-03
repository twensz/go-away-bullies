import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/admin/Dashboard';
import AdminLaporan from './pages/admin/laporan/Laporan';
import AdminLaporanTambah from './pages/admin/laporan/LaporanTambah';
import AdminLaporanDetail from './pages/admin/laporan/LaporanDetail';
import AdminArtikel from './pages/admin/artikel/Artikel';
import AdminArtikelTambah from './pages/admin/artikel/ArtikelTambah';
import AdminArtikelUbah from './pages/admin/artikel/ArtikelUbah';
import AdminArtikelDetail from './pages/admin/artikel/ArtikelDetail';

function App() {
  return (
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
  );
}

export default App;
