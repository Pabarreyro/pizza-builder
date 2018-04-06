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

// Test
let Anchovy = new Topping("Anchovy", 2);
let Cheese = new Topping("Cheese", 0);
let Pepperoni = new Topping("Pepperoni", 1);
let Mushrooms = new Topping("Mushrooms", 1);
let Pineapple = new Topping("Pineapple", 1);

let newOrder = new Order();
console.log(newOrder);

let newPizza = new Pizza(2);
console.log(newPizza);
newPizza.addTopping(Cheese);
newPizza.pricePizza();
console.log(newPizza);
newPizza.addTopping(Anchovy);
newPizza.pricePizza();
console.log(newPizza);
newPizza.addTopping(Mushrooms);
newPizza.pricePizza();
console.log(newPizza);
newOrder.addPizza(newPizza);
newOrder.priceOrder();
console.log(newOrder);

//Frontend
