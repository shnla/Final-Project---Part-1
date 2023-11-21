var price = document.getElementById("price1");
var printBtn = document.getElementById("printButton");
var printValue = document.getElementById("totalPrice");
function printTotalPrice() {
    var itemPrice = parseFloat(price.value) * 1.13;
    printValue.textContent = itemPrice.toFixed(2);
}
printBtn.addEventListener("click", printTotalPrice);
