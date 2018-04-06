//Backend
function Pizza(size){
  this.size = size;
  this.toppings = [];
  this.price = this.size * 5;
}

function Topping(name, price){
  this.name = name;
  this.price = price;
}

function Order(){
  this.pizzas = [];
  this.subTotal = 0;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

//Frontend
