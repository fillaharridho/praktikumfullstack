const express = require('express');
const bodyParser = require('body-parser');
const matakuliahRoutes = require('./routes/matakuliahRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Gunakan route untuk matakuliah
app.use('/matakuliah', matakuliahRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
