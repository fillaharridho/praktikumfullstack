// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MahasiswaList from './components/MahasiswaList';
import MatakuliahList from './components/MatakuliahList';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Mahasiswa</Link> | <Link to="/matakuliah">Matakuliah</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MahasiswaList />} />
        <Route path="/matakuliah" element={<MatakuliahList />} />
      </Routes>
    </Router>
  );
};

export default App;
