import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DaftarAdmin.css';

const DaftarAdmin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); // Inisialisasi navigate

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 4; // Minimal 4 karakter
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorMessage('Nama tidak boleh kosong!');
    } else if (!validateEmail(email)) {
      setErrorMessage('Email tidak valid! Contoh: admin@example.com');
    } else if (!validatePassword(password)) {
      setErrorMessage('Password harus memiliki minimal 4 karakter!');
    } else {
      setErrorMessage('');
      alert('Pendaftaran berhasil!');
      // Navigasi ke halaman login-user
      navigate('/login-user');
    }
  };

  return (
    <div className="register-container">
      <div className="form-container">
        <h1>Daftar Admin</h1>
        <p>Isi data diri Anda dengan benar!</p>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Nama Lengkap:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <ul style={{ color: 'gray', fontSize: '14px', marginTop: '5px' }}>
              <li>Password harus memiliki minimal 4 karakter.</li>
              <li>Gunakan kombinasi huruf dan angka untuk keamanan lebih baik.</li>
            </ul>
          </div>
          <button type="submit" className="btn btn-primary">
            Daftar
          </button>
        </form>
        {errorMessage && (
          <p className="error-message" style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default DaftarAdmin;
