function handleConfirmarClick() {
    
    var id_quarto = getQueryParameter('id_quarto')

    // Fazer a chamada de fetch para deletar o cliente
    fetch(`http://localhost:3000/quarto/${id_quarto}`, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
        }
    })
      .then(response => { 
        if(response.status === 200) {window.location.href="sucExcluidoQuar.html";}
      })
      .catch(error => {
        // Lide com erros, se houver
        console.error('Erro na solicitação:', error);
      });
};

function getQueryParameter(parameterName) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(parameterName);
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('confirmaExclusaoQuarto').addEventListener('click', handleConfirmarClick);
});