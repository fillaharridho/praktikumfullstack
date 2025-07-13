// src/components/MatakuliahList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MatakuliahList = () => {
  const [matakuliah, setMatakuliah] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/matakuliah');
      setMatakuliah(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Daftar Matakuliah</h1>
      <ul>
        {matakuliah.map((mk) => (
          <li key={mk._id}>{mk.nama} - {mk.kode} ({mk.sks} SKS)</li>
        ))}
      </ul>
    </div>
  );
};

export default MatakuliahList;
