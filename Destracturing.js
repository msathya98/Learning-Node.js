const name= "sathya";
const age = 22;

const user = {
	name,
	age,
	location: "mysore"
}

console.log(user)


//Object destracturing 

const product = {
	label: "red Notebook",
	price: 20,
	stock: 200,
	salesPrice: undefined
}

/* const {label:productLabel, stock, rating = 2} = product
console.log(productLabel)
console.log(stock)
console.log(rating) */

const transaction = (type, {label, stock, rating = 2}) => {
	console.log(type, label, stock, rating)
}
 transaction('order', product)
