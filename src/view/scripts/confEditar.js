document.addEventListener('DOMContentLoaded', function () {
    // Variáveis para armazenar temporariamente os dados do formulário vindo do CADCLIENTE
    let primeiroNomeValue = "";
    let ultimoNomeValue = "";
    let cpfIdValue = "";
    let dddTelefoneValue = "";
    let dataNascValue = "";
    let emailIdValue = "";
    let id_cliente = "";

    // Função para mostrar os dados do formulário e realizar o cadastro
    function editaCliente() {
        // Recupera os valores dos campos do formulário vindo do CADCLIENTE
        primeiroNomeValue = getQueryParameter('primeiroNome');
        ultimoNomeValue = getQueryParameter('ultimoNome');
        cpfIdValue = getQueryParameter('cpfId');
        dddTelefoneValue = getQueryParameter('dddTelefone');
        dataNascValue = getQueryParameter('dataNasc');
        emailIdValue = getQueryParameter('emailId');
        id_cliente = getQueryParameter('id_cliente');

        dataNascValue = new Date(dataNascValue);

            // Envia os dados para o servidor usando a função fetch.
            fetch(`http://localhost:3000/cliente/${id_cliente}`, {
                method: 'PUT',
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
                        window.location.href="sucEditado.html"
                        // Aqui, você pode redirecionar o usuário para outra página ou executar outras ações.
                    }
                    else if(response.status == 404){
                        window.location.href="errCadastroExis.html"
                    }
                    else {
                        // Falha no cadastro.
                        window.location.href="errCadastroRes.html"
                    }
                })
                .catch(error => {
                    // Ocorreu um erro ao enviar a solicitação.
                    return alert('Ocorreu um erro ao cadastrar o cliente. Tente novamente mais tarde.');
                });
    }

    // Função para obter o valor de um parâmetro de consulta do URL
    function getQueryParameter(parameterName) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get(parameterName);
    }

    // Vincula a função ao botão "CADASTRAR" no CONFCADASTRO
    document.getElementById("confirmaEdita").addEventListener("click", editaCliente);
});