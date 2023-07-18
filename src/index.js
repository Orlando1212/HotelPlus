import express from 'express'
import bodyParser from 'body-parser'
import clienteRouter from './routes/cliente_routes.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

// converte o pacote request para JSON
app.use( express.json() )

// faz o trabalho de codificação do pacote request
app.use( bodyParser.urlencoded({extended : true}) )

// endpoints para cliente
app.use("/cliente", clienteRouter)

//endpoints para reserva
app.use("/reserva",clienteRouter)

app.use("/quarto",clienteRouter)

app.get("/criar/cliente", (req, res)=>{
  res.sendFile(__dirname + "/view/cadCliente.html")
})

// executa o servidor na porta 3000
app.listen(3000, () => {
  console.log("Escutando a porta 3000")
})

