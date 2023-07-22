function preencherTabela() {
    var dataArray = [];
    try {
        fetch('http://localhost:3000/cliente',{
            method:'GET',
            headers: {
            'Content-Type': 'application/json',
        }})
        .then(response =>{
        return response.json();
    }).then(data => {
        const tableBody = document.getElementById('tabelaCliente');
        dataArray.push(...data);

        dataArray.map((item) => {
            console.log(item);
            const row = document.createElement('tr');
    
            const primeiroNomeCell = document.createElement('td');
            primeiroNomeCell.textContent = item.primeiro_nome;
            row.appendChild(primeiroNomeCell);
    
            const ultimoNomeCell = document.createElement('td');
            ultimoNomeCell.textContent = item.ultimo_nome;
            row.appendChild(ultimoNomeCell);

            const cpfCell = document.createElement('td');
            cpfCell.textContent = item.cpf;
            row.appendChild(cpfCell);

            const telefoneCell = document.createElement('td');
            telefoneCell.textContent = item.ddd_telefone;
            row.appendChild(telefoneCell);

            const nascimentoCell = document.createElement('td');
            nascimentoCell.textContent = item.data_nasc;
            row.appendChild(nascimentoCell);

            const emailCell = document.createElement('td');
            emailCell.textContent = item.email;
            row.appendChild(emailCell);
            
    
            const actionsCell = document.createElement('td');
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.classList.add('edit-btn');
            actionsCell.appendChild(editButton);
    
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';   
            deleteButton.classList.add('delete-btn');
            actionsCell.appendChild(deleteButton);
    
            row.appendChild(actionsCell);
    
            tableBody.appendChild(row);
        });
    })
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return [];
    }

}

preencherTabela();