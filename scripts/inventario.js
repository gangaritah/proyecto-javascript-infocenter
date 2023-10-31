let inventory = [
    { code: "2356", name: 'Martillo', quantity: 10 },
    { code: "0034", name: 'Destornillador', quantity: 20 }
];

let currentUser = null;


function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function showInventory() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    inventory.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `Código: ${product.code}  Nombre: ${product.name}  Cantidad: ${product.quantity}`;
        productList.appendChild(li);
    });
}

function showAddProductForm() {
}

function hideAddProductForm() {
    showMessage('');
}

function addProduct() {
    const codeProduct = document.getElementById('product-code').value;
    const productName = document.getElementById('product-name').value;
    const productQuantity = parseInt(document.getElementById('product-quantity').value, 10);

    if (productName && !isNaN(productQuantity) && productQuantity > 0 && codeProduct.length == 4) {
        inventory.push({code: codeProduct, name: productName, quantity: productQuantity });
        showInventory();
        hideAddProductForm();
        showMessage('Producto agregado al inventario.');
    } else {
        showMessage('Por favor, ingrese un nombre de producto válido y una cantidad válida.');
    }
}

showInventory()

