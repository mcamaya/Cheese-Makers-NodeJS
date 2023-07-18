const Usuario = require('../models/Usuario.js')
const bcryptjs = require('bcryptjs');

const getUsers = (req, res) => {
    res.json({"message":"Homepage"});
};

const postUsers = async (req, res) => {
    try {
        const {nombre, email, password, rol} = req.body;
        const usuario = new Usuario({nombre, email, password, rol});


        // Encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);

        res.json({
            password
        })
        /* await usuario.save();
        res.json({
            "message": "post api",
            nombre,
            password,
            email,
            rol
        }); */
    } catch (error) {
        res.status(300).send(error.message);
    }
};

const deleteUsers = (req, res) => {
    res.json({"message":"delete api"});
};

const putUsers = (req, res) => {
    res.json({"message":"put api"});
};

const patchUsers = (req, res) => {
    res.json({"message":"patch api"});
};

module.exports =  {
    getUsers,
    postUsers,
    deleteUsers,
    putUsers,
    patchUsers
};