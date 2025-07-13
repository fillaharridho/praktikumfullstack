const express = require('express');
const router = express.Router();
const matakuliahController = require('../controllers/matakuliahController');

router.post('/', matakuliahController.createMatakuliah);
router.get('/', matakuliahController.getAllMatakuliah);
router.get('/:kodeMK', matakuliahController.getMatakuliahByKode);
router.put('/:kodeMK', matakuliahController.updateMatakuliah);
router.delete('/:kodeMK', matakuliahController.deleteMatakuliah);

module.exports = router;
