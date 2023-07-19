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
	
	return ( await clienteRepositories.createCliente( cliente ) )
}

async function updateCliente(id,cliente) {
	console.log(cliente);
	return ( await clienteRepositories.updateCliente(id,cliente) )
}

export default{getAllClientes, getCliente, createCliente, 
               deleteCliente, updateCliente}

