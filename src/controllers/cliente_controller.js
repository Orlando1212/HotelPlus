import clienteService from '../services/cliente_services.js';
import { ConstantesDeRequisicaoCliente } from '../properties/cliente_properties.js';

var clienteData;
var clientes;
var clienteId;
var novoCliente;
var cliente;
var deletaCliente;
var atualizaCliente;
var atualizaData;

async function getAllClientes(req, res) {
	try {
		clientes = await clienteService.getAllClientes();
		res.json(clientes);
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao obter a lista de clientes.' });
	  }
}

async function getCliente(req, res) {
	try {
		clienteId = parseInt(req.params.id_cliente);
		cliente = await clienteService.getCliente(clienteId);
		if (!cliente) {
		  res.status(404).json({ message: 'Cliente não encontrado.' });
		} else {
		  res.json(cliente);
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao buscar o cliente.' });
	  }
}

async function createCliente(req, res) {

	const requestBody = ConstantesDeRequisicaoCliente(req)
	
	if(requestBody.cpf==undefined || requestBody.cpf==null || requestBody.cpf=="" ||
	   requestBody.primeiro_nome ==undefined || requestBody.primeiro_nome ==null || requestBody.primeiro_nome =="" ||
	   requestBody.ultimo_nome == undefined || requestBody.ultimo_nome == null || requestBody.ultimo_nome == "" ||
	   requestBody.email == undefined || requestBody.email == null || requestBody.email == "" ){
	   res.send(" CPF , nome e email não pode ser vazios!!!")
	}
	try {
		clienteData = req.body;
		novoCliente = await clienteService.createCliente(clienteData);
		res.json(novoCliente);
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao criar o cliente.' });
	  }
	}


async function deleteCliente(req, res) {
	try {
		clienteId = parseInt(req.params.id_cliente);
		deletaCliente = await clienteService.deleteCliente(clienteId);
		if (!deletaCliente) {
		  res.status(404).json({ message: 'Cliente não encontrado.' });
		} else {
		  res.json({ message: 'Cliente excluído com sucesso.' });
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao excluir o cliente.' });
	  }
}

async function updateCliente(req, res) {

	const requestBody = ConstantesDeRequisicaoCliente(req)
	
	if(requestBody.cpf==undefined || requestBody.cpf==null || requestBody.cpf=="" ||
	   requestBody.primeiro_nome ==undefined || requestBody.primeiro_nome ==null || requestBody.primeiro_nome =="" ||
	   requestBody.ultimo_nome == undefined || requestBody.ultimo_nome == null || requestBody.ultimo_nome == "" ||
	   requestBody.email == undefined || requestBody.email == null || requestBody.email == "" ){
	   res.send(" CPF , nome e email não pode ser vazios!!!")
	}
	try {
		clienteId = parseInt(req.params.id_cliente);
		atualizaData = req.body;
		atualizaCliente = await clienteService.updateCliente(clienteId, atualizaData);
		if (!atualizaCliente) {
		  res.status(404).json({ message: 'Cliente não encontrado.' });
		} else {
		  res.json(atualizaCliente);
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao atualizar o cliente.' });
	  }
}

export default{getAllClientes, getCliente, createCliente, 
               deleteCliente, updateCliente}