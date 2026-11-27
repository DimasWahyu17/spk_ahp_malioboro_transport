import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/AdminLayout.css';

const User = () => {
  const [rows, setRows] = useState([]);
  const [query, setQuery] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios(`http://127.0.0.1:5000/users`);
        setRows(result.data);
      } catch (error) {
        alert('Gagal memuat data pengguna.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/user/hapus/${id}`);
      setRows((prevRows) => prevRows.filter((row) => row.kode_user !== id));
      setShowConfirm(false);
    } catch (error) {
      alert('Gagal menghapus data pengguna.');
    }
  };

  const filteredRows = rows.filter((row) =>
    (row.nama_user || '').toLowerCase().includes(query.toLowerCase()) ||
    (row.user || '').toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Data User</h1>
        <p>Kelola akun yang terdaftar pada sistem.</p>
      </div>

      <div className="admin-card">
        <div className="admin-toolbar">
          <input
            className="admin-search"
            type="text"
            placeholder="Cari nama atau username..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <a className="admin-btn admin-btn-primary" href="/user/tambah">
            + Tambah User
          </a>
        </div>

        {loading ? (
          <div className="admin-empty">Memuat data...</div>
        ) : filteredRows.length === 0 ? (
          <div className="admin-empty">Belum ada user yang cocok dengan pencarian.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Kode</th>
                <th>Nama</th>
                <th>Username</th>
                <th>Level</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, index) => (
                <tr key={row.kode_user}>
                  <td>{index + 1}</td>
                  <td>{row.kode_user}</td>
                  <td>{row.nama_user}</td>
                  <td>{row.user}</td>
                  <td>{row.level}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <a
                        className="admin-btn admin-btn-outline admin-btn-sm"
                        href={`/user/ubah/${row.kode_user}`}
                      >
                        Ubah
                      </a>
                      <button
                        className="admin-btn admin-btn-danger admin-btn-sm"
                        onClick={() => {
                          setDeleteId(row.kode_user);
                          setShowConfirm(true);
                        }}
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showConfirm && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal">
            <h4>Hapus user ini?</h4>
            <p>Tindakan ini tidak bisa dibatalkan setelah dikonfirmasi.</p>
            <div className="admin-modal-actions">
              <button
                className="admin-btn admin-btn-outline admin-btn-sm"
                onClick={() => setShowConfirm(false)}
              >
                Batal
              </button>
              <button
                className="admin-btn admin-btn-danger admin-btn-sm"
                onClick={() => handleDelete(deleteId)}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;