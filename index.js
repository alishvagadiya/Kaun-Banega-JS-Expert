var readlineSync = require("readline-sync");
var chalk = require('chalk');

var questions = [
  {
    question: "From below which is not a Pop up boxes available in JavaScript? ",
    answers: ["Alert", "confirm", "prompt", "console"],
    correctAnswer: "console"
  },{
    question: "Inside which HTML element do we put the JavaScript? ",
    answers: ["<script>", "<js>", "<scripting>", "<javascript>"],
    correctAnswer: "<script>"
  },{
    question: "Where is the correct place to insert a JavaScript? ",
    answers: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct", "None of the above"],
    correctAnswer: "Both the <head> section and the <body> section are correct"
  },{
    question: "The external JavaScript file must contain the <script> tag. ",
    answers: ["False","True", "May be", "Some Time"],
    correctAnswer: "False"
  },{
    question: "How do you create a function in JavaScript? ",
    answers: ["function myFunction()", "function:myFunction()", "function = myFunction()", "None of the above"],
    correctAnswer: "function myFunction()"
  }
];
var score = 0;
console.log('welcome to kaun banega js expert');
for(var i = 0; i< questions.length; i++){
  var currentQuestion = questions[i];
  askQuestion(currentQuestion.question, currentQuestion.answers, currentQuestion.correctAnswer);
}

console.log(chalk.black.bgGreen.bold(" Your total score is - " + score + ' '));

function askQuestion(question, answers, correctAnswer) {
  console.log(chalk.blue.bgWhite.bold(question));
  var userAnswer = readlineSync.keyInSelect(answers,chalk.blue.bold('Please enter your answer ->'));
  if(answers[userAnswer] == correctAnswer){
    console.log();
    console.log(chalk.black.bgGreen(' correct answer '));
    score++;
  } else {
    console.log();   
    console.log(chalk.bgRed(' wrong answer '));
  }
  console.log();
  console.log("Your current score is - " + chalk.green(score));
  console.log();
  console.log('**********************************************');
  console.log();
}