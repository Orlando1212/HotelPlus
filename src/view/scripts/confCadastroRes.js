document.addEventListener('DOMContentLoaded', function () {
    // Variáveis para armazenar temporariamente os dados do formulário vindo do CADCLIENTE
    let qntPessoasValue = "";
    let reservaValorValue = "";
    let check_in_dateValue = false;
    let check_out_dateValue= "";
    let cpfClienteValue = "";

    // Função para mostrar os dados do formulário e realizar o cadastro
    function cadastraQuarto() {
        // Recupera os valores dos campos do formulário vindo do CADCLIENTE
        numeroQuartoValue = getQueryParameter('numero_quarto');
        qntPessoasValue = getQueryParameter('qnt_pessoas');
        reservaValorValue = getQueryParameter('reserva_valor');
        check_in_dateValue = getQueryParameter('check_in_date');
        check_out_dateValue = getQueryParameter('check_out_date');
        cpfClienteValue = getQueryParameter('cpf_cliente');

            // Envia os dados para o servidor usando a função fetch.
            fetch('http://localhost:3000/reserva', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    numero_quarto: numeroQuartoValue,
                    cpf_cliente: cpfClienteValue,
                    qnt_pessoas: qntPessoasValue,
                    reserva_valor: reservaValorValue,
                    check_in_date: check_in_dateValue,
                    check_out_date:check_out_dateValue,
                })
            })
                .then(response => {
                    if (response.status == 200) {
                        // Cadastro bem-sucedido.
                        window.location.href="sucCadastroRes.html"
                        // Aqui, você pode redirecionar o usuário para outra página ou executar outras ações.
                    }
                    else if(response.status == 404){
                        window.location.href="errCadastroRes.html"
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
    document.getElementById("confirmaCadastroReserva").addEventListener("click", cadastraQuarto);
});
