const quizQues= [

    {
        questions:"Inside which HTML element do we put the JavaScript?",
        options:["scripting","script", "js", "javascript"],
        ans:"script"

    },
    {
        questions:"How do you write 'Hello World' in an alert box?",
        options:["alertBox","msg", "alert", "msgBox"],
        ans:"alert"

    },
    {
        questions:"How to write an IF statement in JavaScript?",
        options:["if i==5","if(i==5)", "if i=5", "ifi=5 then"],
        ans:"if(i==5)"

    },
    {
        questions:"How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        options:["if i=!5 then","if(i>5)", "if i<>5", "if (i !=5)"],
        ans:"if (i !=5)"

    },
];

let currrentQuestionIndex=0;
let score=0;
let timeleft=30;
let timerInterval;



// to start the quiz
function startQuiz(){
    document.getElementById("start-quiz").style.display="none";
    displayQuestions();
    StartTimer();

}

//to display questions and its options
function displayQuestions(){
const currentQues= quizQues[currrentQuestionIndex];
const quesText= document.getElementById("question-text");
const answerButtons=document.getElementById("answer");


//to clear previous ques and ans
quesText.innerHTML="";
answerButtons.innerHTML="";


//display the current question
quesText.innerHTML=currentQues.questions;


//create answer button for each options
currentQues.options.forEach(options=>{
    const button =document.createElement("button");
    button.innerText=options;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);

//add click event listener to check the answer
button.addEventListener("click", function(){
    checkAnswer(options);
});
});
}

//function to check selected answer
function checkAnswer(selectedOption){
    const currentQues=quizQues[currrentQuestionIndex];
    if (selectedOption === currentQues.ans){
        score++;
    }
    currrentQuestionIndex++;
    if (currrentQuestionIndex < quizQues.length){
        displayQuestions();
    }else{
        endQuiz();
    }
}

//function to start timer
function StartTimer(){
timerInterval =setInterval(function(){
    timeleft--;

document.getElementById("timer").textContent=timeleft;
if(timeleft<=0){
    endQuiz();
}


},1000);
}

// function to end the quiz
function endQuiz(){
    clearInterval(timerInterval);


    //calculate percentage
    const scorepercentage=(score/quizQues.length)*100;


    //display final score
    const questionContainer= document.getElementById("question-container");
    questionContainer.innerHTML=`
    <h2>Quiz completed</h2>
    <p>your Score is ${score} out of ${quizQues.length}</p>
    <p> Score perrcentage is : ${scorepercentage}%</p>`;
    
    
}

//add event listener to start the quiz when button is clicked
document.getElementById("start-quiz").addEventListener("click", startQuiz);