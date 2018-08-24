// Business Logic

function Pizza(size, toppings){
  this.toppings = toppings
  this.size = size
}


Pizza.prototype.orderString = function() {
  console.log(this);
var orderString = ""
var toppings = this.toppings
var size = this.size
if (size = "xs"){
  orderString = "Extra Small Cheese Pizza"
}
if (size = "s"){
  orderString = "Small Cheese Pizza"
}
if (size = "m"){
  orderString = "Medium Cheese Pizza"
}
if (size = "l"){
  orderString = "Large Cheese Pizza"
}
if (size = "xl"){
  orderString = "Extra Large Cheese Pizza"
}

if (toppings.length !== 0 && toppings.length !== undefined){
  orderString += " with"
  this.toppings.forEach(function(topping){
    orderString += topping + ", "
  })
  orderString -= ", "
  orderString += "."
}
return orderString

};

// User Interface

$(function() {
  $("form.order").submit(function(event){
    event.preventDefault();
    var toppings = []
    var size = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });

    var pizza = new Pizza(size, toppings)
    console.log(pizza);
    $("#output").append("<li>" + pizza.orderString() + "</li>")
  })






});
