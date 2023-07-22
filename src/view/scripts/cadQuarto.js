function cadastraQuarto(){
    document.getElementById("cadastraQuartoForm").addEventListener("submit", function(event) {
    event.preventDefault(); //
    console.log('entrou aqui');
    const numeroQuarto = document.getElementById('numeroQuarto');
    const capacidadeQnt= document.getElementById('capacidade');
    const valorDia = document.getElementById('valorDia');
    const descricaoDes = document.getElementById('descricao');
    const status = false;
     //Validação dos campos
     if (numeroQuarto.value == "" || capacidadeQnt.value == "" || valorDia.value == "" || descricaoDes.value == ""){
        return alert("Alguns ou nenhum dos campos está preenchido.");
    }
    
    const numero_quarto = numeroQuarto.value;
    const capacidade = capacidadeQnt.value;
    const preco_noite = valorDia.value;
    const descricao = descricaoDes.value;
    
    // Envia os dados para o servidor usando a função fetch.
    fetch('http://localhost:3000/quarto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({numero_quarto,capacidade,preco_noite,status,descricao})
    })
    .then(response => {
        if (response.status == 200) {
            // Login bem-sucedido.
            return alert('Quarto Cadastrado com Sucesso');
            // Aqui, você pode redirecionar o usuário para outra página ou executar outras ações.
        }
        else if(response.status == 401){
            // Quarto falhou.
           return alert('Verifique se os dados estão inseridos corretamente.');
        }
        else {
            // Falha na Chamada ao Banco de Dados.
            return alert('Falha ao criar Quarto.');
        }
    })
    .catch(error => {
        // Ocorreu um erro ao enviar a solicitação.
        return alert('Ocorreu um erro ao realizar o login. Tente novamente mais tarde.');
    });
    });
}

