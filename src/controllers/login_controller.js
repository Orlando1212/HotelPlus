import loginService from '../services/login_services.js';
import { ConstantesDeRequisicaoLogin } from '../properties/login_properties.js';
import { __dirname } from '../index.js';

var loginData;
var login;

async function Login(req, res) {

	const requestBody = ConstantesDeRequisicaoLogin(req)
	try {
		if(requestBody.email==undefined || requestBody.email==null || requestBody.email=="" ||
	   requestBody.senha ==undefined || requestBody.senha ==null || requestBody.senha ==""){
		res.status(401).json({message: 'Email e senha são obrigatorios.'})
		}
		login = await loginService.Login(requestBody.email,requestBody.senha);
		res.status(200).json({message: 'Login realizado com Sucesso.'})
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao Acessar o sistema.' });
	  }
	}

export default {Login};