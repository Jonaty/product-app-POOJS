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

	deleteProduct(element){
		if(element.name === 'delete'){
			// to access to its parent elements and delete it (element = product)
			element.parentElement.parentElement.parentElement.remove();
		}
	}
}

function getData(e) {
	let name = document.getElementById('name').value;
	let price = document.getElementById('price').value;
	let year = document.getElementById('year').value;
	let product = new Product(name, price, year);
	let ui = new UI();
	ui.addProduct(product);
	e.preventDefault();
}

function deleteData(e){
	let ui = new UI();
	ui.deleteProduct(e.target);
}

// DOM Events
document.getElementById('product-form').addEventListener('submit', getData);

document.getElementById('product-list').addEventListener('click', deleteData);
