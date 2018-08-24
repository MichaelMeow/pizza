// Business Logic
function Pizza(size, toppings){
  this.toppings = toppings
  this.size = size
}

// prototype placeholder
// Pizza.prototype.name = function() {
//     return
// };

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
  })






});
