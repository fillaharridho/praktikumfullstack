const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;
const DATA_FILE = './data.json';

app.use(cors());
app.use(bodyParser.json());

// GET all items
app.get('/items', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(data);
});

// POST add new item
app.post('/items', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  const newItem = req.body;
  data.push(newItem);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json({ message: 'Item ditambahkan', item: newItem });
});

// PUT update item
app.put('/items/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  const id = req.params.id;
  const updatedItem = req.body;
  const index = data.findIndex(item => item.id == id);

  if (index !== -1) {
    data[index] = updatedItem;
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ message: 'Item diperbarui', item: updatedItem });
  } else {
    res.status(404).json({ message: 'Item tidak ditemukan' });
  }
});

// DELETE item
app.delete('/items/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  const id = req.params.id;
  const filtered = data.filter(item => item.id != id);

  if (filtered.length === data.length) {
    return res.status(404).json({ message: 'Item tidak ditemukan' });
  }

  fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2));
  res.json({ message: 'Item dihapus' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
