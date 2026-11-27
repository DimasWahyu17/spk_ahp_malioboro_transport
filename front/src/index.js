import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';

// Inisialisasi AOS (Animate On Scroll)
AOS.init();

// Membuat root untuk React 18
const rootElement = document.getElementById('root');

// Pastikan elemen root ada di HTML sebelum mencoba untuk mengaksesnya
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  // Render aplikasi di dalam <React.StrictMode> dan BrowserRouter
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

// Jika ingin mengukur kinerja aplikasi, kamu bisa menggunakan reportWebVitals
reportWebVitals();
