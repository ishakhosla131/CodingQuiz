

//Hitting the start button, displaying the questions, starting the timer
document.getElementsByClassName("btn-success").onclick = function () {startQuiz() };
var Screen1 = document.getElementsByClassName("screen1")
function startQuiz() {
    document.getElementById("screen1").classList.add("hidden");
    document.getElementById("screen2").classList.remove("hidden")



    //function for timer
    var startingMinutes = 5;
    var time = startingMinutes * 60;
    var countdownEl = document.getElementById("timer");

    setInterval(updateCountdown, 1000)
    function updateCountdown() {
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
        countdownEl.innerHTML = ("Time left " + minutes + ":" + seconds)
        time--;
        if (minutes <= 0 && seconds <= 0) {
            clearInterval(countdownEl.innerHTML = 0)
        }
    }

       displayCode()
}
        
 //function to display code. I could not figure out how to make it loop through the object
    function displayCode(){

    var i=0
    document.getElementById("questionText").innerHTML = myQuestions[i].questions;
    document.getElementById("answer1").innerHTML=myQuestions[i].answers.a;
    document.getElementById("answer2").innerHTML=myQuestions[i].answers.b;
    document.getElementById("answer3").innerHTML=myQuestions[i].answers.c;
    }






//questions


var myQuestions = [
    {
        questions: "Which one is NOT a data type in JavaScript",
        answers: {
            a: "numbers",
            b: "void",
            c: "strings"
        },
        correctAnswer: "b"
    },
    {
        questions: "a for loop is:",
        answers: {
            a: "synchronous",
            b: "chronous",
            c: "ascynhronous"
        },
        correctAnswer: "a"
    },
    {
        questions: "jQuery is:",
        answers: {
            a: "its own language",
            b: "a library of JavaScript",
            c: "a library of CSS"
        },
        correctAnswer: "b"
    },
    {
        questions: "What does DOM stand for?",
        answers: {
            a: "Document Obscure Model",
            b: "Direct Object Modum",
            c: "Document Object Model"
        },
        correctAnswer: "c"
    }]
    //displaying questions



