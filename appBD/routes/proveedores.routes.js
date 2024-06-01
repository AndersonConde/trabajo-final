//ANDERSON FERNANDO CONDE

const { Router } = require('express');
const { addProveedor, showProveedores, showProveedor, updateProveedor, deleteProveedor } = require('../controllers/proveedores.controller');

const router = Router();

router.get('/', showProveedores);
router.post('/', addProveedor);
router.put('/:id', updateProveedor);
router.delete('/:id', deleteProveedor);
router.get('/:id', showProveedor);

module.exports = router;
