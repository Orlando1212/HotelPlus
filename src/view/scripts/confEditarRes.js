document.addEventListener('DOMContentLoaded', function () {
    // Variáveis para armazenar temporariamente os dados do formulário vindo do CADCLIENTE
    let qntPessoas = "";
    let reservaValor = "";
    let check_in_dateValue = "";
    let check_out_dateValue = "";
    let cpfCliente = "";
    let id_reserva = getQueryParameter('id_reserva')

    // Função para mostrar os dados do formulário e realizar o cadastro
    function editaCliente() {
        // Recupera os valores dos campos do formulário vindo do CADCLIENTE
        numeroquartoValue= getQueryParameter('numero_quarto');
        qntPessoas = getQueryParameter('qnt_pessoas');
        reservaValor= getQueryParameter('reserva_valor');
        check_in_dateValue= getQueryParameter('check_in');
        check_out_dateValue = getQueryParameter('check_out');
        cpfCliente = getQueryParameter('cpf_cliente');
        id_reserva = id_reserva;

        // Mostra os valores do formulário para o usuário antes de confirmar o cadastro

            // Envia os dados para o servidor usando a função fetch.
            fetch(`http://localhost:3000/reserva/${id_reserva}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    check_in_date: check_in_dateValue,
                    check_out_date: check_out_dateValue,
                    qnt_pessoas: qntPessoas,
                    reserva_valor: reservaValor,
                })
            })
                .then(response => {
                    if (response.status == 200) {
                        // Cadastro bem-sucedido.
                        window.location.href="sucEditadoRes.html"
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
    document.getElementById("confirmaEdita").addEventListener("click", editaCliente);
});
