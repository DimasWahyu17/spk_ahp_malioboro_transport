import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png'; // Pastikan path logo sudah benar
import './TransportasiPage.css';

const transportOptions = [
  {
    id: 1,
    name: 'Motor',
    description: 'Sepeda motor bisa lebih efisien dan membantu mengurangi kemacetan. Di Yogyakarta, sepeda motor sangat fleksibel dalam menghadapi kondisi lalu lintas yang padat, terutama di sekitar Malioboro dan jalan sempit di kawasan wisata.',
    image: '/images/vespa.jpg',  // Pastikan path gambar sudah benar
  },
  {
    id: 2,
    name: 'Mobil',
    description: 'Mobil nyaman untuk membawa keluarga dan barang bawaan dengan lebih aman. Meskipun begitu, di pusat kota Yogyakarta, mobil bisa terkendala macet, terutama pada jam-jam sibuk.',
    image: '/images/mobil.jpg',  // Pastikan path gambar sudah benar
  },
  {
    id: 3,
    name: 'Sepeda',
    description: 'Sepeda adalah pilihan ramah lingkungan dan juga menyehatkan tubuh. Di Yogyakarta, bersepeda semakin populer, terutama di kawasan wisata dan sekitar Keraton.',
    image: '/images/sepeda.jpg',  // Pastikan path gambar sudah benar
  },
  {
    id: 4,
    name: 'Mini Bus',
    description: 'Mini bus cocok untuk perjalanan bersama rombongan kecil dengan kenyamanan ekstra. Di Yogyakarta, mini bus bisa digunakan untuk perjalanan wisata kelompok atau acara keluarga besar.',
    image: '/images/Minibus.jpg',  // Pastikan path gambar sudah benar
  },
  {
    id: 5,
    name: 'Bus',
    description: 'Bus sangat efisien untuk mengangkut penumpang dalam jumlah besar. Di Yogyakarta, bus sering digunakan untuk rute antar kota dan perjalanan jarak jauh.',
    image: '/images/sice.jpg',  // Pastikan path gambar sudah benar
  },
];

const TransportasiPage = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  // Mengambil data pengguna dari localStorage jika ada
  useEffect(() => {
    const storedName = localStorage.getItem('loggedInUser'); // Pastikan menggunakan key yang konsisten
    if (storedName) {
      setUserName(storedName);
    } else {
      navigate('/login-user');  // Jika tidak ada user yang login, arahkan ke login
    }
  }, [navigate]);

  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // Menghapus username dari localStorage
    setUserName(''); // Reset state userName
    navigate('/login-user');  // Arahkan kembali ke halaman login setelah logout
  };

  return (
    <div className="transportasi-container">
      {/* Header dengan logo dan nama perusahaan serta profil pengguna */}
      <header className="transportasi-header">
        <img src={logo} alt="Logo Perusahaan" className="logo" />
        <h2 className="company-name">Malioboro Transport</h2>
        
        {/* Profil Pengguna */}
        {userName ? (
          <div className="user-profile">
            <span className="username">{userName}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button className="login-btn" onClick={() => navigate('/login-user')}>Login</button>
        )}
      </header>

      {/* Judul Pemilihan */}
      <div className="transportasi-title">
        <h1>Pilih Kendaraan untuk Perjalanan ke Malioboro</h1>
      </div>

      <div className="transportasi-content">
        {transportOptions.map((option) => (
          <div key={option.id} className="transportasi-item">
            <div className="transportasi-image-container">
              <img src={option.image} alt={option.name} className="transportasi-image" />
            </div>
            <div className="transportasi-description">
              <h3 className="transportasi-name">{option.name}</h3>
              <p>{option.description}</p>
              <button className="btn btn-primary">Pilih {option.name}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransportasiPage;
