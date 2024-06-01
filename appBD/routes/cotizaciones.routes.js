const { Router } = require('express');
const { addCotizacion, showCotizaciones, showCotizacion, updateCotizacion, deleteCotizacion } = require('../controllers/cotizaciones.controller');

const router = Router();

router.get('/', showCotizaciones);
router.post('/', addCotizacion);
router.put('/:id', updateCotizacion);
router.delete('/:id', deleteCotizacion);
router.get('/:id', showCotizacion);

module.exports = router;
