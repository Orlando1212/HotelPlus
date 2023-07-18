//QUERY\\
export const queryLogin = 'SELECT * FROM usuario WHERE email = $1 AND senha = $2'

//Request Body\\
export function ConstantesDeRequisicaoLogin(req) {
    const email = req.body.email;
    const senha = req.body.senha;
    return {
      email,
      senha,
    };
  }
  
//Strings\\

