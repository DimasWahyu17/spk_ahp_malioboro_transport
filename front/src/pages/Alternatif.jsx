    import React,{useEffect, useState} from "react";
    import axios from "axios";

    const Alternatif = () => {
        const [rows, setRows] = useState([]);
        const [query, setQuery] = useState('');
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState('');
        // const [deleteDialog, setDeleteDialog] = useState({ open: false, id: null });
        // const navigate = useNavigate();
    

        useEffect(() => {
            const fetchData = async () => {
                try {
                    setLoading(true);
                    const result = await axios.get(`http://127.0.0.1:5000/alternatives`);
                    setRows(result.data);
                } catch (err) {
                    setError('Error fetching data');
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }, []);

        return (
            <div className="container">
                <h1 className="mt-4">Alternatif</h1>
                <hr />
                <button type="button" className="btn btn-primary mb-4"><i class="bi bi-plus-circle-fill me-1"></i>Tambah</button>
                <table className="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama</th>
                            
                            <th scope="col">aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                        
                                <td>{row.nama}</td>
                            
                            <td>
                                <button type="button" class="btn btn-warning me-2"><i class="bi bi-pencil-square"></i></button>
                                <button type="button" class="btn btn-danger"><i class="bi bi-trash3-fill"></i></button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    export default Alternatif;
    // import React, { useState, useEffect } from 'react';
    // import axios from 'axios';
    
    // const Alternatif = () => {
    //     const [rows, setRows] = useState([]);
    //     const [kode, setKode] = useState('');
    //     const [nama, setNama] = useState('');
    //     const [error, setError] = useState('');
    //     const [success, setSuccess] = useState('');
    //     const [loading, setLoading] = useState(true);
    
    //     useEffect(() => {
    //         const fetchData = async () => {
    //             try {
    //                 setLoading(true);
    //                 const result = await axios.get('http://127.0.0.1:5000/alternatives');
    //                 setRows(result.data);
    //             } catch (err) {
    //                 setError('Error fetching data');
    //             } finally {
    //                 setLoading(false);
    //             }
    //         };
    //         fetchData();
    //     }, []);
    
    //     const handleSubmit = async (e) => {
    //         e.preventDefault();
    //         try {
    //             await axios.post('http://127.0.0.1:5000/alternatives', { kode, nama });
    //             setSuccess('Data berhasil ditambahkan!');
    //             setError('');
    //             setKode('');
    //             setNama('');
    //             const result = await axios.get('http://127.0.0.1:5000/alternatives');
    //             setRows(result.data);
    //         } catch (err) {
    //             setError('Gagal menambahkan data!');
    //             setSuccess('');
    //         }
    //     };
    
    //     const handleDelete = async (id) => {
    //         try {
    //             await axios.delete(`http://127.0.0.1:5000/alternatives`);
    //             setSuccess('Data berhasil dihapus!');
    //             const result = await axios.get('http://127.0.0.1:5000/alternatives');
    //             setRows(result.data);
    //         } catch (err) {
    //             setError('Gagal menghapus data!');
    //         }
    //     };
    
    //     return (
    //         <div className="container">
    //             <h1 className="mt-4">Alternatif</h1>
    //             <hr />
    //             {error && <p style={{ color: 'red' }}>{error}</p>}
    //             {success && <p style={{ color: 'green' }}>{success}</p>}
    //             <form onSubmit={handleSubmit} className="mb-4">
    //                 <div className="form-group">
    //                     <label>Kode <span className="text-danger">*</span></label>
    //                     <input className="form-control" type="text" name="kode" value={kode} onChange={(e) => setKode(e.target.value)} required />
    //                 </div>
    //                 <div className="form-group">
    //                     <label>Nama Alternatif <span className="text-danger">*</span></label>
    //                     <input className="form-control" type="text" name="nama" value={nama} onChange={(e) => setNama(e.target.value)} required />
    //                 </div>
    //                 <div className="form-group mt-3">
    //                     <button className="btn btn-primary me-2" type="submit">
    //                         Simpan
    //                     </button>
    //                 </div>
    //             </form>
    //             {loading ? (
    //                 <p>Loading...</p>
    //             ) : (
    //                 <table className="table table-success table-striped">
    //                     <thead>
    //                         <tr>
    //                             <th scope="col">No</th>
    //                             <th scope="col">Kode</th>
    //                             <th scope="col">Nama</th>
    //                             <th scope="col">Keterangan</th>
    //                             <th scope="col">Total</th>
    //                             <th scope="col">Rank</th>
    //                             <th scope="col">Aksi</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {rows.map((row, index) => (
    //                             <tr key={index}>
    //                                 <td>{index + 1}</td>
    //                                 <td>{row.kode_alternatif}</td>
    //                                 <td>{row.nama_alternatif}</td>
    //                                 <td>{row.keterangan}</td>
    //                                 <td>{row.total}</td>
    //                                 <td>{row.rank}</td>
    //                                 <td>
    //                                     <button type="button" className="btn btn-warning me-2">
    //                                         <i className="bi bi-pencil-square"></i>
    //                                     </button>
    //                                     <button type="button" className="btn btn-danger" onClick={() => handleDelete(row.id)}>
    //                                         <i className="bi bi-trash3-fill"></i>
    //                                     </button>
    //                                 </td>
    //                             </tr>
    //                         ))}
    //                     </tbody>
    //                 </table>
    //             )}
    //         </div>
    //     );
    // };
    
    // export default Alternatif;
    