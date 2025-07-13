require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB without deprecated options
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Terhubung ke MongoDB'))
    .catch((error) => console.error(error));
app.use(bodyParser.json());
app.use(cors());

const mahasiswaRouter = require('./routes/mahasiswa');
app.use('/mahasiswa', mahasiswaRouter);

app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));