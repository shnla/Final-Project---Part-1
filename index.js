// import input id elements from html file
var price = document.getElementById("price1");
var printBtn = document.getElementById("printButton");
var printValue = document.getElementById("totalPrice");
// calculate and display price after tax
function printTotalPrice() {
    var itemPrice = parseFloat(price.value) * 1.13;
    printValue.textContent = itemPrice.toFixed(2);
}
// addEventListener method takes in (type, listener)
// type: an event type to listen for
// listener: function that will respond to the event
printBtn.addEventListener("click", printTotalPrice);
