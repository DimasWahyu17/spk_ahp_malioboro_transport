import React, { useEffect, useState } from "react";
import axios from "axios";

const Kriteria = () => {
    const [rows, setRows] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await axios.get(`http://127.0.0.1:5000/criterias`);
                setRows(result.data);
            } catch (err) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [query]);

    return (
        <div className="container">
            <h1 className="mt-4">Kriteria</h1>
            <hr />
            <button type="button" className="btn btn-primary mb-4">
                <i className="bi bi-plus-circle-fill me-1"></i>Tambah
            </button>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama Kriteria</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                     {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                        
                            <td>{row.nama}</td>
                        <td>
                                    <button type="button" className="btn btn-warning me-2">
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button" className="btn btn-danger">
                                        <i className="bi bi-trash3-fill"></i>
                                    </button>
                                </td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>
        </div>
    );
};

export default Kriteria;
