import reservaRepositories from '../repositories/reserva_repositories.js';


//========= RESERVA ==============
async function getAllReservas() {
	return (await reservaRepositories.getAllReservas())
}

async function getReserva(id) {
    return (await reservaRepositories.getReserva(id))
}

async function deleteReserva(id) {

	var consultaReserva = await reservaRepositories.getReserva(id);

	if(consultaReserva.length == 0){
		return ({message: 'Reserva não existe.',
				status: 404})
	}

	return (await reservaRepositories.deleteReserva(id))
}

async function createReserva(reserva) {

	return (await reservaRepositories.createReserva(reserva))
}

async function updateReserva(id,reserva) {
	var consultaReserva = await reservaRepositories.getReserva(id);

	if(consultaReserva.length == 0){
		return ({message: 'Reserva não existe.',
				status: 404})
	}
	return (await reservaRepositories.updateReserva(id,reserva))
}

export default{getAllReservas, getReserva, createReserva, 
               deleteReserva, updateReserva}

