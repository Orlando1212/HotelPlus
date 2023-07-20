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
		res.status(200).json(clientes);
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
		  res.status(200).json(cliente);
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao buscar o cliente.' });
	  }
}

async function createCliente(req, res) {

	const requestBody = ConstantesDeRequisicaoCliente(req)
	try {	
		if(requestBody.cpf==undefined || requestBody.cpf==null || requestBody.cpf=="" ||
	   requestBody.primeiro_nome ==undefined || requestBody.primeiro_nome ==null || requestBody.primeiro_nome =="" ||
	   requestBody.ultimo_nome == undefined || requestBody.ultimo_nome == null || requestBody.ultimo_nome == "" ||
	   requestBody.email == undefined || requestBody.email == null || requestBody.email == ""){
	   res.status(401).json({message: 'Alguns dos campos não foi preenchido.'})
	   }
		clienteData = requestBody;
		novoCliente = await clienteService.createCliente(clienteData);
		res.status(200).json(novoCliente);
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
		  res.status(200).json({ message: 'Cliente excluído com sucesso.' });
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao excluir o cliente.' });
	  }
}

async function updateCliente(req, res) {
	
	try {	
		clienteId = parseInt(req.params.id_cliente);
		atualizaData = req.body;
		console.log(atualizaData);
		atualizaCliente = await clienteService.updateCliente(clienteId, atualizaData);
		if (!atualizaCliente) {
		  res.status(404).json({ message: 'Cliente não encontrado.' });
		} else {
		  res.status(200).json(atualizaCliente);
		}
	  } catch (err) {
		res.status(500).json({ error: 'Erro ao atualizar o cliente.' });
	  }
}

export default{getAllClientes, getCliente, createCliente, 
               deleteCliente, updateCliente}