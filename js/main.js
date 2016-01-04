var operation = ["subtract", "add", "multiply", "divide"];
var user, randomOperation, selector, first, second, answer;
var score = 0;

window.addEventListener("load", function(){
  newProblem();
  document.getElementById("user").focus();
});

function newProblem(){
  randomOperation = Math.floor(Math.random() * operation.length); //selects a random position of operation array
  selector = operation[randomOperation]; //a string value equal to randomOperation value
  if (selector == "add") {
    first = (Math.floor(Math.random()* 100) + 1);
    second = (Math.floor(Math.random()* 100) + 1);
  }

  if (selector == "subtract") {
    first = (Math.floor(Math.random()* 100) + 1);
    second = (Math.floor(Math.random()* 100) + 1);
  }
  if (selector == "multiply") {
    first = (Math.floor(Math.random()* 12) + 1);
    second = (Math.floor(Math.random()* 12) + 1);
  }
  if (selector == "divide"){
    first = (Math.floor(Math.random()* 144) + 1);
    second = (Math.floor(Math.random()* 144) + 1);
    while (((first % second) != 0) || (first == second) || ((first / second) == 2) || (second == 1)) {
      first = (Math.floor(Math.random()* 144) + 1);
      second = (Math.floor(Math.random()* 144) + 1);
    }
  }
  problem = [
    {problem: first + " - " + second + " = "},
    {problem: first + " + " + second + " = "},
    {problem: first + " x " + second + " = "},
    {problem: first + " / " + second + " = "},
  ]
  document.getElementById("problem").innerHTML = problem[randomOperation].problem; //grab correct operation syntax from problem object
  return randomOperation, selector, first, second;
}
function enterpressalert(e, text){
var code = (e.keyCode ? e.keyCode : e.which);
  if(code == 13) { //Enter keycode
    if (selector == "add")
      add();
    else if (selector == "subtract")
      subtract();
    else if (selector == "multiply")
      multiply();
    else if (selector == "divide")
      divide();
  }
}
function add(){
  user = document.getElementById("user").value;
  answer = first + second;
  console.log("user: " + user);
  console.log("addition answer: " + answer);
  if (user == answer) {
    document.getElementById('user').value = "";
    score = score + 1
    document.getElementById("score").innerHTML = "Score : " + score;
    correct();
    newProblem();
  } else {
    wrong();
  }
}
function multiply(){
  user = document.getElementById("user").value;
  answer = first * second;
  console.log("user: " + user);
  console.log("multiplication answer: " + answer);
  if (user == answer) {
    document.getElementById('user').value = "";
    score = score + 1
    document.getElementById("score").innerHTML = "Score : " + score;
    correct();
    newProblem();
  } else {
    wrong();
  }
}
function divide(){
  user = document.getElementById("user").value;
  answer = first / second;
  console.log("user: " + user);
  console.log("division answer: " + answer);
  if (user == answer) {
    document.getElementById('user').value = "";
    score = score + 1
    document.getElementById("score").innerHTML = "Score : " + score;
    correct();
    newProblem();
  } else {
    wrong();
  }
}
function subtract(){
  var user = document.getElementById("user").value;
  answer = first - second;
  console.log("user: " + user);
  console.log("addition answer: " + answer);
  if (user == answer) {
    document.getElementById('user').value = "";
    score = score + 1
    document.getElementById("score").innerHTML = "Score : " + score;
    correct();
    newProblem();
  } else {
    wrong();
  }
}
function wrong(){
  document.getElementById('body').className = "wrong";
  var myVar =  setInterval(function(){  document.getElementById('body').className = ""; clearInterval(myVar);}, 100);
}
function correct(){
  document.getElementById('body').className = "correct";
  var myVar =  setInterval(function(){  document.getElementById('body').className = ""; clearInterval(myVar);}, 100);
}
