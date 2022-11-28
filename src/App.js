import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation';
import ArtikelPage from './pages/ArtikelPage';

function App() {
  return (
    <div className="container">
      <Navigation />
      <main>
        <Routes>
          <Route path="/artikel" element={<ArtikelPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
