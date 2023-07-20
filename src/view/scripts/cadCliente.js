function cadastraCliente(){
    document.getElementById("cadastroClienteForm").addEventListener("submit", function(event) {
    event.preventDefault(); //
    console.log('entrou aqui');
    const primeiroNome = document.getElementById('primeiroNome');
    const ultimoNome = document.getElementById('ultimoNome');
    const cpfId = document.getElementById('cpfId');
    const dddTelefone = document.getElementById('dddTelefone');
    const dataNasc = document.getElementById('dataNasc');
    const emailId = document.getElementById('emailId');
    
        //Validação dos campos
    if (primeiroNome.value == "" || ultimoNome.value == "" || cpfId.value == "" || dddTelefone.value == "" || dataNasc.value == "" || emailId.value){
        alert("Alguns ou nenhum dos campos está preenchido.");
    }
    
    const primeiro_nome = primeiroNome.value;
    const ultimo_nome = ultimoNome.value;
    const cpf = cpfId.value;
    const ddd_telefone = dddTelefone.value;
    const data_nasc = dataNasc.value;
    const email = emailId.value;

    // Envia os dados para o servidor usando a função fetch.
    fetch('http://localhost:3000/cliente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({cpf,primeiro_nome,ultimo_nome,data_nasc,ddd_telefone,email})
    })
    .then(response => {
        if (response.ok) {
            // Login bem-sucedido.
            alert('Login realizado com sucesso!');
            // Aqui, você pode redirecionar o usuário para outra página ou executar outras ações.
        }
        else if(response.status == 401){
            // Login falhou.
           alert('Login falhou. Verifique suas credenciais.');
        }
        else {
            // Falha na Chamada ao Banco de Dados.
            alert('Login falhou. Verifique suas credenciais.');
        }
    })
    .catch(error => {
        // Ocorreu um erro ao enviar a solicitação.
        alert('Ocorreu um erro ao realizar o login. Tente novamente mais tarde.');
    });
    });
}

