const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/siakad');

// ===== Schema dan Model =====
const MahasiswaSchema = new mongoose.Schema({
  nama: String,
  jurusan: String,
  angkatan: String,
  email: String,
});

const MatakuliahSchema = new mongoose.Schema({
  nama: String,
  kode: String,
  sks: Number,
});

const Mahasiswa = mongoose.model('Mahasiswa', MahasiswaSchema);
const Matakuliah = mongoose.model('Matakuliah', MatakuliahSchema);

// ===== ROUTES MAHASISWA =====

// GET all
app.get('/mahasiswa', async (req, res) => {
  const data = await Mahasiswa.find();
  res.json(data);
});

// GET by ID
app.get('/mahasiswa/:id', async (req, res) => {
  const data = await Mahasiswa.findById(req.params.id);
  res.json(data);
});

// POST (Create)
app.post('/mahasiswa', async (req, res) => {
  const newMhs = new Mahasiswa(req.body);
  const saved = await newMhs.save();
  res.status(201).json(saved);
});

// PUT (Update)
app.put('/mahasiswa/:id', async (req, res) => {
  const updated = await Mahasiswa.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// DELETE
app.delete('/mahasiswa/:id', async (req, res) => {
  await Mahasiswa.findByIdAndDelete(req.params.id);
  res.json({ message: 'Data mahasiswa berhasil dihapus' });
});

// ===== ROUTES MATAKULIAH =====

// GET all
app.get('/matakuliah', async (req, res) => {
  const data = await Matakuliah.find();
  res.json(data);
});

// GET by ID
app.get('/matakuliah/:id', async (req, res) => {
  const data = await Matakuliah.findById(req.params.id);
  res.json(data);
});

// POST (Create)
app.post('/matakuliah', async (req, res) => {
  const newMk = new Matakuliah(req.body);
  const saved = await newMk.save();
  res.status(201).json(saved);
});

// PUT (Update)
app.put('/matakuliah/:id', async (req, res) => {
  const updated = await Matakuliah.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// DELETE
app.delete('/matakuliah/:id', async (req, res) => {
  await Matakuliah.findByIdAndDelete(req.params.id);
  res.json({ message: 'Data matakuliah berhasil dihapus' });
});

// ===== SERVER =====
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
