import React from 'react';
import { Navigate } from 'react-router-dom';

// Bungkus route admin dengan komponen ini.
// Kalau belum login sebagai admin, otomatis diarahkan ke /login-admin.
const ProtectedRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';

  if (!isAdminLoggedIn) {
    return <Navigate to="/login-admin" replace />;
  }

  return children;
};

export default ProtectedRoute;