# SPK AHP – Malioboro Transport

Sistem Pendukung Keputusan (SPK) untuk merekomendasikan moda transportasi menuju kawasan Malioboro, Yogyakarta, menggunakan metode **Analytic Hierarchy Process (AHP)**.

Proyek ini punya dua sisi:
- **Sisi pengguna**: daftar/masuk, melihat informasi layanan, dan opsi transportasi.
- **Sisi admin**: mengelola kriteria, alternatif, perbandingan berpasangan (pairwise comparison), serta melihat hasil perangkingan AHP dalam bentuk tabel dan grafik.

## Tech Stack

**Frontend**
- React (Create React App)
- React Router
- Axios
- Chart.js + react-chartjs-2
- Bootstrap

**Backend**
- Flask (Python)
- Flask-RESTful
- Flask-SQLAlchemy + Flask-Marshmallow
- MySQL (via PyMySQL)
- Werkzeug (password hashing)

## Struktur Folder

```
spk_ahp_malioboro_transport/
├── front/           # Aplikasi React (frontend)
├── backend1/        # API Flask (backend)
├── database/
│   └── ahp3.sql     # Struktur tabel + data contoh (kriteria, alternatif, user demo)
└── README.md
```

## Alur Aplikasi

| Peran | Alur |
|---|---|
| Pengguna | Buka halaman utama → daftar/masuk → lihat informasi transportasi |
| Admin | Masuk sebagai admin → kelola Kriteria & Alternatif → isi Perbandingan Berpasangan → lihat Hasil Perangkingan AHP |

Halaman admin dilindungi (*protected route*) — hanya bisa diakses setelah login sebagai admin.

## Menjalankan Secara Lokal

### 1. Database

Buat database MySQL bernama `ahp3`, lalu import `database/ahp3.sql`:

```bash
mysql -u root -e "CREATE DATABASE ahp3 CHARACTER SET utf8mb4"
mysql -u root ahp3 < database/ahp3.sql
```

### 2. Backend (Flask)

```bash
cd backend1
python -m venv .venv
.venv\Scripts\Activate.ps1      # Windows (PowerShell)
pip install -r requirements.txt
python run.py
```

Backend berjalan di `http://127.0.0.1:5000`.

Sesuaikan koneksi database di `config.py` bila perlu:

```python
SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:@localhost:3306/ahp3'
```

### 3. Frontend (React)

```bash
cd front
npm install
npm start
```

Frontend berjalan di `http://localhost:3000`.

## Akun Demo

| Peran | Email | Password |
|---|---|---|
| Admin | admin1@gmail.com | admin123 |
| User  | user1@gmail.com  | (sesuai yang didaftarkan) |

> Catatan: akun di atas hanya untuk keperluan demo/uji coba, bukan data pengguna sungguhan.

## Screenshot

_(tambahkan screenshot halaman utama, halaman admin, dan hasil perhitungan AHP di sini)_

## Rencana Pengembangan

- [ ] Autentikasi admin terhubung penuh ke backend (saat ini masih contoh sederhana di sisi frontend)
- [ ] Validasi dan proteksi API lebih lanjut
- [ ] Deploy ke hosting (Vercel/Netlify untuk frontend, Railway/Render untuk backend)

---
Dibuat sebagai proyek SPK AHP — Teknik Informatika, Universitas Jenderal Achmad Yani Yogyakarta.
