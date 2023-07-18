//QUERY\\
export const queryCreateReserva = 'INSERT INTO reserva (id_quarto,id_cliente, check-in_date, check-out_date, qnt_pessoas, reserva_valor) ' +
'VALUES ( $1, $2, $3, $4, $5, $6) ' +
'RETURNING *'
export const queryUpdateReserva = 'UPDATE reserva SET check-in_date = $1, check-out_date = $2, qnt_pessoas = $3, reserva_valor = $4'
export const queryDeleteReserva = 'DELETE FROM reserva WHERE id_reserva = $1'
export const queryGetReserva = 'SELECT id_reserva FROM reserva WHERE id_reserva =$1'
export const queryGetAllReserva = 'SELECT * FROM reserva;'

//Request Body\\
export function ConstantesDeRequisicaoCliente(req) {
    const check_in_date = req.body.check-in_date;
    const check_out_date = req.body.check-out_date;
    const qnt_pessoas = req.body.qnt_pessoas;
    const reserva_valor = req.body.reserva_valor;

    return {
      check_in_date,
      check_out_date,
      qnt_pessoas,
      reserva_valor,
    };
  }
  
//Strings\\

export const idClienteString = "id_reserva:";