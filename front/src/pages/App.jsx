import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import KriteriaPage from './pages/KriteriaPage';
import AlternatifPage from './pages/AlternatifPage';
import HitungPage from './pages/HitungPage';
import HomePage from './pages/Home'; // Ensure you import HomePage
import UserTambah from './pages/UserTambah';
import User from './page/User';
import PerbandinganKriteria from './pages/PerbandinganKriteria';
import PerbandinganAlternatif from './pages/PerbandinganAlternatif';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/criterias" element={<KriteriaPage />} />
                <Route path="/alternatives" element={<AlternatifPage />} />
                <Route path="/critratios" element={<PerbandinganKriteria />} />
                <Route path="/altratios" element={<PerbandinganAlternatif />} />
                <Route path="/hitung" element={<HitungPage />} />
                <Route path="/user/tambah" element={<UserTambah />} />
                <Route path="/user" element={<User />} />
                
                
            </Routes>
        </Router>
    );
};

export default App;