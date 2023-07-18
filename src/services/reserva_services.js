import reservaRepositories from '../repositories/reserva_repositories.js';


//========= RESERVA ==============
async function getAllReservas() {
	return (await reservaRepositories.getAllReservas())
}

async function getReserva(id) {
    return (await reservaRepositories.getReserva(id))
}

async function deleteReserva(id) {
	return (await reservaRepositories.deleteReserva(id))
}

async function createReserva( reserva ) {
	var consultaprod = await getReserva(reserva.id);
	
	if (consultaprod.length>0){
		return "Erro, Reserva já existe"
	}
	
	return (await reservaRepositories.createReserva( reserva ))
}

async function updateReserva(id,reserva) {
	var consultaprod = await getReserva(id);
	
	if (consultaprod.length==0){
		return "Erro!!! Reserva não existe."
	}
	return (await reservaRepositories.updateReserva(id) )
}

export default{getAllReservas, getReserva, createReserva, 
               deleteReserva, updateReserva}

