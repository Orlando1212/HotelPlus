import loginRepositories from '../repositories/login_repositories.js';
import bcrypt from 'bcrypt';

//========= Login ==============
async function Login(email,senha) {
    const user = await loginRepositories.Login(email,senha);
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }
  
    const match = await bcrypt.compare(senha, user.senha);
    if (!match) {
      throw new Error('Senha incorreta.');
    }
    return { message: 'Login bem-sucedido!' };
}

export default {Login};