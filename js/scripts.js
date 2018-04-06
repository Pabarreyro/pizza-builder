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
Pizza.prototype.pricePizza = function () {
  this.price = this.toppings.reduce(function(base, topping) {
    return base + topping.price;}, this.size * 5);
  }

Order.prototype.priceOrder = function () {
  this.subTotal = this.pizzas.reduce(function(base, pizza) {
    return base + pizza.price;
  }, 0);
}

//Frontend
