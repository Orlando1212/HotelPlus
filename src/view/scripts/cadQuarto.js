document.addEventListener('DOMContentLoaded', function() {
    // Variáveis para armazenar temporariamente os dados do formulário
    let numeroQuartoValue = "";
    let capacidadeValue = "";
    let precoNoiteValue = "";
    let statusValue = false;
    let descricaoValue = "";

    // Função para capturar os dados do formulário antes do envio
    function capturarDadosFormularioQuarto(event) {
        event.preventDefault();
        console.log('Dados do formulário capturados.');
        numeroQuartoValue = document.getElementById('numeroQuarto').value;
        capacidadeValue = document.getElementById('capacidade').value;
        precoNoiteValue = document.getElementById('precoNoite').value;
        descricaoValue = document.getElementById('descricao').value;
        statusValue = statusValue;

        // Redirecionar para a página CONFCADASTRO passando os dados como parâmetros de consulta
        window.location.href = `./confCadastroQuar.html?numeroQuarto=${encodeURIComponent(numeroQuartoValue)}&capacidade=${encodeURIComponent(capacidadeValue)}&precoNoite=${encodeURIComponent(precoNoiteValue)}&descricao=${encodeURIComponent(descricaoValue)}`;
    }

    // Adicionar o evento de captura de dados ao formulário
    document.getElementById("cadastroQuartoForm").addEventListener("submit", capturarDadosFormularioQuarto);
});
