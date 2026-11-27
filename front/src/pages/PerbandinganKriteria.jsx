import React, { useState, useEffect } from 'react';

function PerbandinganKriteria() {
    const [data, setData] = useState([]); // Data perbandingan
    const [criterias, setCriterias] = useState({}); // Data kriteria dalam bentuk objek untuk akses cepat

    // Fungsi untuk mengedit data
    const handleEdit = (id) => {
        console.log(`Edit data dengan ID: ${id}`);
    };

    // Fungsi untuk menghapus data
    const handleDelete = (id) => {
        console.log(`Hapus data dengan ID: ${id}`);
    };

    // Fetch data dari API
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data kriteria
                const responseCriterias = await fetch('http://127.0.0.1:5000/criterias');
                const criteriasData = await responseCriterias.json();

                // Konversi ke objek untuk akses cepat
                const criteriasMap = {};
                criteriasData.forEach((c) => {
                    criteriasMap[c.id] = c.nama;
                });
                setCriterias(criteriasMap);
                console.log("Data Kriteria:", criteriasMap); // DEBUG LOGGING

                // Fetch data perbandingan
                const responseRatios = await fetch('http://127.0.0.1:5000/crit_ratios');
                const dataRatios = await responseRatios.json();
                setData(dataRatios);
                console.log("Data Rasio:", dataRatios); // DEBUG LOGGING

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <h1 className="mt-4">Perbandingan Kriteria</h1>
            <hr />
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Kriteria 1</th>
                        <th scope="col">Kriteria 2</th>
                        <th scope="col">Nilai Perbandingan</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((row, index) => (
                            <tr key={row.id}>
                                <td>{index + 1}</td>
                                <td>{row.kriteria1}</td>
                                <td>{row.kriteria2}</td>

                                <td>{row.value || "N/A"}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-warning me-2"
                                        onClick={() => handleEdit(row.id)}
                                    >
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(row.id)}
                                    >
                                        <i className="bi bi-trash3-fill"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">
                                Tidak ada data yang tersedia.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default PerbandinganKriteria;
