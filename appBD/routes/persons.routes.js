//ESTEBAN ALEJANDRO ACOSTA

const { Router } = require('express');
const { validateJwt } = require('../middlewares/validar_jwt');
const { addPerson, showPersons, showPerson, updatePerson, deletePerson } = require('../controllers/persons.controller');

const router = Router();

router.get('/', showPersons);
router.post('/', addPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);
router.get('/:id', validateJwt, showPerson);

module.exports = router;
