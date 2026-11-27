import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import KriteriaPage from './pages/Kriteria';
import AlternatifPage from './pages/Alternatif';
import UserPage from './pages/User';
import HitungPage from './pages/Hitung';
import Navbar from './components/Navbar';
import UserTambah from './pages/UserTambah';
import Login from './components/Login';
import PerbandinganKriteria from './pages/PerbandinganKriteria';
import PerbandinganAlternatif from './pages/PerbandinganAlternatif';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kriteria" element={<KriteriaPage />} />
            <Route path="/alternatif" element={<AlternatifPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/hitung" element={<HitungPage />} />
            <Route path="/perbandingan_alternatif" element={<PerbandinganAlternatif />} />
            <Route path="/perbandingan_kriteria" element={<PerbandinganKriteria />} />
            <Route path="/user/tambah" element={<UserTambah />} />
            <Route path="/login" element={<Login />} />
            {/* Route default jika halaman tidak ditemukan */}
            <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
    </Router>
  </React.StrictMode>
);