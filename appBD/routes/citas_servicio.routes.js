//Jeison Guerrero
const { Router } = require('express');
const { addCitaServicio, showCitasServicio, showCitaServicio, updateCitaServicio, deleteCitaServicio } = require('../controllers/citas_servicio.controller');

const router = Router();

router.get('/', showCitasServicio);
router.post('/', addCitaServicio);
router.put('/:id', updateCitaServicio);
router.delete('/:id', deleteCitaServicio);
router.get('/:id', showCitaServicio);

module.exports = router;
