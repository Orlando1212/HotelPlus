document.addEventListener('DOMContentLoaded', function() {
    // Variáveis para armazenar temporariamente os dados do formulário
    let dataInicio = "";
    let dataFim = "";

    // Função para capturar os dados do formulário antes do envio
    function capturarDadosFormulario(event) {
        event.preventDefault();
        console.log('Dados do formulário capturados.');
        dataInicio = document.getElementById('primeiraData').value;
        dataFim = document.getElementById('ultimaData').value;
        numero_quarto = getQueryParameter('numero_quarto')

        fetch(`http://localhost:3000/reserva/${dataInicio}/${dataFim}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (response.status == 200) {
                    // Busca bem-sucedida.
                    window.location.href = `./reservarQuartoDois.html?numero_quarto=${encodeURIComponent(numero_quarto)}`;
                }
                else if(response.status == 404){
                    window.location.href="errCadastroRes.html"
                }
                else {
                    window.location.href="errCadastroRes.html"
                }
            })
            .catch(error => {
                // Ocorreu um erro ao enviar a solicitação.
                return alert('Ocorreu um erro ao cadastrar o cliente. Tente novamente mais tarde.');
            });
    }

    function getQueryParameter(parameterName) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get(parameterName);
    }

    // Adicionar o evento de captura de dados ao formulário
    document.getElementById("buscaDatas").addEventListener("submit", capturarDadosFormulario);
});
