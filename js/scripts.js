// Business Logic
function Pizza(size, toppings) {
  this.size = size
  this.toppings = toppings
};

var toppings = ["pepperoni", "sausage", "mushrooms", "bacon", "black-olives", "canadian-bacon", "chicken", "extra-cheese", "anchovies", "bell-peppers"];
var size = ["small", "medium", "large", "family"]
var userPizza = new Pizza (size, toppings)
// write a prototype method that uses the properties of the object
// to determine the price and adds price as a new property to the object


Pizza.prototype.sizeCheck = function() {

}
// on submit, check which radio button from .size div is checked,
// pass that to size variable
// which one determines base price

// on submit, check how many radio buttons from .toppings div are checked
// pass that to toppings variable
// multiply number of toppings checked by 1.5
// add that number to base price to get final price

// return final price to user via html












// UI Logic
$(document).ready(function() {
  $("form#menu").submit(function(event) {
    $(event).preventDefault();
  })
});