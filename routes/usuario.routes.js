const {Router} = require('express');
const {validateDocuments} = require('../middlewares/validate.documents.js')
const {check} = require('express-validator');
const {getUsers, postUsers, deleteUsers, putUsers, patchUsers} = require('../controllers/usuario.controllers.js')
const Role = require('../models/Role.js');

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
    validateDocuments
], postUsers);
router.delete("/", deleteUsers);
router.put("/", putUsers);
router.patch("/", patchUsers);

module.exports = router;