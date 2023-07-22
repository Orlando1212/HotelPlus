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
		quartos = await quartoService.getAllQuartos();
		res.status(200).json(quartos);
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
		  res.status(200).json(quarto);
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
		requestBody.preco_noite == undefined || requestBody.preco_noite == null || requestBody.preco_noite == ""){
		res.status(401)("Apenas descrição pode ser vazio!")
		}
		quartoData = requestBody;
		novoQuarto = await quartoService.createQuarto(quartoData);
		res.status(200).json(novoQuarto);
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao criar o Quarto.' });
	  }
	}


async function deleteQuarto(req, res) {
	try {
		quartoId = parseInt(req.params.id_quarto);
		deletaQuarto = await quartoService.deleteQuarto(quartoId);
		if (!deletaQuarto) {
		  res.status(404).json({ message: 'Quarto não encontrado.' });
		} else {
		  res.status(200).json({ message: 'Quarto excluído com sucesso.' });
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao excluir o Quarto.' });
	  }
}

async function updateQuarto(req, res) {
	try {
		quartoId = parseInt(req.params.id_quarto);
		atualizaData = req.body;
		atualizaQuarto = await quartoService.updateQuarto(quartoId, atualizaData);
		if (!atualizaQuarto) {
		  res.status(404).json({ message: 'Quarto não encontrado.' });
		} else {
		  res.status(200).json(atualizaQuarto);
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao atualizar o quarto.' });
	  }
}

export default{getAllQuartos, getQuarto, createQuarto, 
               deleteQuarto, updateQuarto}