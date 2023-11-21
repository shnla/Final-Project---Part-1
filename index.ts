// import input id elements from html file
const price = document.getElementById("price1") as HTMLInputElement;
const printBtn = document.getElementById("printButton") as HTMLButtonElement;
const printValue = document.getElementById("totalPrice") as HTMLOutputElement;

// calculate and display price after tax
function printTotalPrice(): void{
    const itemPrice = parseFloat(price.value)*1.13;
    printValue.textContent = itemPrice.toFixed(2);

}

// addEventListener method takes in (type, listener)
// type: an event type to listen for
// listener: function that will respond to the event
printBtn.addEventListener("click", printTotalPrice);