const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        trim: true,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    imagen : {
        type: String
    },

    //llave foránea
    rol: {
        type: String,
        required: true,
        default: 'USER'
    },

    estado: {
        type: Boolean,
        default: true
    },
    googleSignIn: {
        type: Boolean,
        default: false
    }
})

module.exports = model("usuario", UsuarioSchema);