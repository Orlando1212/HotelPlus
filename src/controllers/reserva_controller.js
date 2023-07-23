import reservaService from '../services/reserva_services.js';
import { ConstantesDeRequisicaoReserva } from '../properties/reserva_properties.js';

var reservaData;
var reservas;
var reservaId;
var novoReserva;
var reserva;
var deletaReserva;
var atualizaReserva;
var atualizaData;

async function getAllReservas(req,res) {
	try {
		reservas = await reservaService.getAllReservas();
		res.status(200).json(reservas);
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao obter a lista de Reservas.' });
	  }
}

async function getReserva(req, res) {
	try {
		reservaId = parseInt(req.params.id_reserva);
		reserva = await reservaService.getReserva(reservaId);
		if (!reserva) {
		  res.status(404).json({ message: 'Reserva não encontrada.' });
		} else {
		  res.status(200).json(reserva);
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao buscar a Reserva.' });
	  }
}

async function reservaEntreDatas(req,res){
	  const { dataInicio, dataFim } = req.params;  
	  try {
		const reservas = reservaService.reservaEntreDatas(dataInicio, dataFim);
		res.status(200).json(reservas);
	  } catch (error) {
		res.status(500).json({ message: "Erro ao buscar reservas entre as datas." });
	  }
	};

async function createReserva(req, res) {

	const requestBody = ConstantesDeRequisicaoReserva(req)
	try {	
	   if(requestBody.check-in_date==undefined || requestBody.check-in_date==null || requestBody.check-in_date=="" ||
	   requestBody.check-out_date ==undefined || requestBody.check-out_date ==null || requestBody.check-out_date =="" ||
	   requestBody.qnt_pessoas == undefined || requestBody.qnt_pessoas == null || requestBody.qnt_pessoas == "" ||
	   requestBody.reserva_valor == undefined || requestBody.reserva_valor == null || requestBody.reserva_valor == "" ){
	   res.status(401)("Alguns dos campos está vazio!")
		}

		reservaData = requestBody;
		novoReserva = await reservaService.createReserva(reservaData);
		res.status(200).json(novoReserva);
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao criar a Reserva.' });
	  }
	}


async function deleteReserva(req, res) {
	try {
		reservaId = parseInt(req.params.id_reserva);
		deletaReserva = await reservaService.deleteReserva(reservaId);
		if (!deletaReserva) {
		  res.status(404).json({ message: 'Reserva não encontrada.' });
		} else {
		  res.status(200).json({ message: 'Reserva excluído com sucesso.' });
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao excluir a Reserva.' });
	  }
}

async function updateReserva(req, res) {

	try {
		reservaId = parseInt(req.params.id_reserva);
		atualizaData = req.body;
		atualizaReserva = await reservaService.updateReserva(reservaId, atualizaData);
		if (!atualizaReserva) {
		  res.status(404).json({ message: 'Reserva não encontrada.'});
		} else {
		  res.status(200).json(atualizaReserva);
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao atualizar a Reserva.'});
	  }
}

export default{getAllReservas, getReserva, createReserva, 
               deleteReserva, updateReserva,reservaEntreDatas}