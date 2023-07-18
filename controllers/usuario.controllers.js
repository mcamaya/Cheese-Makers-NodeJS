const Usuario = require('../models/Usuario.js')
const bcryptjs = require('bcryptjs');

const getUsers = async (req, res) => {
    const data = await Usuario.find();
    res.json(data)
};

const postUsers = async (req, res) => {

        
        const {nombre, email, password, rol} = req.body;
        const usuario = new Usuario({nombre, email, password, rol});

        // Verificar duplicados
        const existeEmail = await Usuario.findOne({email});
        if(existeEmail){
            return res.status(400).json({
                msg: "Email already exists"
            })
        }

        // Encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);
        
        await usuario.save();
        res.json({
            "message": "post api",
            nombre,
            password,
            email,
            rol
        });

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