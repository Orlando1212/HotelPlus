//QUERY\\
export const queryCreateReserva = 'INSERT INTO reserva (numero_quarto,cpf_cliente, check_in_date, check_out_date, qnt_pessoas, reserva_valor) ' +
'VALUES ( $1, $2, $3, $4, $5, $6) ' +
'RETURNING *'
export const queryUpdateReserva = 'UPDATE reserva SET check_in_date = $1, check_out_date = $2, qnt_pessoas = $3, reserva_valor = $4\
WHERE id_reserva =$5 returning *'
export const queryDeleteReserva = 'DELETE FROM reserva WHERE id_reserva = $1'
export const queryGetReserva = 'SELECT id_reserva FROM reserva WHERE id_reserva =$1'
export const queryGetAllReserva = 'SELECT * FROM reserva;'
export const queryGetDataReserva = 'SELECT * FROM reserva WHERE check_in_date >= $1 AND check_out_date <= $2 ORDER BY numero_quarto;';

//Request Body\\
export function ConstantesDeRequisicaoReserva(req) {
    const check_in_date = req.body.check_in_date;
    const check_out_date = req.body.check_out_date;
    const qnt_pessoas = req.body.qnt_pessoas;
    const reserva_valor = req.body.reserva_valor;
    const numero_quarto = req.body.numero_quarto;
    const cpf_cliente = req.body.cpf_cliente;

    return {
      check_in_date,
      check_out_date,
      qnt_pessoas,
      reserva_valor,
      numero_quarto,
      cpf_cliente
    };
  }
  
//Strings\\

export const idClienteString = "id_reserva:";