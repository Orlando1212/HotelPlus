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

  if (!isEmailValid(email) || !isPasswordValid(senha)) {
    throw new Error('Email ou senha inválidos.');
  }
    const user = await loginRepositories.Login(email,senha);
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }
    /*
    console.log(user.senha);
    consolelog(senha);
    const match = await bcrypt.compare(senha, user.senha);
    if (!match) {
      throw new Error('Senha incorreta.');
    }
    */
    return { message: 'Login bem-sucedido!' };
}

export default {Login};