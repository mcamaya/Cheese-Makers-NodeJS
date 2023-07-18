const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.connectDB();
    }

    async connectDB(){
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(usuariosPath) {
        this.app.use(...usuariosPath);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }
}

module.exports = Server;