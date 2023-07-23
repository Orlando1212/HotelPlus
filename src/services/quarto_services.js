import quartoRepositories from '../repositories/quarto_repositories.js';


//========= QUARTO ==============
async function getAllQuartos() {
	return (await quartoRepositories.getAllQuartos())
}

async function getQuarto(id) {
    return (await quartoRepositories.getQuarto(id))
}

async function deleteQuarto(id) {
	var consultaQuarto = await quartoRepositories.getQuarto(id);

	if(consultaQuarto.length == 0){
		return ({message: 'Quarto não existe.',
				status: 404})
	}

	return (await quartoRepositories.deleteQuarto(id) )
}

async function createQuarto(quarto) {
	
	return (await quartoRepositories.createQuarto(quarto))
}

async function updateQuarto(id,quarto) {
	var consultaQuarto = await quartoRepositories.getQuarto(id);

	if(consultaQuarto.length == 0){
		return ({message: 'Quarto não existe.',
				status: 404})
	}

	return (await quartoRepositories.updateQuarto(id,quarto) )
}

export default{getAllQuartos, getQuarto, createQuarto, 
               deleteQuarto, updateQuarto}

