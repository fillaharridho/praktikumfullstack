// src/components/MahasiswaList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MahasiswaList = () => {
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/mahasiswa');
      setMahasiswa(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Daftar Mahasiswa</h1>
      <ul>
        {mahasiswa.map((mhs) => (
          <li key={mhs._id}>{mhs.nama} - {mhs.jurusan} ({mhs.angkatan})</li>
        ))}
      </ul>
    </div>
  );
};

export default MahasiswaList;
