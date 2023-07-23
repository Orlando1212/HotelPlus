document.addEventListener('DOMContentLoaded', function() {
    // Variáveis para armazenar temporariamente os dados do formulário
    let primeiroNomeValue = "";
    let ultimoNomeValue = "";
    let cpfIdValue = "";
    let dddTelefoneValue = "";
    let dataNascValue = "";
    let emailIdValue = "";

    // Função para capturar os dados do formulário antes do envio
    function capturarDadosFormulario(event) {
        event.preventDefault();
        console.log('Dados do formulário capturados.');
        primeiroNomeValue = document.getElementById('primeiroNome').value;
        ultimoNomeValue = document.getElementById('ultimoNome').value;
        cpfIdValue = document.getElementById('cpfId').value;
        dddTelefoneValue = document.getElementById('dddTelefone').value;
        dataNascValue = document.getElementById('dataNasc').value;
        emailIdValue = document.getElementById('emailId').value;

        // Redirecionar para a página CONFCADASTRO passando os dados como parâmetros de consulta
        window.location.href = `./confCadastro.html?primeiroNome=${encodeURIComponent(primeiroNomeValue)}&ultimoNome=${encodeURIComponent(ultimoNomeValue)}&cpfId=${encodeURIComponent(cpfIdValue)}&dddTelefone=${encodeURIComponent(dddTelefoneValue)}&dataNasc=${encodeURIComponent(dataNascValue)}&emailId=${encodeURIComponent(emailIdValue)}`;
    }

    // Adicionar o evento de captura de dados ao formulário
    document.getElementById("cadastroClienteForm").addEventListener("submit", capturarDadosFormulario);
});
