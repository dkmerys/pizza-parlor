// Business Logic
function Pizza(size, toppings) {
  this.size = size
  this.toppings = toppings
};

// var toppings = 
// var userPizza = new Pizza (size, toppings)
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


Pizza.prototype.sizeCheck = function() {

}









// UI Logic

var sizeCheck = function(size) {
  if (size === "small") {
    this.price = 12
  }
}

$(document).ready(function() {
  $("form#menu").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=topping]:checked").each.click(function(){
      if($(this).prop("checked") == true){
        console.log("checkbox is checked.")
      }
      else if($(this).prop("checked") ==false){
        console.log("Checkbox is unchecked.");
      }
    })

    // var size = $("input:radio[name=size]:checked").val()
    // console.log(size)

    // var toppings = $("input:checkbox[name=topping]:checked").val()
    // console.log(toppings)
  })
});