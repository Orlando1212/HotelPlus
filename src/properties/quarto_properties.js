//QUERY\\
export const queryCreateQuarto = 'INSERT INTO quarto (numero_quarto, capacidade, preco_noite, status, descricao) ' +
'VALUES ($1, $2, $3, $4, $5) ' +
'RETURNING *'
export const queryUpdateQuarto = 'UPDATE quarto SET numero_quarto = $1, capacidade = $2, preco_noite = $3, status = $4, email = $5)'
export const queryDeleteQuarto = 'DELETE FROM quarto WHERE id_quarto = $1'
export const queryGetQuarto = 'SELECT id_quarto FROM quarto WHERE id_quarto =$1'
export const queryGetAllQuarto = 'SELECT * FROM quarto;'

//Request Body\\
export function ConstantesDeRequisicaoQuarto(req) {
    const numero_quarto = req.body.numero_quarto;
    const capacidade = req.body.capacidade;
    const preco_noite = req.body.preco_noite;
    const status = req.body.status;
    const descricao = req.body.descricao;
  
    return {
      numero_quarto,
      capacidade,
      preco_noite,
      status,
      descricao,
    };
  }
  
//Strings\\

export const idQuartoString = ":id_quarto";