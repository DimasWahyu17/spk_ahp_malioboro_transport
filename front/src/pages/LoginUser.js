import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Kirim data login ke backend
      const response = await axios.post('http://127.0.0.1:5000/login', {
        email,
        password,
      });

      // Cek status respons dan navigasikan sesuai role
      if (response.status === 200) {
        const { role, username } = response.data;

        // Simpan data login supaya halaman tujuan (TransportasiPage, dll.) tahu user sudah login
        localStorage.setItem('loggedInUser', username || email);
        localStorage.setItem('role', role);

        alert('Login berhasil!');
        setErrorMessage('');

        // Navigasi berdasarkan role
        if (role === 'admin') {
          navigate('/admin-dashboard');
        } else if (role === 'user') {
          navigate('/transportasi-page');
        } else {
          setErrorMessage('Role tidak dikenali. Hubungi administrator.');
        }
      }
    } catch (error) {
      // Tangani error login dari server
      if (error.response) {
        const { status, data } = error.response;
        if (status === 401) {
          setErrorMessage('Email atau password salah. Silakan coba lagi.');
        } else {
          setErrorMessage(data?.message || 'Terjadi kesalahan. Silakan coba lagi nanti.');
        }
      } else {
        setErrorMessage('Tidak dapat terhubung ke server. Pastikan server berjalan.');
      }
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to bottom, #a2c2e8, #f0f8ff)',
      }}
    >
      <div
        style={{
          width: '400px',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#ffffff',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '10px', fontSize: '24px' }}>Login Pengguna</h1>
        <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px', color: '#555' }}>
          Isi data diri anda dengan benar!
        </p>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px' }}>
            <label
              htmlFor="email"
              style={{ display: 'block', marginBottom: '8px', fontSize: '16px' }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                fontSize: '16px',
                boxSizing: 'border-box',
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label
              htmlFor="password"
              style={{ display: 'block', marginBottom: '8px', fontSize: '16px' }}
            >
              Kata Sandi:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                fontSize: '16px',
                boxSizing: 'border-box',
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#007bff',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Kirim
          </button>
        </form>
        {errorMessage && (
          <p
            style={{
              marginTop: '20px',
              color: 'red',
              textAlign: 'center',
              fontSize: '14px',
            }}
          >
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginUser;