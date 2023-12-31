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
var firstNumber = document.getElementById("number1");
var secondNumber = document.getElementById("number2");
var calculateBtn = document.getElementById("calculateButton");
var outputSum = document.getElementById("sum");
var outputDifference = document.getElementById("difference");
function printOutputs() {
    var theSum = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
    var theDifference = parseFloat(secondNumber.value) - parseFloat(firstNumber.value);
    outputSum.textContent = theSum.toString();
    outputDifference.textContent = theDifference.toString();
}
calculateBtn.addEventListener("click", printOutputs);
var firstScore = document.getElementById("score1");
var secondScore = document.getElementById("score2");
var thirdScore = document.getElementById("score3");
var playerName = document.getElementById("name");
var averageBtn = document.getElementById("averageButton");
var message = document.getElementById("message");
function calculateAverage() {
    var scoreOne = parseFloat(firstScore.value);
    var scoreTwo = parseFloat(secondScore.value);
    var scoreThree = parseFloat(thirdScore.value);
    var average = (scoreOne + scoreTwo + scoreThree) / 3;
    message.innerHTML = playerName.value + "scored on average" + average.toFixed(2) + "goals per round";
}
averageBtn.addEventListener("click", calculateAverage);
