const {response} = require('express');
const Usuario = require('../models/Usuario.js')
const bcryptjs = require('bcryptjs')

const login = async (req, res=response) => {
    const {email, password} = req.body;
    try {
        // verificar si existe el email en la db
        const existeUsuario = await Usuario.findOne({email});
        if(!existeUsuario){
            return res.status(400).json({msg: 'Usuario no registrado'});
        }

        // verificar si el usuario está activo
        if(existeUsuario.estado === false){
            return res.status(400).json({msg: 'Usuario inactivo. No cuenta con los permisos'});
        }
    
        //verificar si el password coincide con el email
        const coincidePassword = bcryptjs.compareSync(password, existeUsuario.password);
        if(coincidePassword === false){
            return res.status(400).json({msg:'Contraseña incorrecta'});
        }

        res.json({msg: 'Todo bien, mi loco'})
        
    } catch (error) {
        console.log(error);
        return res.json({msg: "todo mal, mi loco. Le tocó llamar al Phidolly"});        
    }
}

module.exports = {
    login
}