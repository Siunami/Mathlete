var operation = ["subtract", "add", "multiply", "divide"];
var randomOperation = Math.floor(Math.random() * operation.length); //selects a random array position
var selector = operation[randomOperation]; //a string value equal to randomOperation value
var first = (Math.floor(Math.random()* 10) + 1);
var second = (Math.floor(Math.random()* 10) + 1);
console.log(first);
console.log(second);
console.log(selector);

function onClick(){
  if (selector == "add")
    add();
  else if (selector == "subtract")
    subtract();
  else if (selector == "multiply")
    multiply();
  else if (selector == "divide")
    divide();
}

function add(){
  var answer = first + second;
  console.log(answer);
}
function multiply(){
  var answer = first * second;
  console.log(answer);
}
function subtract(){
  var answer = first - second;
  console.log(answer);
}
function divide(){
  var answer = first / second;
  console.log(answer);
}
