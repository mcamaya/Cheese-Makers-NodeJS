const {Router} = require('express');
const {check} = require('express-validator');
const {login} = require('../controllers/auth.controllers.js');
const {validateDocuments} = require('../middlewares/validate.documents.js');

const router = Router();

router.post('/login', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validateDocuments
], login);

module.exports = router;
