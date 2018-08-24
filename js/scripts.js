// Business Logic

function Pizza(size, toppings){
  this.toppings = toppings
  this.size = size
}


Pizza.prototype.orderString = function() {
var orderString = ""
var toppings = this.toppings
var size = this.size
if (size == "xs"){
  orderString = "Extra Small Cheese Pizza"
}
if (size == "s"){
  orderString = "Small Cheese Pizza"
}
if (size == "m"){
  orderString = "Medium Cheese Pizza"
}
if (size == "l"){
  orderString = "Large Cheese Pizza"
}
if (size == "xl"){
  orderString = "Extra Large Cheese Pizza"
}
if (toppings.length !== 0 && toppings.length !== undefined){
  orderString += " with"
  for (i=0;i<toppings.length;i++){
  if (toppings.length > 1 && i == (toppings.length - 1)){
    orderString += " and"
  }
  console.log(toppings);
    orderString += " " + toppings[i]
    if (toppings.length > 2){
      orderString += ","
    }

}
    if (toppings.length > 2){
orderString = orderString.slice(0, - 1);
}
}
orderString += "."
return orderString

};

Pizza.prototype.cost = function() {
  var size = this.size
  var toppings = this.toppings
  var price = 0;
  if (size == "xs"){
    price = 10
  }
  if (size == "s"){
    price = 12
  }
  if (size == "m"){
    price = 14
  }
  if (size == "l"){
    price = 16
  }
  if (size == "xl"){
    price = 20
  }
  toppings.forEach(function(topping){
    price ++
  })
  price = price.toString() + ".00"
  return price


}
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
    $("#output").append("<li>" + pizza.orderString() + "  Total Price: " + pizza.cost() + "</li>")
  })






});
