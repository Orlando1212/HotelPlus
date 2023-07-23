document.addEventListener('DOMContentLoaded', function () {
    // Variáveis para armazenar temporariamente os dados do formulário vindo do CADCLIENTE
    let primeiroNomeValue = "";
    let ultimoNomeValue = "";
    let cpfIdValue = "";
    let dddTelefoneValue = "";
    let dataNascValue = "";
    let emailIdValue = "";

    // Função para mostrar os dados do formulário e realizar o cadastro
    function cadastraCliente() {
        // Recupera os valores dos campos do formulário vindo do CADCLIENTE
        primeiroNomeValue = getQueryParameter('primeiroNome');
        ultimoNomeValue = getQueryParameter('ultimoNome');
        cpfIdValue = getQueryParameter('cpfId');
        dddTelefoneValue = getQueryParameter('dddTelefone');
        dataNascValue = getQueryParameter('dataNasc');
        emailIdValue = getQueryParameter('emailId');

        // Mostra os valores do formulário para o usuário antes de confirmar o cadastro
        const confirmarCadastro = window.confirm(`Deseja confirmar o cadastro?\n\nNome: ${primeiroNomeValue} ${ultimoNomeValue}\nCPF: ${cpfIdValue}\nTelefone: ${dddTelefoneValue}\nData de Nascimento: ${dataNascValue}\nE-mail: ${emailIdValue}`);

        if (confirmarCadastro) {
            // Envia os dados para o servidor usando a função fetch.
            fetch('http://localhost:3000/cliente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cpf: cpfIdValue,
                    primeiro_nome: primeiroNomeValue,
                    ultimo_nome: ultimoNomeValue,
                    data_nasc: dataNascValue,
                    ddd_telefone: dddTelefoneValue,
                    email: emailIdValue
                })
            })
                .then(response => {
                    if (response.status == 200) {
                        // Cadastro bem-sucedido.
                        alert('Cliente Cadastrado com Sucesso');
                        window.location.href="telaPrincipal.html"
                        // Aqui, você pode redirecionar o usuário para outra página ou executar outras ações.
                    }
                    else if(response.status == 404){
                        alert('Cliente já existe.')
                        window.location.href="errCadastroExis.html"
                    }
                    else {
                        // Falha no cadastro.

                        alert('Falha ao cadastrar o cliente. Verifique os dados e tente novamente.');
                        window.location.href="erroCadastroRes.html"
                    }
                })
                .catch(error => {
                    // Ocorreu um erro ao enviar a solicitação.
                    return alert('Ocorreu um erro ao cadastrar o cliente. Tente novamente mais tarde.');
                });
        }
    }

    // Função para obter o valor de um parâmetro de consulta do URL
    function getQueryParameter(parameterName) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get(parameterName);
    }

    // Vincula a função ao botão "CADASTRAR" no CONFCADASTRO
    document.getElementById("confirmaCadastro").addEventListener("click", cadastraCliente);
});
