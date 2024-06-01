//Anyerspn Arvey Tumbaco

const { Router } = require('express');
const { validateJwt } = require('../middlewares/validar_jwt');
const { addMarca, showMarcas, showMarca, updateMarca, deleteMarca } = require('../controllers/marcas.controller');

const router = Router();

router.get('/', showMarcas);
router.post('/', addMarca);
router.put('/:id', updateMarca);
router.delete('/:id', deleteMarca);
router.get('/:id',validateJwt, showMarca);

module.exports = router;
