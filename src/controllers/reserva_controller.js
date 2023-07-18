import reservaService from '../services/Reserva_services.js';
import { ConstantesDeRequisicaoReserva } from '../properties/Reserva_properties.js';

var reservaData;
var reservas;
var reservaId;
var novoReserva;
var reserva;
var deletaReserva;
var atualizaReserva;
var atualizaData;

async function getAllReservas() {
	try {
		reservas = await reservaService.getAllClientes();
		res.json(reservas);
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao obter a lista de clientes.' });
	  }
}

async function getReserva(req, res) {
	try {
		reservaId = parseInt(req.params.id_reserva);
		reserva = await reservaService.getReserva(reservaId);
		if (!reserva) {
		  res.status(404).json({ message: 'Reserva não encontrado.' });
		} else {
		  res.json(reserva);
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao buscar o Reserva.' });
	  }
}

async function createReserva(req, res) {

	const requestBody = ConstantesDeRequisicaoReserva(req)
	
	if(requestBody.check-in_date==undefined || requestBody.check-in_date==null || requestBody.check-in_date=="" ||
	   requestBody.check-out_date ==undefined || requestBody.check-out_date ==null || requestBody.check-out_date =="" ||
	   requestBody.qnt_pessoas == undefined || requestBody.qnt_pessoas == null || requestBody.qnt_pessoas == "" ||
	   requestBody.reserva_valor == undefined || requestBody.reserva_valor == null || requestBody.reserva_valor == "" ){
	   res.send("Apenas descrição pode ser vazio!")
	}
	try {
		reservaData = req.body;
		novoReserva = await reservaService.createCliente(reservaData);
		res.json(novoReserva);
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao criar o cliente.' });
	  }
	}


async function deleteReserva(req, res) {
	try {
		reservaId = parseInt(req.params.id_reserva);
		deletaReserva = await reservaService.deleteCliente(reservaId);
		if (!deletaReserva) {
		  res.status(404).json({ message: 'Reserva não encontrado.' });
		} else {
		  res.json({ message: 'Reserva excluído com sucesso.' });
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao excluir o Reserva.' });
	  }
}

async function updateReserva(req, res) {

	const requestBody = ConstantesDeRequisicaoReserva(req)
    
	if(requestBody.check-in_date==undefined || requestBody.check-in_date==null || requestBody.check-in_date=="" ||
	   requestBody.check-out_date ==undefined || requestBody.check-out_date ==null || requestBody.check-out_date =="" ||
	   requestBody.qnt_pessoas == undefined || requestBody.qnt_pessoas == null || requestBody.qnt_pessoas == "" ||
	   requestBody.reserva_valor == undefined || requestBody.reserva_valor == null || requestBody.reserva_valor == "" ){
	   res.send("Apenas descrição pode ser vazio!")
	}
	try {
		reservaId = parseInt(req.params.id_reserva);
		atualizaData = req.body;
		atualizaReserva = await reservaService.updateCliente(reservaId, atualizaData);
		if (!atualizaReserva) {
		  res.status(404).json({ message: 'Reserva não encontrado.' });
		} else {
		  res.json(atualizaReserva);
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao atualizar o Reserva.' });
	  }
}

export default{getAllReservas, getReserva, createReserva, 
               deleteReserva, updateReserva}