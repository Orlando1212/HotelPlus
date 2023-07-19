
function LoginAutenticacao(){

    const username = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    // Dados do usuário a serem enviados para o servidor.
    const userData = {
        username: username,
        password: password
    };

    // Envia os dados para o servidor usando a função fetch.
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.ok) {
            // Login bem-sucedido.
            alert('Login realizado com sucesso!');
            // Aqui, você pode redirecionar o usuário para outra página ou executar outras ações.
        } else {
            // Login falhou.
            alert('Login falhou. Verifique suas credenciais.');
        }
    })
    .catch(error => {
        // Ocorreu um erro ao enviar a solicitação.
        alert('Ocorreu um erro ao realizar o login. Tente novamente mais tarde.');
    });
}

