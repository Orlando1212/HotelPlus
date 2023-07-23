function preencherTabela() {
    var dataArray = [];
    let id_cliente;
    try {
        fetch('http://localhost:3000/reserva',{
            method:'GET',
            headers: {
            'Content-Type': 'application/json',
        }})
        .then(response =>{
        return response.json();
    }).then(data => {
        const tableBody = document.getElementById('tabelaReserva');
        dataArray.push(...data);

        dataArray.map((item) => {
            id_cliente = item.id_cliente;
            console.log(item);
            const row = document.createElement('tr');
    
            const primeiroNomeCell = document.createElement('td');
            primeiroNomeCell.textContent = item.id_reserva;
            row.appendChild(primeiroNomeCell);
    
            const ultimoNomeCell = document.createElement('td');
            ultimoNomeCell.textContent = item.id_quarto;
            row.appendChild(ultimoNomeCell);

            const cpfCell = document.createElement('td');
            cpfCell.textContent = item.id_cliente;
            row.appendChild(cpfCell);

            const telefoneCell = document.createElement('td');
            telefoneCell.textContent = item.check-in_date;
            row.appendChild(telefoneCell);


            const checkOutCell = document.createElement('td');
            checkOutCell.textContent = item.check-out_date;
            row.appendChild(checkOutCell);
            

            const emailCell = document.createElement('td');
            emailCell.textContent = item.reserva_valor;
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
                window.location.href = `confExclusaoRes.html?id_cliente=${id_cliente}`;
            } 
              // Função para lidar com o clique no botão "Excluir"
            function handleEditButtonClick() {
                window.location.href = `editReserva.html?id_cliente=${id_cliente}`;
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