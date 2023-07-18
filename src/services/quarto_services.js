import quartoRepositories from '../repositories/quarto_repositories.js';


//========= QUARTO ==============
async function getAllQuartos() {
	return (await quartoRepositories.getAllQuartos())
}

async function getQuarto(id) {
    return (await quartoRepositories.getQuarto(id))
}

async function deleteQuarto(id) {
	return (await quartoRepositories.deleteQuarto(id) )
}

async function createQuarto(quarto) {
	var consultaprod = await getQuarto(quarto.id);
	
	if (consultaprod.length>0){
		return "Erro, Quarto já existe"
	}
	
	return (await quartoRepositories.createQuarto(quarto))
}

async function updateQuarto(id,quarto) {
	var consultaprod = await getQuarto(id);
	
	if (consultaprod.length==0){
		return "Erro!!! Quarto não existe."
	}
	return (await quartoRepositories.updateQuarto(id) )
}

export default{getAllQuartos, getQuarto, createQuarto, 
               deleteQuarto, updateQuarto}

