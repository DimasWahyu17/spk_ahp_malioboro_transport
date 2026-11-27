import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Navbar & proteksi route
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Sisi user
import Home from './pages/Home';
import LoginAdmin from './pages/LoginAdmin';
import LoginUser from './pages/LoginUser';
import DaftarAdmin from './pages/DaftarAdmin';
import DaftarPengguna from './pages/DaftarPengguna';
import TransportasiPage from './pages/TransportasiPage';

// Sisi admin (SPK AHP)
import Kriteria from './pages/Kriteria';
import Alternatif from './pages/Alternatif';
import PerbandinganKriteria from './pages/PerbandinganKriteria';
import PerbandinganAlternatif from './pages/PerbandinganAlternatif';
import Hitung from './pages/Hitung';
import User from './pages/User';

import './App.css';

// Halaman-halaman yang punya navbar sendiri (sisi user),
// jadi Navbar admin tidak perlu ditampilkan di sini.
const HALAMAN_TANPA_NAVBAR_ADMIN = [
  '/',
  '/login-admin',
  '/login-user',
  '/daftar-admin',
  '/daftar-pengguna',
  '/transportasi-page',
];

function App() {
  const location = useLocation();
  const tampilkanNavbarAdmin = !HALAMAN_TANPA_NAVBAR_ADMIN.includes(location.pathname);

  return (
    <>
      {tampilkanNavbarAdmin && <Navbar />}
      <Routes>
        {/* Sisi user */}
        <Route path="/" element={<Home />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/login-user" element={<LoginUser />} />
        <Route path="/daftar-admin" element={<DaftarAdmin />} />
        <Route path="/daftar-pengguna" element={<DaftarPengguna />} />
        <Route path="/transportasi-page" element={<TransportasiPage />} />

        {/* Sisi admin (SPK AHP) — diproteksi, harus login admin dulu */}
        <Route
          path="/criterias"
          element={
            <ProtectedRoute>
              <Kriteria />
            </ProtectedRoute>
          }
        />
        <Route
          path="/alternatives"
          element={
            <ProtectedRoute>
              <Alternatif />
            </ProtectedRoute>
          }
        />
        <Route
          path="/critratios"
          element={
            <ProtectedRoute>
              <PerbandinganKriteria />
            </ProtectedRoute>
          }
        />
        <Route
          path="/altratios"
          element={
            <ProtectedRoute>
              <PerbandinganAlternatif />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hitung"
          element={
            <ProtectedRoute>
              <Hitung />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;