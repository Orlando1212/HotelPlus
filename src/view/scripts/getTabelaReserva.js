function preencherTabela() {
    var dataArray = [];
    let id_reserva;
    let numero_quarto;
    let cpf_cliente;
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
            id_reserva = item.id_reserva;
            numero_quarto = item.numero_quarto;
            cpf_cliente = item.cpf_cliente;
            console.log(item);
            const row = document.createElement('tr');
    
            const ultimoNomeCell = document.createElement('td');
            ultimoNomeCell.textContent = item.numero_quarto;
            row.appendChild(ultimoNomeCell);

            const cpfCell = document.createElement('td');
            cpfCell.textContent = item.cpf_cliente;
            row.appendChild(cpfCell);

            const telefoneCell = document.createElement('td');
            formatedDate = new Date(item.check_in_date);
            formatedDate = String(formatedDate.getDate()).padStart(2, '0') + "/" + String(formatedDate.getMonth() + 1).padStart(2, '0') + "/" + formatedDate.getFullYear();
            telefoneCell.textContent = formatedDate;
            row.appendChild(telefoneCell);


            const checkOutCell = document.createElement('td');
            formatedDate = new Date(item.check_out_date);
            formatedDate = String(formatedDate.getDate()).padStart(2, '0') + "/" + String(formatedDate.getMonth() + 1).padStart(2, '0') + "/" + formatedDate.getFullYear();
            checkOutCell.textContent = formatedDate;
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

            (function (id_reserva) {
            function handleDeleteButtonClick() {
                console.log(id_reserva);
                window.location.href = `confExclusaoRes.html?id_reserva=${id_reserva}?`;
            } 
              // Função para lidar com o clique no botão "Excluir"
            function handleEditButtonClick() {
                console.log(id_reserva);
                console.log(numero_quarto);
                window.location.href = `editReserva.html?id_reserva=${id_reserva}&numero_quarto=${numero_quarto}&cpf_cliente=${cpf_cliente}`;
              }     
                editButton.addEventListener('click',handleEditButtonClick);
                deleteButton.addEventListener('click',handleDeleteButtonClick);
            })(id_reserva);
        });
    })
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return [];
    }
}
  
preencherTabela();