import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/admin/Dashboard';
import Laporan from './pages/admin/laporan/Laporan';
import LaporanTambah from './pages/admin/laporan/LaporanTambah';
import Artikel from './pages/admin/artikel/Artikel';
import ArtikelTambah from './pages/admin/artikel/ArtikelTambah';
import ArtikelUbah from './pages/admin/artikel/ArtikelUbah';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/laporan" element={<Laporan />} />
      <Route path="/laporan/tambah" element={<LaporanTambah />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/artikel/tambah" element={<ArtikelTambah />} />
      <Route path="/artikel/ubah/:id" element={<ArtikelUbah />} />
    </Routes>
  );
}

export default App;
