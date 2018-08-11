var questions = [
    {
        question: "What is Superman's real name",
        answer: "Clarke Kent"
    },
    {
        question: "What is Wonderwoman's real name",
        answer: "Diana Rose"
    },
    {
        question: "What is Batman's real name",
        answer: "Bruce Wayne"
    },
    {
        question: "What is Ironman's real name",
        answer: "Tony Stark"
    }
];
    
var submitBtn, currentQtn, totalScore;


//define start
function start(){
    submitBtn = document.getElementById("submit");
    totalScore = 0;
    currentQtn = 0;
    loadQtn(currentQtn);
}

function loadQtn(questionNo){
    var question = questions[questionNo];
    document.getElementById("questionNo").innerHTML = "Question " + (questionNo + 1);
    document.getElementById("questionText").innerHTML = question["question"];
}

function submit(){
    var userAns = document.getElementById("userAns").value;
    userAns = userAns.toLowerCase();
    var question = questions[currentQtn];
    if (userAns === question.answer){
        
    }
}