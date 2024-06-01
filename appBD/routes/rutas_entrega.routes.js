// JOSE MANUEL MENESES 

const { Router } = require('express');
const { addRutaEntrega, showRutasEntrega, showRutaEntrega, updateRutaEntrega, deleteRutaEntrega } = require('../controllers/rutas_entrega.controller');

const router = Router();

router.get('/', showRutasEntrega);
router.post('/', addRutaEntrega);
router.put('/:id', updateRutaEntrega);
router.delete('/:id', deleteRutaEntrega);
router.get('/:id', showRutaEntrega);

module.exports = router;
