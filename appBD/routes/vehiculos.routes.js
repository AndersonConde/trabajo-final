const { Router } = require('express');
const { addVehiculo, showVehiculos, showVehiculo, updateVehiculo, deleteVehiculo } = require('../controllers/vehiculos.controller');

const router = Router();

router.get('/', showVehiculos);
router.post('/', addVehiculo);
router.put('/:id', updateVehiculo);
router.delete('/:id', deleteVehiculo);
router.get('/:id', showVehiculo);

module.exports = router;
