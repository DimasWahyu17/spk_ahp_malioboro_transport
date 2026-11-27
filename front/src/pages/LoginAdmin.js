import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginAdmin.css';

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Validasi login (contoh sederhana)
    if (username === 'admin' && password === 'admin123') {
      // Simpan status login admin, dibaca oleh ProtectedRoute
      localStorage.setItem('isAdminLoggedIn', 'true');
      localStorage.setItem('adminUsername', username);
      setErrorMessage('');
      navigate('/criterias');
    } else {
      setErrorMessage('Username atau password salah!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-heading">Login Admin</h2>
        <p className="login-subheading">Silakan masukkan data Anda untuk masuk.</p>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="login-label" htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="login-label" htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Kirim</button>
        </form>

        {errorMessage && (
          <p className="error-message">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginAdmin;