//Jose Alirio Vaca

const { Router } = require('express');
const { addGarantia, showGarantias, showGarantia, updateGarantia, deleteGarantia } = require('../controllers/garantias.controller');

const router = Router();

router.get('/', showGarantias);
router.post('/', addGarantia);
router.put('/:id', updateGarantia);
router.delete('/:id', deleteGarantia);
router.get('/:id', showGarantia);

module.exports = router;
