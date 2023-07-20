import express from 'express'
import bodyParser from 'body-parser'
import clienteRouter from './routes/cliente_route.js'
import quartoRouter from './routes/quarto_route.js';
import reservaRouter from './routes/reserva_route.js';
import loginRouter from './routes/login_route.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const app = express()

app.use(express.static('view'))

// converte o pacote request para JSON
app.use( express.json() )

// faz o trabalho de codificação do pacote request
app.use( bodyParser.urlencoded({extended : true}) )

// endpoints para cliente
app.use("/cliente", clienteRouter)

//endpoints para reserva
app.use("/reserva",reservaRouter)

//endpoints para quarto
app.use("/quarto",quartoRouter)

//endpoints para login
app.use("/login",loginRouter)

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/view/loginUser.html")
})

// executa o servidor na porta 3000
app.listen(3000, () => {
  console.log("Escutando a porta 3000")
})

