// Business Logic
function Pizza(size, toppings, price) {
  this.size = size
  this.toppings = toppings
  this.price = price
};

Pizza.prototype.sizeCheck = function() {
  this.price = 10;
  if (this.size === "medium"){
    this.price += 2
  } else if (this.size === "large") {
    this.price += 4
  } else if (this.size === "family") {
    this.price += 6
  }
  return this.price
}

Pizza.prototype.toppingCheck = function() {
  var toppingCost = (this.toppings.length * 1.50);
  console.log(toppingCost)
  return toppingCost
};  

// UI Logic

Pizza.prototype.finalPrice = function(){
  var base = this.sizeCheck();
  var addOn = this.toppingCheck();
  var finalPrice = (base + addOn);
  $("#price").html(finalPrice)
  console.log(finalPrice)
};


$(document).ready(function() {
  $("form#menu").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val()
    var toppings = $("input:checkbox[name=topping]:checked")
    console.log(toppings.length)
    console.log(size)

    var pizza = new Pizza(size, toppings, price);
    pizza.finalPrice()
    
    $(".well").fadeToggle(650);
  })
});