import express from "express";
import "dotenv/config.js" 
import "./config/database.js"
import cors from 'cors'
import morgan from "morgan";
import indexRouter from './router/index.js';

const server = express();
const PORT = process.env.PORT || 8080;
const ready = ()=> console.log("Server ready from port: " + PORT);

server.use(express.json()) //permite trabajar con formato json en entrada y salida
server.use(express.urlencoded({extended: true}))
server.use(cors()) //permite agregar seguridad a la base de datos
server.use(morgan('dev')) //sirve para controlar la traza de las peticiones, como un registro de las peticiones al servidor


//router
server.use('/api', indexRouter)

server.listen(PORT, ready);

server.get('/', (request, responde) =>{
    responde.send('Hola mundo Express')
}
)
server.get('/saludo', (request, responde) =>{
    responde.send('Mi primer saludo en Express')
}
)

console.log(process.env.PORT);

