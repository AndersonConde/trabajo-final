// SEBASTIAN CAMILO AGREDA

const { Router } = require('express');
const { addVenta, showVentas, showVenta, updateVenta, deleteVenta } = require('../controllers/ventas.controller');

const router = Router();

router.get('/', showVentas);
router.post('/', addVenta);
router.put('/:id', updateVenta);
router.delete('/:id', deleteVenta);
router.get('/:id', showVenta);

module.exports = router;
