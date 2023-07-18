import conectar from "../database/db.js";
import {queryCreateCliente,queryDeleteCliente,queryGetAllCliente,queryUpdateCliente,queryGetCliente,
idClienteString,ConstantesDeRequisicaoCliente,} from '../properties/cliente_properties.js'

const pool = conectar();
var resposta;

async function getAllClientes() {
	try {
		resposta = await pool.query(queryGetAllCliente)
		console.log(resposta.rows)
		return resposta.rows;
	} catch(err){
		console.log(err);
	}
}

async function getCliente(id) {
	try {
		resposta = await pool.query(queryGetCliente, [id.id_cliente] );
		console.log(resposta.rows)
		return resposta.rows;
	} catch(err){
		console.log(err);
	}
}

async function createCliente(cliente) {
		try{
			resposta = await pool.query(queryCreateCliente, [cliente.cpf, cliente.primeiro_nome, cliente.ultimo_nome, cliente.data_nascimento,
			cliente.email, cliente.ddd_telefone]
			);
			console.log(resposta.rows);
			res.send(resposta.rows);	
		} catch(err){
			console.log(err);
		}
	}


async function deleteCliente(id) {
	console.log("delete cliente")
	try{
		resposta = await pool.query(queryDeleteCliente, [id.id_cliente] );
		console.log(resposta.rows)
		return resposta.rows;
	} catch(err){
		console.log(err)
	}
}

async function updateCliente(id,cliente) {
	
		try{
			resposta = await pool.query(queryUpdateCliente, 
			   [cliente.cpf, cliente.primeiro_nome, cliente.data_nascimento, cliente.email, cliente.ddd_telefone, id.req.params.id_cliente] 
			);
			console.log(resposta.rows);
			return resposta.rows;
		} catch(err){
			console.log(err);
		}
}

export default{getAllClientes, getCliente, createCliente, 
               deleteCliente, updateCliente}