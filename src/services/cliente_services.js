import clienteRepositories from '../repositories/cliente_repositories.js';


//========= CLIENTE ==============
async function getAllClientes() {
	return ( await clienteRepositories.getAllClientes())
}

async function getCliente(id) {
    return ( await clienteRepositories.getCliente(id))
}

async function deleteCliente(id) {
	var consultaCliente = await clienteRepositories.getCliente(id);

	if(consultaCliente.length == 0){
		return ({message: 'Cliente não existe.',
				status: 404})
	}

	return ( await clienteRepositories.deleteCliente(id) )
}

async function createCliente( cliente ) {

	return ( await clienteRepositories.createCliente( cliente ) )
}

async function updateCliente(id,cliente) {

	var consultaCliente = await clienteRepositories.getCliente(id);

	if(consultaCliente.length == 0){
		return ({message: 'Cliente não existe.',
				status: 404})
	}
	return ( await clienteRepositories.updateCliente(id,cliente) )
}

export default{getAllClientes, getCliente, createCliente, 
               deleteCliente, updateCliente}

