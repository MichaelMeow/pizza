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
  orderString = "Extra small cheese pizza"
}
if (size == "s"){
  orderString = "Small cheese pizza"
}
if (size == "m"){
  orderString = "Medium cheese pizza"
}
if (size == "l"){
  orderString = "Large cheese pizza"
}
if (size == "xl"){
  orderString = "Extra large cheese pizza"
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
  return price
}

function delivery(){
  var time = new Date();
  var min = parseInt(time.getMinutes())+30
  var hr = parseInt(time.getHours())
  if (min > 59){
    min = min - 60
    hr = hr + 1
    if (hr > 12){
      hr = hr - 12
    }
  }
  min = ("0" + min.toString()).slice(-2)
  hr = hr.toString()
  return hr + ":" + min

}
// User Interface

$(function() {

  var totalCost = 0
  $("form.order").submit(function(event){
    if ($("#name").val() == false || $("#address-1").val() == false){
      alert("Please enter a valid name and address.")
    } else {
    var orders = []
    event.preventDefault();
    var toppings = []
    var size = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });
    var pizza = new Pizza(size, toppings)
    orders.push(pizza);
    orders.forEach(function(order){
      $("#output").append("<li>" + order.orderString() + ' <span class="cancel"> cancel<span></li>')
      $(".cancel").last().click(function(){
        $((this.parentElement)).remove()

        totalCost -= order.cost();
        $("#total").html("  Total Price: $" + totalCost + ".00")
      })
      totalCost += order.cost();
    })
    $("#delivery").html("Deliver to: " + $("#name").val() + " at " + $("#address-1").val() + " " + $("#address-2").val())
    $("#total").html("  Total Price: $" + totalCost + ".00")
    $('input:checkbox').prop('checked',false)
    $("#finalize").show();
  }
  })
  $("#finalize").click(function(){
    $("input:radio").attr('disabled',true);
    $("input:checkbox").attr('disabled',true);
    $(':input[type="submit"]').prop('disabled', true);
    $(':input[type="text"]').prop('disabled', true);
    $("#finalize").hide();
    $("#thanks").html("Thank you for your order!")
    $("#time").html("Your estimated delivery time is " + delivery())

  })




});
