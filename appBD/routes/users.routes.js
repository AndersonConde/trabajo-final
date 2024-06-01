
const { Router } = require('express');
const { validateJwt } = require('../middlewares/validar_jwt');
const { addUser, showUsers, updateUser, deleteUser, showUser } = require('../controllers/users.controller');

const router = Router();

router.get('/', showUsers);
router.post('/', addUser);
router.put('/:id', updateUser); 
router.delete('/:id', deleteUser); 
router.get('/:id', validateJwt, showUser); 

module.exports = router;
