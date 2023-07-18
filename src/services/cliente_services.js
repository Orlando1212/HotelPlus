import clienteRepositories from '../repositories/cliente_repositories.js';


//========= CLIENTE ==============
async function getAllClientes() {
	return ( await clienteRepositories.getAllClientes())
}

async function getCliente(id) {
    return ( await clienteRepositories.getCliente(id))
}

async function deleteCliente(id) {
	return ( await clienteRepositories.deleteCliente(id) )
}

async function createCliente( cliente ) {
	var consultaprod = await getCliente(cliente.id_cliente);
	
	if (consultaprod.length>0){
		return "Erro, cliente já existe"
	}
	
	return ( await clienteRepositories.createCliente( cliente ) )
}

async function updateCliente(id,cliente) {
	var consultaprod = await getCliente(id,cliente);
	
	if (consultaprod.length==0){
		return "Erro!!! Cliente não existe."
	}
	return ( await clienteRepositories.updateCliente(id) )
}

export default{getAllClientes, getCliente, createCliente, 
               deleteCliente, updateCliente}

