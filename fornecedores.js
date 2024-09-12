document.getElementById('supplierForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const supplierName = document.getElementById('supplierName').value;
    const supplierContact = document.getElementById('supplierContact').value;
    const supplierProduct = document.getElementById('supplierProduct').value;
    const supplierQuantity = document.getElementById('supplierQuantity').value;


    addSupplierToTable(supplierName, supplierContact, supplierProduct, supplierQuantity);


   
    document.getElementById('supplierForm').reset();
});




function addSupplierToTable(name, contact, product, quantity) {
    const tableBody = document.querySelector('#supplierTable tbody');
    const row = document.createElement('tr');


    row.innerHTML = `
        <td>${name}</td>
        <td>${contact}</td>
        <td>${product}</td>
        <td>${quantity}</td>
        <td><button class="delete-btn" style="background-color: red; color: white;">Excluir</button></td>
    `;


    tableBody.appendChild(row);


   
    row.querySelector('.delete-btn').addEventListener('click', function() {
        tableBody.removeChild(row);
    });
}
