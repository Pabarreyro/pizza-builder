// Backend
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
    return base + topping.price;
  }, this.size * 5);
}

Order.prototype.priceOrder = function () {
  this.subTotal = this.pizzas.reduce(function(base, pizza) {
    return base + pizza.price;
  }, 0);
}

function setSize(sizeName) {
  let size = 0;

  if (sizeName === "Small") {
    size += 2;
  } else if (sizeName === "Medium") {
    size += 3;
  } else {
    size += 4;
  }
  return size;
}

// Frontend
$(function() {
  $("#start_order").click(function(){
    $("#start_order_box").toggleClass("hide");
    $("#pizza_builder").toggleClass("hide");

    let newOrder = new Order();

    $("#pizza_form").submit(function(event){
      event.preventDefault();

      $("#order_summary").toggleClass("hide");
      $("#size_output").text($("#size").val());

      let newPizza = new Pizza(setSize($("#size").val()));

      let cheeseInput = $("input:radio[name=cheese]:checked").val();
      if (cheeseInput) {
        let cheese = new Topping("Cheese", 0);
        newPizza.addTopping(cheese)
        $("#cheese_output").text("w Cheese");
      } else {
        $("#cheese_output").text("w/o Cheese");
      }

      $("input:checkbox[name=toppings]:checked").each(function(){
        $("#toppings_output").append("<li>" + this.id + "</li>")
        let newTopping = new Topping (this.id, parseInt($(this).val()));
        newPizza.addTopping(newTopping);
      });

      newPizza.pricePizza();

      $("#subtotal_output").text(newPizza.price);
    });
  });
});
