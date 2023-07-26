import conectar from "../database/db.js";
import {queryCreateReserva,queryDeleteReserva,queryGetAllReserva,queryUpdateReserva,queryGetReserva,queryGetDataReserva} from '../properties/reserva_properties.js'

const pool = conectar();
var resposta;

async function getAllReservas() {
	try {
		resposta = await pool.query(queryGetAllReserva)
		console.log(resposta.rows);
		return resposta.rows;
	} catch(err){
		console.log(err);
	}
}

async function getReserva(id) {	
	try {
		resposta = await pool.query(queryGetReserva, [id]);
		console.log(resposta.rows);
		return resposta.rows;
	} catch(err){
		console.log(err);
	}
}

async function createReserva(reserva) {
		try{
			resposta = await pool.query(queryCreateReserva, [reserva.id_quarto,reserva.id_cliente,reserva.check_in_date, reserva.check_out_date, reserva.qnt_pessoas,
			reserva.reserva_valor]
			);
			console.log(resposta.rows);
			return resposta.rows;	
		} catch(err){
			console.log(err)
		}
	}


async function deleteReserva(id) {
	console.log("delete cliente")
	try{
		resposta = await pool.query(queryDeleteReserva, [id]);
		console.log(resposta.rows);
		return resposta.rows;
	} catch(err){
		console.log(err);
	}
}

async function reservaEntreDatas(inicio,fim) {
	try{
		resposta = await pool.query(queryGetDataReserva, [inicio,fim]);
		console.log(resposta.rows);
		return resposta.rows;
	} catch(err){
		console.log(err);
	}
}

async function updateReserva(id,reserva) {
		try{
			resposta = await pool.query(queryUpdateReserva, [reserva.check_in_date, reserva.check_out_date, reserva.qnt_pessoas,
			reserva.reserva_valor,id]
			);
			console.log(resposta.rows);
			return resposta.rows;
		}catch(err){
			console.log(err);
		}
}

export default{getAllReservas, getReserva, createReserva, 
               deleteReserva, updateReserva,reservaEntreDatas}