import conectar from "../database/db.js";
import {queryLogin} from '../properties/login_properties.js'

const pool = conectar();
var resposta;


async function Login(email,senha) {
	try {
		resposta = await pool.query(queryLogin,[email,senha])
		console.log(resposta.rows)
		return resposta.rows;
	} catch(err){
		console.log(err);
	}
}


export default {Login};