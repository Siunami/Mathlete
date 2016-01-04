var operation = ["subtract", "add", "multiply"];
var user, randomOperation, selector, first, second, answer;
var score = 0;

window.onLoad = newProblem();

function newProblem(){
  randomOperation = Math.floor(Math.random() * operation.length); //selects a random position of operation array
  selector = operation[randomOperation]; //a string value equal to randomOperation value
  first = (Math.floor(Math.random()* 10) + 1);
  second = (Math.floor(Math.random()* 10) + 1);
  problem = [
    {problem: first + " - " + second + " = "},
    {problem: first + " + " + second + " = "},
    {problem: first + " x " + second + " = "},
  ]
  document.getElementById("problem").innerHTML = problem[randomOperation].problem; //grab correct operation syntax from problem object
  return randomOperation, selector, first, second, answer;
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
    //I want to avoid floating point numbers for now
    //else if (selector == "divide")
    //  divide();
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
//function divide(){
//  var answer = first / second;
//  console.log(answer);
//}
