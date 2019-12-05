class Product {
	// El constructor es un método que se ejecuta apenas se crea un nuevo objeto utilizando la clase
	constructor(name, price, year) {
		// Parametros que van a conformar el objeto Producto
		this.name = name;
		this.price = price;
		this.year = year;
	}
}
class UI {
	addProduct(product) {
		let productList = document.getElementById('product-list');
		let element = document.createElement('div');
		element.innerHTML = `
        <div class="card text-center mb-4"> 
                <div class="card-body">
                <strong> Producto name: </strong> ${product.name}
                <strong> Producto price: </strong> ${product.price}
				<strong> Producto year: </strong> ${product.year}
				<a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
        </div>
		`;
		productList.appendChild(element);
		this.resetForm();
	}

	resetForm(){
		document.getElementById('product-form').reset();
	}
}

function obtenerDatos(e) {
	let name = document.getElementById('name').value;
	let price = document.getElementById('price').value;
	let year = document.getElementById('year').value;
	let product = new Product(name, price, year);
	let ui = new UI();
	ui.addProduct(product);
	e.preventDefault();
}

// DOM Events
document.getElementById('product-form').addEventListener('submit', obtenerDatos);