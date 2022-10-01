let userName = "";

userName ?
  console.log(`Hello, ${userName}!`):
  console.log("Hello!");
  
let userQuestion = "Will it rain today?";

console.log(`${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
   case 2:
    eightBall = 'Reply hazy try again';
    break;
   case 3:
    eightBall = 'Cannot predict now';
    break;
   case 4:
    eightBall = 'Do not count on it';
    break;
   case 5:
    eightBall = 'My sources say no';
    break;
   case 6:
    eightBall = 'Outlook not so good';
    break;
   case 7:
    eightBall = 'Signs point to yes';
    break;        
}

console.log(eightBall);

let submitOne = getElementById("submit-one");
let submitTwo = getElementById("submit-two");
let fName = getElementById("fname").value;
let question = document.getElementById("question").value;


function firstSentence() {

 let fName = document.getElementById("fname").value;
 if (document.getElementById("fname").value == false) {
  document.getElementById("greeting").innerHTML = "Hi. Ask the magic 8-ball your question below." 
 } else {
  document.getElementById("greeting").innerHTML = `Hi, ${fName}. 
  Ask the magic 8-ball your question below.`
 }
};

function secondSentence() {
 let question = document.getElementById("question").value;
 if(document.getElementById("question").value == false) {
  document.getElementById("statement").innerHTML = "Ask the 8-ball a question." 
 } else {
 document.getElementById("statement").innerHTML = `See the 8-ball for the answer to the question: ${question}?`
 document.getElementById("answer").innerHTML = `${eightBall}`
 }
};





let eightBallAnswer = getElementById("");