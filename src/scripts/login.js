document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário (comportamento padrão).

    const username = document.getElementById('usuario').value;
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
            Alert('Login realizado com sucesso!');
            // Aqui, você pode redirecionar o usuário para outra página ou executar outras ações.
        } else {
            // Login falhou.
            Alert('Login falhou. Verifique suas credenciais.');
        }
    })
    .catch(error => {
        // Ocorreu um erro ao enviar a solicitação.
        Alert('Ocorreu um erro ao realizar o login. Tente novamente mais tarde.');
    });
});