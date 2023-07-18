import conectar from "../database/db.js";
import {queryCreateQuarto,queryDeleteQuarto,queryGetAllQuarto,queryUpdateQuarto,queryGetQuarto} from '../properties/quarto_properties.js'

const pool = conectar();
var resposta;

async function getAllQuartos() {
	try {
		resposta = await pool.query(queryGetAllQuarto)
		console.log(resposta.rows);
		return resposta.rows;
	} catch(err){
		console.log(err);
	}
}

async function getQuarto(id) {	
	try {
		resposta = await pool.query(queryGetQuarto, [id.params.id_quarto]);
		console.log(resposta.rows);
		return resposta.rows;
	} catch(err){
		console.log(err);
	}
}

async function createQuarto(quarto) {
		try{
			resposta = await pool.query(queryCreateQuarto, [quarto.numero_quarto, quarto.capacidade, quarto.preco_noite, quarto.status,
			quarto.descricao]
			);
			console.log(resposta.rows);
			return resposta.rows;	
		} catch(err){
			console.log(err)
		}
	}


async function deleteQuarto(id) {
	console.log("delete cliente")
	try{
		resposta = await pool.query(queryDeleteQuarto, [id.params.id_quarto]);
		console.log(resposta.rows);
		return resposta.rows;
	} catch(err){
		console.log(err);
	}
}

async function updateQuarto(id,quarto) {
		try{
			resposta = await pool.query(queryUpdateQuarto, 
				[quarto.numero_quarto, quarto.capacidade, quarto.preco_noite, quarto.status, quarto.descricao, id.params.id_quarto]
			);
			console.log(resposta.rows);
			return resposta.rows;
		}catch(err){
			console.log(err);
		}
}

export default{getAllQuartos, getQuarto, createQuarto, 
               deleteQuarto, updateQuarto}