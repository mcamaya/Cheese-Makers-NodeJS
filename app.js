import dotenv from "dotenv";
import Server from "./models/server.js";
import usuarioRouter from "./routes/usuario.routes.js";

const config = dotenv.config();

const server = new Server();

server.listen();
server.routes(["/usuarios", usuarioRouter])
