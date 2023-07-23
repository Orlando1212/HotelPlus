document.addEventListener('DOMContentLoaded', function () {
    // Variáveis para armazenar temporariamente os dados do formulário vindo do CADCLIENTE
    let numeroQuartoValue = "";
    let capacidadeValue = "";
    let precoNoiteValue = "";
    let statusValue = false;
    let descricaoValue = "";
    var id_quarto = getQueryParameter('id_quarto')

    // Função para mostrar os dados do formulário e realizar o cadastro
    function editaCliente() {
        // Recupera os valores dos campos do formulário vindo do CADCLIENTE
        numeroQuartoValue = getQueryParameter('numeroQuarto');
        capacidadeValue = getQueryParameter('capacidade');
        precoNoiteValue = getQueryParameter('precoNoite');
        descricaoValue = getQueryParameter('descricao');
        statusValue = statusValue;

        // Mostra os valores do formulário para o usuário antes de confirmar o cadastro
        const confirmarCadastro = window.confirm(`Deseja Editar?\n\nNumeroQuarto: ${numeroQuartoValue}\ncapacidade: ${capacidadeValue}\nprecoNoite: ${precoNoiteValue}\ndescricao: ${descricaoValue}`);

        if (confirmarCadastro) {
            // Envia os dados para o servidor usando a função fetch.
            fetch(`http://localhost:3000/quarto/${id_quarto}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    capacidade: capacidadeValue,
                    numero_quarto: numeroQuartoValue,
                    preco_noite: precoNoiteValue,
                    descricao: descricaoValue,
                    status: statusValue,
                })
            })
                .then(response => {
                    if (response.status == 200) {
                        // Cadastro bem-sucedido.
                        alert('Cliente Alterado com Sucesso');
                        window.location.href="sucEditado.html"
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
    document.getElementById("confirmaEdita").addEventListener("click", editaCliente);
});
