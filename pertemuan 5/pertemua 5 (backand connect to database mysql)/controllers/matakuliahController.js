const db = require('../config/db');

// CREATE
exports.createMatakuliah = (req, res) => {
  const { kodeMK, namaMK, sks, semester } = req.body;
  const sql = 'INSERT INTO matakuliah (kodeMK, namaMK, sks, semester) VALUES (?, ?, ?, ?)';
  db.query(sql, [kodeMK, namaMK, sks, semester], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Matakuliah ditambahkan', data: result });
  });
};

// READ ALL
exports.getAllMatakuliah = (req, res) => {
  db.query('SELECT * FROM matakuliah', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ data: results });
  });
};

// READ BY ID
exports.getMatakuliahByKode = (req, res) => {
  const { kodeMK } = req.params;
  db.query('SELECT * FROM matakuliah WHERE kodeMK = ?', [kodeMK], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: 'Data tidak ditemukan' });
    res.status(200).json({ data: result[0] });
  });
};

// UPDATE
exports.updateMatakuliah = (req, res) => {
  const { kodeMK } = req.params;
  const { namaMK, sks, semester } = req.body;
  const sql = 'UPDATE matakuliah SET namaMK = ?, sks = ?, semester = ? WHERE kodeMK = ?';
  db.query(sql, [namaMK, sks, semester, kodeMK], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Data tidak ditemukan' });
    res.status(200).json({ message: 'Matakuliah diperbarui' });
  });
};

// DELETE
exports.deleteMatakuliah = (req, res) => {
  const { kodeMK } = req.params;
  db.query('DELETE FROM matakuliah WHERE kodeMK = ?', [kodeMK], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Data tidak ditemukan' });
    res.status(200).json({ message: 'Matakuliah dihapus' });
  });
};
