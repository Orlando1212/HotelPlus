function preencherTabela() {
    var dataArray = [];
    let id_cliente;
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
            id_cliente = item.id_cliente;
            console.log(item);
            const row = document.createElement('tr');
    
            const primeiroNomeCell = document.createElement('td');
            primeiroNomeCell.textContent = item.primeiro_nome;
            row.appendChild(primeiroNomeCell);
    
            const ultimoNomeCell = document.createElement('td');
            ultimoNomeCell.textContent = item.ultimo_nome;
            row.appendChild(ultimoNomeCell);

            const cpfCell = document.createElement('td');
            if(item.cpf == null){
                item.cpf = '';
            }
            const regexCpf = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
            cpfFormated = item.cpf.replace(regexCpf,"$1.$2.$3-$4")
            cpfCell.textContent = cpfFormated;
            row.appendChild(cpfCell);

            const telefoneCell = document.createElement('td');
            telefoneCell.textContent = item.ddd_telefone;
            row.appendChild(telefoneCell);

            const nascimentoCell = document.createElement('td');
            formatedDate = new Date(item.data_nasc);
            formatedDate = String(formatedDate.getDate()).padStart(2, '0') + "/" + String(formatedDate.getMonth() + 1).padStart(2, '0') + "/" + formatedDate.getFullYear();
            nascimentoCell.textContent = formatedDate;
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

            (function (id_cliente) {
            function handleDeleteButtonClick() {
                console.log(id_cliente);
                window.location.href = `confExclusao.html?id_cliente=${id_cliente}`;
            } 
              // Função para lidar com o clique no botão "Excluir"
            function handleEditButtonClick() {
                window.location.href = `cadCliente.html?id_cliente=${id_cliente}`;
              }
                
                editButton.addEventListener('click',handleEditButtonClick);
                deleteButton.addEventListener('click',handleDeleteButtonClick);
            })(id_cliente);
        });
    })
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return [];
    }
}
  
preencherTabela();