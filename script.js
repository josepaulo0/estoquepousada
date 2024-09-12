document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const productName = document.getElementById('productName').value;
    const productQuantity = parseInt(document.getElementById('productQuantity').value);


    if (productQuantity <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }


    addProductToTable(productName, productQuantity);


    document.getElementById('productForm').reset();
});


function addProductToTable(name, quantity) {
    const tableBody = document.querySelector('#productTable tbody');
    const row = document.createElement('tr');


    row.innerHTML = `
        <td>${name}</td>
        <td>${quantity}</td>
        <td><button class="delete-btn" style="background-color: red; color: white;">Excluir</button></td> <!-- Botão de excluir -->
    `;


    tableBody.appendChild(row);


    row.querySelector('.delete-btn').addEventListener('click', function() {
        tableBody.removeChild(row);
    });
}


