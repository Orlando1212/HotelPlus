document.addEventListener('DOMContentLoaded', function() {
    // Variáveis para armazenar temporariamente os dados do formulário
    let numeroQuartoValue = "";
    let capacidadeValue = "";
    let precoNoiteValue = "";
    let statusValue = false;
    let descricaoValue = "";
    var id_quarto = getQueryParameter('id_quarto')
    console.log(id_quarto);

    // Função para capturar os dados do formulário antes do envio
    function capturarDadosFormulario(event) {
        event.preventDefault();
        console.log('Dados do formulário capturados.');
        numeroQuartoValue = document.getElementById('numeroQuarto').value;
        capacidadeValue = document.getElementById('capacidade').value;
        precoNoiteValue = document.getElementById('precoNoite').value;
        descricaoValue = document.getElementById('descricao').value;
        statusValue = statusValue;
        id_quarto = id_quarto;

        // Redirecionar para a página CONFCADASTRO passando os dados como parâmetros de consulta
        window.location.href = `./confEditaQuarto.html?numeroQuarto=${encodeURIComponent(numeroQuartoValue)}&capacidade=${encodeURIComponent(capacidadeValue)}&precoNoite=${encodeURIComponent(precoNoiteValue)}&descricao=${encodeURIComponent(descricaoValue)}&id_quarto=${id_quarto}`;
    }

    function getQueryParameter(parameterName) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get(parameterName);
    }
    // Adicionar o evento de captura de dados ao formulário
    document.getElementById("editaQuartoForm").addEventListener("submit", capturarDadosFormulario);
});
