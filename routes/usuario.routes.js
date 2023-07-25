const {Router} = require('express');
const {validateDocuments} = require('../middlewares/validate.documents.js')
const {check} = require('express-validator');
const {getUsers, postUsers, deleteUsers, putUsers, patchUsers} = require('../controllers/usuario.controllers.js')
const Role = require('../models/Role.js');
const Usuario = require('../models/Usuario.js');

const router = Router();

router.get("/", getUsers);
router.post("/", [
    check('nombre', "Nombre es requerido").not().isEmpty(),
    check('password', "Password de mínimo 6 letras").isLength({min: 6}),
    check('email', 'El correo no es válido').isEmail(),
    check('rol').custom(async(rol='') => {
        const existeRol = await Role.find({rol});
        if(!existeRol){
            throw new Error(`El rol ${rol} no está registrado en la db`);
        }
    }),
    check('email').custom(async(email='') => {
        const existeEmail = await Usuario.find({email});
        if (existeEmail){
            throw new Error(`Email ya está registrado`);
        }
    }),
    validateDocuments
], postUsers);
router.delete("/:id", deleteUsers);
router.put("/:id", putUsers);
router.patch("/:id", patchUsers);

module.exports = router;