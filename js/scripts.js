// Business Logic
function Pizza(size, toppings, price) {
  this.size = size
  this.toppings = toppings
  this.price = price
};

// on submit, check which radio button from .size div is checked,
// pass that to size variable
// which one determines base price

// on submit, check how many radio buttons from .toppings div are checked
// pass that to toppings variable
// multiply number of toppings checked by 1.5
// add that number to base price to get final price

// return final price to user via html


Pizza.prototype.sizeCheck = function() {
  this.price = 12;
  if (this.size === "medium"){
    this.price += 2
  } else if (this.size === "large") {
    this.price += 4
  } else if (this.size === "family") {
    this.price += 6
  }
  console.log(this.price)
}

Pizza.prototype.toppingCheck = function() {
  var toppingCost = (this.toppings.length * 1.5);
  console.log(toppingCost)
  return toppingCost
};  
  
Pizza.prototype.finalPrice = function(){
  var finalPrice = (this.price += toppingCost)
  console.log(finalPrice)
  return finalPrice
};
  // UI Logic


$(document).ready(function() {
  $("form#menu").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val()
    var toppings = $("input:checkbox[name=topping]:checked")
    console.log(toppings.length)
    console.log(size)

    var pizza = new Pizza(size, toppings, price);
    pizza.sizeCheck();
    pizza.toppingCheck();
    pizza.finalPrice()
  })
  // pizza.sizeCheck
});