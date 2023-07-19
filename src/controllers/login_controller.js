import loginService from '../services/login_services.js';
import { ConstantesDeRequisicaoLogin } from '../properties/login_properties.js';
import { __dirname } from '../index.js';

var loginData;
var login;

async function LoginPage(req, res) {
    try {
      // Aqui você pode renderizar ou enviar uma página HTML de login
      res.send('<h1>Página de login</h1>');
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao acessar o sistema.' });
    }
  }

async function Login(req, res) {

	const requestBody = ConstantesDeRequisicaoLogin(req)
	try {
		if(requestBody.email==undefined || requestBody.email==null || requestBody.email=="" ||
	   requestBody.senha ==undefined || requestBody.senha ==null || requestBody.senha ==""){
	   res.send("Email e senha não pode ser vazios!!!")
		}
		login = await loginService.Login(requestBody.email,requestBody.senha);
		res.sendFile(__dirname + "/view/telaPrincipal.html");
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao Acessar o sistema.' });
	  }
	}

export default {Login,LoginPage};