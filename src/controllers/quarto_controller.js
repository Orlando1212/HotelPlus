import quartoService from '../services/quarto_services.js';
import { ConstantesDeRequisicaoQuarto } from '../properties/quarto_properties.js';

var quartoData;
var quartos;
var quartoId;
var novoQuarto;
var quarto;
var deletaQuarto;
var atualizaQuarto;
var atualizaData;

async function getAllQuartos() {
	try {
		quartos = await quartoService.getAllClientes();
		res.json(quartos);
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao obter a lista de clientes.' });
	  }
}

async function getQuarto(req, res) {
	try {
		quartoId = parseInt(req.params.id_quarto);
		quarto = await quartoService.getQuarto(quartoId);
		if (!quarto) {
		  res.status(404).json({ message: 'Quarto não encontrado.' });
		} else {
		  res.json(quarto);
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao buscar o Quarto.' });
	  }
}

async function createQuarto(req, res) {

	const requestBody = ConstantesDeRequisicaoQuarto(req)
	try {
		if(requestBody.numero_quarto==undefined || requestBody.numero_quarto==null || requestBody.numero_quarto=="" ||
		requestBody.capacidade ==undefined || requestBody.capacidade ==null || requestBody.capacidade =="" ||
		requestBody.preco_noite == undefined || requestBody.preco_noite == null || requestBody.preco_noite == "" ||
		requestBody.status == undefined || requestBody.status == null || requestBody.status == "" ){
		res.send("Apenas descrição pode ser vazio!")
	 	}	

		quartoData = req.body;
		novoQuarto = await quartoService.createCliente(quartoData);
		res.json(novoQuarto);
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao criar o cliente.' });
	  }
	}


async function deleteQuarto(req, res) {
	try {
		quartoId = parseInt(req.params.id_quarto);
		deletaQuarto = await quartoService.deleteCliente(quartoId);
		if (!deletaQuarto) {
		  res.status(404).json({ message: 'Quarto não encontrado.' });
		} else {
		  res.json({ message: 'Quarto excluído com sucesso.' });
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao excluir o Quarto.' });
	  }
}

async function updateQuarto(req, res) {

	const requestBody = ConstantesDeRequisicaoQuarto(req)
	try {
		if(requestBody.numero_quarto==undefined || requestBody.numero_quarto==null || requestBody.numero_quarto=="" ||
	   requestBody.capacidade ==undefined || requestBody.capacidade ==null || requestBody.capacidade =="" ||
	   requestBody.preco_noite == undefined || requestBody.preco_noite == null || requestBody.preco_noite == "" ||
	   requestBody.status == undefined || requestBody.status == null || requestBody.status == "" ){
	   res.send("Apenas descrição pode ser vazio!")
		}

		quartoId = parseInt(req.params.id_quarto);
		atualizaData = req.body;
		atualizaQuarto = await quartoService.updateCliente(quartoId, atualizaData);
		if (!atualizaQuarto) {
		  res.status(404).json({ message: 'Quarto não encontrado.' });
		} else {
		  res.json(atualizaQuarto);
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao atualizar o quarto.' });
	  }
}

export default{getAllQuartos, getQuarto, createQuarto, 
               deleteQuarto, updateQuarto}