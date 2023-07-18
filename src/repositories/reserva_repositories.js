import conectar from "../database/db.js";
import {queryCreateCliente,queryDeleteCliente,queryGetAllCliente,queryUpdateCliente,queryGetCliente,
idClienteString,ConstantesDeRequisicaoCliente,} from '../properties/cliente_proprities.js'

const pool = conectar();
var resposta;

async function getAllClientes(req, res) {
	try {
		resposta = await pool.query(queryGetAllCliente)
		console.log(resposta.rows)
		res.send(resposta.rows)
	} catch(err){
		console.log(err)
	}finally{
		pool.end();
	}
}

async function getCliente(req, res) {
	res.send(idClienteString + req.params.id_cliente);	
	try {
		resposta = await pool.query(queryGetCliente, [req.params.id_cliente] );
		console.log(resposta.rows)
		res.send(resposta.rows)
	} catch(err){
		console.log(err)
	}finally{
		pool.end();
	}
}

async function createCliente(req, res) {
	const requestBody = ConstantesDeRequisicaoCliente(req)
	
	if(requestBody.cpf==undefined || requestBody.cpf==null || requestBody.cpf=="" ||
	   requestBody.primeiro_nome ==undefined || requestBody.primeiro_nome ==null || requestBody.primeiro_nome =="" ||
	   requestBody.ultimo_nome == undefined || requestBody.ultimo_nome == null || requestBody.ultimo_nome == "" ||
	   requestBody.email == undefined || requestBody.email == null || requestBody.email == "" ){
	   res.send(" CPF , nome e email não pode ser vazios!!!")
	}
		try{
			resposta = await pool.query(queryCreateCliente, [requestBody.cpf, requestBody.primeiro_nome, requestBody.ultimo_nome, requestBody.data_nascimento,
			requestBody.email, requestBody.ddd_telefone]
			);
			console.log(resposta.rows);
			res.send(resposta.rows);	
		} catch(err){
			console.log(err)
		}finally{
			pool.end();
	}
	}


async function deleteCliente(req, res) {
	console.log("delete cliente")
	try{
		resposta = await pool.query(queryDeleteCliente, [req.params.id_cliente] );
		console.log(resposta.rows)
		res.send(resposta.rows)
	} catch(err){
		console.log(err)
	}finally{
		pool.end();
	}
}

async function updateCliente(req, res) {
	const requestBody = ConstantesDeRequisicaoCliente(req)
	
	if(requestBody.cpf==undefined || requestBody.cpf==null || requestBody.cpf=="" ||
	   requestBody.primeiro_nome ==undefined || requestBody.primeiro_nome ==null || requestBody.primeiro_nome =="" ||
	   requestBody.ultimo_nome == undefined || requestBody.ultimo_nome == null || requestBody.ultimo_nome == "" ||
	   requestBody.email == undefined || requestBody.email == null || requestBody.email == "" ){
	   res.send(" CPF , nome e email não pode ser vazios!!!")
	}
	else{
		try{
			resposta = await pool.query(queryUpdateCliente, 
			   [cpf, primeiro_nome, data_nascimento, email, ddd_telefone, req.params.id_cliente] 
			);
			console.log(resposta.rows);
			res.send(resposta.rows);
		} catch(err){
			console.log(err);
		}finally{
			pool.end();
	}
	}
}

export default{getAllClientes, getCliente, createCliente, 
               deleteCliente, updateCliente}