import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../components/AdminLayout.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Hitung = () => {
    const [ranking, setRanking] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRanking = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/calculate');
                // Urutkan dari skor tertinggi
                const sorted = [...response.data].sort((a, b) => b.score - a.score);
                setRanking(sorted);
            } catch (err) {
                setError('Gagal memuat hasil perhitungan. Pastikan server backend berjalan.');
            } finally {
                setLoading(false);
            }
        };

        fetchRanking();
    }, []);

    const chartData = {
        labels: ranking.map((item) => item.name),
        datasets: [
            {
                label: 'Skor Alternatif',
                data: ranking.map((item) => item.score),
                backgroundColor: ranking.map((_, index) =>
                    index === 0 ? '#D98E04' : 'rgba(47, 111, 109, 0.35)'
                ),
                borderColor: ranking.map((_, index) =>
                    index === 0 ? '#D98E04' : '#2F6F6D'
                ),
                borderWidth: 1,
                borderRadius: 4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: '#E4E7EC' },
                title: { display: true, text: 'Skor' },
            },
            x: {
                grid: { display: false },
            },
        },
    };

    const topScore = ranking[0]?.score;

    return (
        <div className="admin-page">
            <div className="admin-page-header">
                <h1>Hasil Perhitungan AHP</h1>
                <p>Perangkingan alternatif berdasarkan kriteria dan perbandingan yang sudah diinput.</p>
            </div>

            {loading && (
                <div className="admin-card">
                    <div className="admin-empty">Menghitung peringkat...</div>
                </div>
            )}

            {error && (
                <div className="admin-card">
                    <div className="admin-empty" style={{ color: '#B42318' }}>{error}</div>
                </div>
            )}

            {!loading && !error && (
                <>
                    {topScore !== undefined && (
                        <div className="admin-card" style={{ marginBottom: '20px' }}>
                            <p style={{ margin: 0, fontSize: '13px', color: 'var(--admin-text-muted)' }}>
                                Rekomendasi terbaik
                            </p>
                            <p style={{ margin: '4px 0 0', fontSize: '22px', fontWeight: 700 }}>
                                {ranking[0].name}
                                <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--admin-text-muted)', marginLeft: '10px' }}>
                                    skor {topScore.toFixed(4)}
                                </span>
                            </p>
                        </div>
                    )}

                    <div className="admin-card">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Peringkat</th>
                                    <th>Alternatif</th>
                                    <th className="num">Skor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ranking.map((item, index) => (
                                    <tr key={item.id} className={index === 0 ? 'admin-rank-row-top' : ''}>
                                        <td>
                                            <span className={`admin-rank-badge ${index === 0 ? 'admin-rank-badge-top' : ''}`}>
                                                {index + 1}
                                            </span>
                                        </td>
                                        <td>{item.name}</td>
                                        <td className="num">{item.score.toFixed(4)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="admin-card">
                        <p style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: 600 }}>
                            Grafik Perangkingan
                        </p>
                        <Bar key={JSON.stringify(chartData)} data={chartData} options={chartOptions} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Hitung;