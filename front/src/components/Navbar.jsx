import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminLayout.css';

const Navbar = () => {
  const [showPerbandingan, setShowPerbandingan] = useState(false);
  const navigate = useNavigate();

  const closeDropdowns = () => setShowPerbandingan(false);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('adminUsername');
    navigate('/login-admin');
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
        height: '56px',
        background: 'var(--admin-surface)',
        borderBottom: '1px solid var(--admin-border)',
        fontFamily: 'var(--admin-font)',
      }}
    >
      <Link
        to="/criterias"
        onClick={closeDropdowns}
        style={{ fontWeight: 700, fontSize: '15px', color: 'var(--admin-text)', textDecoration: 'none' }}
      >
        AHP System
      </Link>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center', fontSize: '14px' }}>
        <Link to="/criterias" onClick={closeDropdowns} style={{ color: 'var(--admin-text-muted)', textDecoration: 'none' }}>
          Kriteria
        </Link>
        <Link to="/alternatives" onClick={closeDropdowns} style={{ color: 'var(--admin-text-muted)', textDecoration: 'none' }}>
          Alternatif
        </Link>

        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowPerbandingan((prev) => !prev)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--admin-text-muted)',
              fontSize: '14px',
              fontFamily: 'var(--admin-font)',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Perbandingan ▾
          </button>
          {showPerbandingan && (
            <div
              className="admin-card"
              style={{ position: 'absolute', top: '28px', left: 0, minWidth: '190px', zIndex: 10, padding: '8px' }}
            >
              <Link
                to="/critratios"
                onClick={closeDropdowns}
                style={{ display: 'block', padding: '8px 6px', color: 'var(--admin-text)', textDecoration: 'none', fontSize: '14px' }}
              >
                Perbandingan Kriteria
              </Link>
              <Link
                to="/altratios"
                onClick={closeDropdowns}
                style={{ display: 'block', padding: '8px 6px', color: 'var(--admin-text)', textDecoration: 'none', fontSize: '14px' }}
              >
                Perbandingan Alternatif
              </Link>
            </div>
          )}
        </div>

        <Link to="/hitung" onClick={closeDropdowns} style={{ color: 'var(--admin-text-muted)', textDecoration: 'none' }}>
          Hasil
        </Link>
        <Link to="/user" onClick={closeDropdowns} style={{ color: 'var(--admin-text-muted)', textDecoration: 'none' }}>
          User
        </Link>

        <button className="admin-btn admin-btn-outline admin-btn-sm" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;