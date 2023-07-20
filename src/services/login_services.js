import loginRepositories from '../repositories/login_repositories.js';
import bcrypt from 'bcrypt';

function isEmailValid(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return  emailRegex.test(email);
}

function isPasswordValid(senha) {
  return senha.length >= 6;
}


//========= Login ==============
async function Login(email,senha) {

  if (!isEmailValid(email)) {
    return alert('Email inválido.');
  }
  if(!isPasswordValid(senha)){
    return alert('Senha inválida,digite uma senha com pelo menos 6 caracteres.');
  }
    var user = await loginRepositories.Login(email,senha);
    if (!user) {
      return {message: 'Usuario não Existe.'};
    }

    const match = await bcrypt.compare(senha, user[0].senha);
    if (!match) {
      return{message: 'Senha incorreta.'};
    }

    return { message: 'Login bem-sucedido!' };
}

export default {Login};