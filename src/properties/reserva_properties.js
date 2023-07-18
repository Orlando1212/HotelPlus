//QUERY\\
export const queryCreateCliente = 'INSERT INTO cliente (id_usuario, cpf, primeiro_nome, ultimo_nome, data_nasc, email, ddd_telefone) ' +
'VALUES ((SELECT id_usuario FROM usuario WHERE id_usuario = 2), $1, $2, $3, $4, $5, $6) ' +
'RETURNING *'
export const queryUpdateCliente = 'UPDATE cliente SET cpf = $1, primeiro_nome = $2, ultimo_nome = $3, data_nasc = $4, email = $5, ddd_telefone = $6'
export const queryDeleteCliente = 'DELETE FROM cliente WHERE id_cliente = $1'
export const queryGetCliente = 'SELECT id_cliente FROM cliente WHERE id_cliente =$1'
export const queryGetAllCliente = 'SELECT * FROM cliente;'

//Request Body\\
export function ConstantesDeRequisicaoCliente(req) {
    const primeiro_nome = req.body.primeiro_nome;
    const ultimo_nome = req.body.ultimo_nome;
    const email = req.body.email;
    const data_nascimento = req.body.data_nasc;
    const cpf = req.body.cpf;
    const ddd_telefone = req.body.ddd_telefone;
    const id_usuario = req.body.id_usuario;
  
    return {
      primeiro_nome,
      ultimo_nome,
      email,
      data_nascimento,
      cpf,
      ddd_telefone,
      id_usuario
    };
  }
  
//Strings\\

export const idClienteString = "id_cliente:";