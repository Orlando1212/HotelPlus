document.addEventListener('DOMContentLoaded', function() {

    const queryString = window.location.search;

    // Crie um objeto URLSearchParams com a query string
    const params = new URLSearchParams(queryString);
  
    // Verifique se o parâmetro 'numero_quarto' existe na URL
    if (params.has('numero_quarto')) {
      // Obtenha o valor do parâmetro 'numero_quarto'
      const valorQuarto = params.get('numero_quarto');
      const inputQuarto = document.getElementById('numeroQuarto');
  
      // Defina o valor obtido do parâmetro como o valor padrão do campo de input
      inputQuarto.value = valorQuarto;
      inputQuarto.setAttribute('readonly', true);
    }
    // Variáveis para armazenar temporariamente os dados do formulário
    let qnt_pessoas = "";
    let reserva_valor = "";
    let check_in_date = "";
    let check_out_date = "";
    let cpf_cliente = "";

    // Função para capturar os dados do formulário antes do envio
    function capturarDadosFormularioQuarto(event) {
        event.preventDefault();
        console.log('Dados do formulário capturados.');
        numero_quarto = document.getElementById('numeroQuarto').value;
        cpf_cliente = document.getElementById('cpfCliente').value;
        qnt_pessoas = document.getElementById('qntPessoas').value;
        check_out_date = document.getElementById('checkOut').value;
        check_in_date = document.getElementById('checkIn').value;
        reserva_valor = document.getElementById('reservaValor').value;

        // Redirecionar para a página CONFCADASTRO passando os dados como parâmetros de consulta
        window.location.href = `./confCadastroRes.html?numero_quarto=${encodeURIComponent(numero_quarto)}&qnt_pessoas=${encodeURIComponent(qnt_pessoas)}&reserva_valor=${encodeURIComponent(reserva_valor)}&check_out_date=${encodeURIComponent(check_out_date)}&check_in_date=${encodeURIComponent(check_in_date)}
        &cpf_cliente=${encodeURIComponent(cpf_cliente)}`;
    }

    // Adicionar o evento de captura de dados ao formulário
    document.getElementById("cadastraReserva").addEventListener("submit", capturarDadosFormularioQuarto);
});
