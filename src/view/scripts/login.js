function LoginAutenticacao(){
    document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault(); //
    const username = document.getElementById('email');
    const password = document.getElementById('senha');

    if (username.value == "" || password.value == "") {
        return alert("Ambos os campos estão vazios!");
      }
      const email = username.value;
      const senha = password.value;

    // Envia os dados para o servidor usando a função fetch.
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,senha})
    })
    .then(response => {
        if (response.status === 200) {
            // Login bem-sucedido.
            alert('Login realizado com sucesso!');
            //redireciona para tela principal
            window.location.replace('telaPrincipal.html');
        }
        else if(response.status == 401){
             // Login falhou.
            alert('Login falhou. Verifique suas credenciais.');
        }
        else {
            // Falha na Chamada ao Banco de Dados.
            alert('Algum erro no sistema. Tente novamente em alguns minutos.');
        }
    })
    .catch(error => {
        // Ocorreu um erro ao enviar a solicitação.
        alert('Ocorreu um erro ao realizar o login. Tente novamente mais tarde.');
    });
    });
}

