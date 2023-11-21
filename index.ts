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

const firstNumber = document.getElementById("number1") as HTMLInputElement;
const secondNumber = document.getElementById("number2") as HTMLInputElement;
const calculateBtn = document.getElementById("calculateButton") as HTMLButtonElement;
const outputSum = document.getElementById("sum") as HTMLOutputElement;
const outputDifference = document.getElementById("difference") as HTMLOutputElement;

function printOutputs(): void{
    const theSum = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
    const theDifference = parseFloat(secondNumber.value) - parseFloat(firstNumber.value);
    outputSum.textContent = theSum.toString();
    outputDifference.textContent = theDifference.toString();

}

calculateBtn.addEventListener("click", printOutputs);


const firstScore = document.getElementById("score1") as HTMLInputElement;
const secondScore = document.getElementById("score2") as HTMLInputElement;
const thirdScore = document.getElementById("score3") as HTMLInputElement;
const playerName = document.getElementById("name") as HTMLInputElement;
const averageBtn = document.getElementById("averageButton") as HTMLButtonElement;
const averageCalculated = document.getElementById("average") as HTMLOutputElement;

function printAverageScore(): void{
    const averageScore = (parseFloat(firstScore.value) + parseFloat(secondScore.value) + parseFloat(thirdScore.value))/3;
    averageCalculated.textContent = averageScore.toString();

}
averageBtn.addEventListener("click", printAverageScore);