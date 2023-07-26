document.addEventListener('DOMContentLoaded', function() {

    const queryString = window.location.search;

    // Crie um objeto URLSearchParams com a query string
    const params = new URLSearchParams(queryString);
  
    // Verifique se o parâmetro 'numero_quarto' existe na URL
    if (params.has('id_reserva') && params.has('numero_quarto') && params.has('cpf_cliente')){
      // Obtenha o valor do parâmetro 'numero_quarto'
      const valorQuarto = params.get('numero_quarto');
      const valorCpf = params.get('cpf_cliente');
      console.log(valorCpf);
      const inputQuarto = document.getElementById('numeroQuarto');
      const inputCpf = document.getElementById('cpfCliente');
  
      // Defina o valor obtido do parâmetro como o valor padrão do campo de input
      inputQuarto.value = valorQuarto;
      inputQuarto.setAttribute('readonly', true);
      inputCpf.value = valorCpf;
      inputCpf.setAttribute('readonly', true);
    }

    // Variáveis para armazenar temporariamente os dados do formulário
    let qnt_pessoas = "";
    let reserva_valor = "";
    let check_in_date = "";
    let check_out_date = "";
    let cpf_cliente = "";
    let id_reserva = getQueryParameter('id_reserva')

    // Função para capturar os dados do formulário antes do envio
    function capturarDadosFormulario(event) {
        event.preventDefault();
        console.log('Dados do formulário capturados.');
        numero_quarto= document.getElementById('numeroQuarto').value;
        qnt_pessoas = document.getElementById('qntPessoas').value;
        reserva_valor= document.getElementById('reservaValor').value;
        check_in_date= document.getElementById('checkIn').value;
        check_out_date = document.getElementById('checkOut').value;
        cpf_cliente = document.getElementById('cpfCliente').value;
        id_reserva = id_reserva;

        // Redirecionar para a página EditaReserva passando os dados como parâmetros de consulta
        window.location.href = `./confEditaReserva.html?numero_quarto=${encodeURIComponent(numeroQuartoValue)}&qnt_pessoas=${encodeURIComponent(qnt_pessoas)}&
        reserva_valor=${encodeURIComponent(reserva_valor)}&cpf_cliente=${encodeURIComponent(cpf_cliente)}&id_reserva=${id_reserva}&check_in=${check_in_date}&
        check_out_date=${check_out_date}`;
    }

    function getQueryParameter(parameterName) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get(parameterName);
    }
    // Adicionar o evento de captura de dados ao formulário
    document.getElementById("editaReservaForm").addEventListener("submit", capturarDadosFormulario);
});
