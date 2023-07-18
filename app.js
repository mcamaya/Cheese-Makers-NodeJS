const dotenv = require('dotenv');
const Server = require('./models/server.js');


const config = dotenv.config();

const server = new Server();

server.listen();
server.routes(["/usuarios", require('./routes/usuario.routes.js')])
