import React, { useEffect, useState } from 'react';
import facebookIcon from '../assets/icon/fb.png';
import twitterIcon from '../assets/icon/tw.png';
import instagramIcon from '../assets/icon/ig.png';
import { Link } from 'react-router-dom';
import './Footer.css';

const Home = () => {
  const [showMasukDropdown, setShowMasukDropdown] = useState(false);
  const [showDaftarDropdown, setShowDaftarDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarResponsive');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  // Tutup dropdown hanya kalau klik berada di luar SEMUA .dropdown-container
  const handleOutsideClick = (event) => {
    if (!event.target.closest('.dropdown-container')) {
      setShowMasukDropdown(false);
      setShowDaftarDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMasukDropdown = () => {
    setShowMasukDropdown((prev) => !prev);
    setShowDaftarDropdown(false);
  };

  const toggleDaftarDropdown = () => {
    setShowDaftarDropdown((prev) => !prev);
    setShowMasukDropdown(false);
  };

  return (
    <div>
      {/* Navigation */}
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${isScrolled ? 'bg-dark-blue shadow-sm' : 'bg-transparent'}`}
        id="mainNav"
        style={{ maxWidth: '1600px', transition: 'background-color 0.3s ease' }}
      >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <img
              src="logo6.png"
              alt="Logo"
              className="navbar-logo"
              style={{ width: '80px', height: 'auto' }}
            />
            <span className="navbar-title ms-2">
              Malioboro Transport
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link text-white font-weight-bold"
                  href="#home"
                  onClick={handleLinkClick} // Menutup navbar setelah klik
                >
                  Beranda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white font-weight-bold" href="#about">
                  Informasi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white font-weight-bold" href="#contact">
                  Kontak
                </a>
              </li>

              <li className="nav-item ms-3 dropdown-container position-relative">
                <button className="btn btn-primary" onClick={toggleMasukDropdown}>
                  Masuk
                </button>
                {showMasukDropdown && (
                  <div
                    className="dropdown-menu show position-absolute"
                    style={{
                      top: '100%',
                      right: 0,
                      fontSize: '0.9rem',
                      padding: '10px',
                    }}
                  >
                    <Link to="/login-admin" className="dropdown-item">
                      Admin
                    </Link>
                    <Link to="/login-user" className="dropdown-item">
                      Pengguna
                    </Link>
                  </div>
                )}
              </li>

              <li className="nav-item ms-3 dropdown-container position-relative">
                <button
                  className="btn"
                  style={{
                    backgroundColor: '#cccccc',
                    color: '#000',
                  }}
                  onClick={toggleDaftarDropdown}
                >
                  Daftar
                </button>
                {showDaftarDropdown && (
                  <div
                    className="dropdown-menu show position-absolute"
                    style={{
                      top: '100%',
                      left: 30,
                      fontSize: '0.9rem',
                      padding: '10px',
                    }}
                  >
                    <Link to="/daftar-admin" className="dropdown-item">
                      Admin
                    </Link>
                    <Link to="/daftar-pengguna" className="dropdown-item">
                      Pengguna
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>


      {/* Masthead */}
      <header className="masthead" id="home">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-start">
            <div className="col-lg-8 masthead-content">
              <div className="overlay">
                {/* Bingkai Solusi */}
                <div
                  className="solusi-bingkai"
                  style={{
                    padding: '15px',
                    marginBottom: '30px', // Jarak antara bingkai dan elemen berikutnya
                  }}
                >
                  <h1
                    className="overlay-title"
                    style={{
                      textAlign: 'center', // Menjadikan teks di tengah
                      fontSize: '29px', // Ukuran teks dapat disesuaikan
                      fontWeight: 'bold', // Menonjolkan teks
                    }}
                  >
                    Solusi Transportasi Tanpa Batas
                  </h1>
                  <hr className="overlay-divider" />
                  <p className="overlay-text" style={{ textAlign: 'center' }}>
                    Dari perjalanan singkat hingga jauh, kami siap mengantarkan Anda ke tujuan dengan rekomendasi terbaik.
                  </p>
                </div>
              </div>

              {/* Tombol Temukan Lebih Banyak */}
              <div
                className="temukan-bingkai"
                style={{
                  textAlign: 'center',
                  marginTop: '20px', // Tambahkan jarak antara tombol dan overlay
                }}
              >
                <a
                  href="#about"
                  className="overlay-btn"
                  style={{
                    padding: '10px 20px',
                    fontSize: '14px',
                    borderRadius: '5px',
                    color: '#fff',
                    backgroundColor: '#64B5F6', // Warna awal tombol
                    textDecoration: 'none',
                    cursor: 'pointer',
                    display: 'inline-block',
                    transition: 'background-color 0.3s ease, transform 0.1s ease', // Tambahkan transisi untuk efek klik
                  }}
                  onMouseDown={(e) => {
                    e.target.style.backgroundColor = '#42A5F5'; // Warna saat tombol ditekan
                    e.target.style.transform = 'scale(0.95)'; // Sedikit mengecilkan tombol
                  }}
                  onMouseUp={(e) => {
                    e.target.style.backgroundColor = '#64B5F6'; // Kembali ke warna awal
                    e.target.style.transform = 'scale(1)'; // Kembali ke ukuran normal
                  }}
                >
                  Temukan Lebih Banyak
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* About Section */}
      <section
        className="page-section"
        id="about"
        style={{
          background: 'linear-gradient(to right, rgb(133, 186, 238), rgb(199, 206, 208))',
          paddingBottom: '60px',
          paddingTop: '80px',
        }}
      >
        <div className="container px-4 px-lg-5">
          <header className="text-center mb-5 mt-5">
            <div>
              <h1
                style={{
                  border: '3px solid #fff',
                  padding: '10px 20px',
                  display: 'inline-block',
                  borderRadius: '8px',
                  color: '#000',
                }}
              >
                Informasi
              </h1>
            </div>
          </header>

          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg p-4 equal-height" data-aos="fade-up" style={{ transition: 'all 0.3s ease', borderRadius: '15px', border: '1px solid #007bff', maxWidth: '700px', marginBottom: '30px' }}>
                <h2 className="mb-4 text-primary text-center">Tentang Kami</h2>
                <p>
                  Best Transport hadir sebagai penyedia layanan rekomendasi transportasi terintegrasi
                  yang berkomitmen menghadirkan pengalaman perjalanan nyaman, aman, dan berkesan bagi
                  setiap pengunjung Malioboro. Kami menawarkan 5 pilihan kendaraan berkualitas yang
                  dapat Anda sesuaikan dengan kebutuhan dan preferensi perjalanan. Dengan fokus pada
                  keamanan, kenyamanan, tarif terjangkau, serta kepedulian terhadap lingkungan, kami
                  memastikan perjalanan Anda menuju Malioboro akan terasa lancar, menyenangkan, dan bebas
                  kekhawatiran.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg p-4 equal-height" data-aos="fade-up" style={{ transition: 'all 0.3s ease', borderRadius: '15px', border: '1px solid #007bff', maxWidth: '700px', marginBottom: '30px' }}>
                <h2 className="mb-4 text-primary text-center">Misi</h2>
                <p>
                  Misi kami adalah menjadi platform rekomendasi transportasi terpercaya, yang memberikan
                  pilihan terbaik sesuai kebutuhan setiap pengguna. Kami membantu masyarakat Yogyakarta
                  dan wisatawan menemukan opsi transportasi yang efisien, aman, dan nyaman. Best Transport
                  hadir untuk memastikan perjalanan Anda menjadi lebih mudah dan berkesan, dengan
                  kendaraan yang tepat untuk perjalanan menuju Malioboro dan sekitarnya. Kami percaya
                  bahwa pengalaman perjalanan yang positif dimulai dari pilihan transportasi yang tepat.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg p-4 equal-height" data-aos="fade-up" style={{ transition: 'all 0.3s ease', borderRadius: '15px', border: '1px solid #007bff', maxWidth: '700px', marginBottom: '30px' }}>
                <h2 className="mb-4 text-primary text-center">Visi</h2>
                <p>
                  Visi kami adalah menjadi penyedia layanan rekomendasi transportasi terkemuka yang memberikan saran kendaraan yang cocok agar perjalanan terasa nyaman dan aman untuk setiap pengguna.
                  Kami bertujuan untuk menghubungkan masyarakat Yogyakarta dan wisatawan dengan solusi
                  transportasi yang nyaman, efisien, dan aman, sambil mendukung pertumbuhan pariwisata lokal.
                  Melalui inovasi dan komitmen kami, kami berusaha untuk menjadi pilihan utama bagi semua orang yang mencari transportasi yang andal dan mudah diakses di sekitar Malioboro dan daerah sekitarnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternatif Pilihan Section */}
      <section className="page-section" id="services" style={{ background: 'linear-gradient(to right, rgb(133, 186, 238), rgb(199, 206, 208))', paddingBottom: '60px' }}>
        <div className="container-fluid d-flex flex-column align-items-center py-5">
          <header className="text-center mb-4 mt-5">
            <h1>Alternatif Pilihan</h1>
            <p>Pengalaman perjalanan yang nyaman dan aman menanti Anda!</p>
          </header>
          <div className="container mt-5">
            <div id="vehicleCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {/* Slide 1 */}
                <div className="carousel-item active">
                  <div className="card h-100 shadow-sm text-center" style={{ width: '1000px', height: '750px', margin: '0 auto' }}>
                    <img src="/images/vespa.jpg" className="card-img-top img-fluid" alt="Motor" style={{ height: '650px', width: '1000px', objectFit: 'cover' }} />
                    <div className="card-body">
                      <h5 className="card-title">Motor</h5>
                      <p className="card-text">Lebih praktis untuk perjalanan cepat dan menghindari kemacetan.</p>
                    </div>
                  </div>
                </div>
                {/* Slide 2 */}
                <div className="carousel-item">
                  <div className="card h-100 shadow-sm text-center" style={{ width: '1000px', height: '750px', margin: '0 auto' }}>
                    <img src="/images/mobil.jpg" className="card-img-top img-fluid" alt="Mobil" style={{ height: '650px', width: '1000px', objectFit: 'cover' }} />
                    <div className="card-body">
                      <h5 className="card-title">Mobil</h5>
                      <p className="card-text">Memudahkan akses langsung dan memungkinkan wisatawan membawa barang lebih banyak.</p>
                    </div>
                  </div>
                </div>
                {/* Slide 3 */}
                <div className="carousel-item">
                  <div className="card h-100 shadow-sm text-center" style={{ width: '1000px', height: '750px', margin: '0 auto' }}>
                    <img src="/images/sepeda.jpg" className="card-img-top img-fluid" alt="Sepeda" style={{ height: '650px', width: '1000px', objectFit: 'cover' }} />
                    <div className="card-body">
                      <h5 className="card-title">Sepeda</h5>
                      <p className="card-text">Menawarkan pengalaman berkeliling yang lebih ramah lingkungan dan sehat.</p>
                    </div>
                  </div>
                </div>
                {/* Slide 4 */}
                <div className="carousel-item">
                  <div className="card h-100 shadow-sm text-center" style={{ width: '1000px', height: '750px', margin: '0 auto' }}>
                    <img src="/images/Minibus.jpg" className="card-img-top img-fluid" alt="Mini Bus" style={{ height: '650px', width: '1000px', objectFit: 'cover' }} />
                    <div className="card-body">
                      <h5 className="card-title">Mini Bus</h5>
                      <p className="card-text">Ideal untuk rombongan besar, menyediakan kenyamanan dan kapasitas yang memadai.</p>
                    </div>
                  </div>
                </div>
                {/* Slide 5 */}
                <div className="carousel-item">
                  <div className="card h-100 shadow-sm text-center" style={{ width: '1000px', height: '750px', margin: '0 auto' }}>
                    <img src="/images/sice.jpg" className="card-img-top img-fluid" alt="Bus" style={{ height: '650px', width: '1000px', objectFit: 'cover' }} />
                    <div className="card-body">
                      <h5 className="card-title">Bus</h5>
                      <p className="card-text">Sangat cocok untuk keluarga atau kelompok kecil, memberikan fleksibilitas dalam perjalanan.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#vehicleCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#vehicleCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="page-section"
        id="contact"
        style={{
          background: 'linear-gradient(to right, rgb(133, 186, 238), rgb(199, 206, 208))',
          padding: '4rem 0',
        }}
      >
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div className="col-lg-6">
              <div className="card shadow-lg">
                <div
                  className="card-body"
                  style={{
                    background: 'Light gray',
                    borderRadius: '1rem',
                    color: 'black',
                  }}
                >
                  <div className="text-center mb-4">
                    <h2 className="mt-0">Hubungi Kami</h2>
                    <p className="text-black mb-4">
                      Kirimkan pesan Anda, kami akan segera merespon.
                    </p>
                  </div>
                  <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        autoComplete="name"
                        type="text"
                        placeholder="Masukkan nama Anda..."
                        required
                        style={{
                          borderRadius: '1rem',
                          color: 'black',
                          paddingTop: '3rem',
                        }}
                      />
                      <label htmlFor="name" style={{ color: 'black' }}>Nama Lengkap</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        autoComplete="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        style={{
                          borderRadius: '1rem',
                          color: 'black',
                          paddingTop: '3rem',
                        }}
                      />
                      <label htmlFor="email" style={{ color: 'black' }}>Alamat Email</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        type="tel"
                        placeholder="(123) 456-7890"
                        required
                        style={{
                          borderRadius: '1rem',
                          color: 'black',
                          paddingTop: '3rem',
                        }}
                      />
                      <label htmlFor="phone" style={{ color: 'black' }}>Nomor HP</label>
                    </div>
                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Tulis pesan Anda di sini..."
                        style={{
                          height: '10rem',
                          borderRadius: '1rem',
                          color: 'black',
                          paddingTop: '2rem',
                        }}
                        required
                      ></textarea>
                      <label htmlFor="message" style={{ color: 'black' }}>Pesan</label>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-light btn-xl"
                        id="submitButton"
                        type="submit"
                        style={{
                          background: 'gray',
                          color: 'rgb(5, 15, 25)',
                          borderRadius: '2rem',
                        }}
                      >
                        Kirim
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-item">
              <h3 className="footer-title">Malioboro Transport</h3>
              <p> website berbasis rekomendasi transportasi terbaik yang dirancang untuk memudahkan pengguna mencari transportasi yang sesuai</p>
            </div>
            <div className="footer-item">
              <h3 className="footer-title">TIM KAMI</h3>
              <div>Dimas Wahyu</div>
              <div>Ananda Ferandita</div>
              <div>Lyra Syakbaniah</div>
              <div>Anjelika Putri</div>
              <div>Krisna Wira</div>
            </div>
            <div className="footer-item">
              <h3 className="footer-title">Technovation FTTI 2024</h3>
              <p> Gelar karya Mahasiswa Universitas Jenderal Achmad Yani Yogyakarta, informatika</p>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="text-white">Malioboro Transport™ © 2024</div>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" className="footer-icon" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="footer-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" className="footer-icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>

  );
};


export default Home;