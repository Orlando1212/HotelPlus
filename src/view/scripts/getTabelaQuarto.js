function preencherTabela() {
    var dataArray = [];
    let id_quarto;
    try {
        fetch('http://localhost:3000/quarto',{
            method:'GET',
            headers: {
            'Content-Type': 'application/json',
        }})
        .then(response =>{
        return response.json();
    }).then(data => {
        const tableBody = document.getElementById('tabelaQuarto');
        dataArray.push(...data);

        dataArray.map((item) => {
            id_quarto = item.id_quarto;
            console.log(item);
            const row = document.createElement('tr');
    
            const primeiroNomeCell = document.createElement('td');
            primeiroNomeCell.textContent = item.numero_quarto;
            row.appendChild(primeiroNomeCell);
    
            const ultimoNomeCell = document.createElement('td');
            ultimoNomeCell.textContent = item.capacidade;
            row.appendChild(ultimoNomeCell);

            const telefoneCell = document.createElement('td');
            telefoneCell.textContent = item.preco_noite;
            row.appendChild(telefoneCell);

            const emailCell = document.createElement('td');
            emailCell.textContent = item.descricao;
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

            (function (id_quarto) {
            function handleDeleteButtonClick() {
                console.log(id_quarto);
                window.location.href = `confExclusaoQuar.html?id_quarto=${id_quarto}`;
            } 
              // Função para lidar com o clique no botão "Excluir"
            function handleEditButtonClick() {
                window.location.href = `editQuarto.html?id_quarto=${id_quarto}`;
              }     
                editButton.addEventListener('click',handleEditButtonClick);
                deleteButton.addEventListener('click',handleDeleteButtonClick);
            })(id_quarto);
        });
    })
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return [];
    }
}
  
preencherTabela();