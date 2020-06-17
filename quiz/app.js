function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        var element=document.getElementById("question");
        element.innerHTML =quiz.getQuestionIndex().text;
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0;i<choices.length;i++){
            var element=document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            guess("btn"+i,choices[i]);
         }
         showProgess();
    }
};
function guess(id,guess){
    var button = document.getElementById(id);
    button.onclick=function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgess(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progess");
    element.innerHTML="Question "+currentQuestionNumber+" of "+quiz.questions.length;
}
function showScores(){
    var gameOverHtml ="<h1>Result</h1>";
    gameOverHtml+="<h2 id='score'>Your score:" + quiz.score+"</h2>";
    var element  = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}



var questions=[
    new Question("Which one is not an object oriented programming language?",["Java","C#","C++","C"],"C"),
    new Question("Which language is used for styling web page?",["HTML","JQUERY","CSS","XML"],"CSS"),
    new Question("How many main components of OOPS?",["1","2","6","4"],"4"),
    new Question("Which language is used for web app?",["PHP","Python","Javascript","ALL"],"ALL"),
    new Question("MVC is a ________",["Language","Library","Framework","All"],"Framework"),

];

var quiz=new Quiz(questions);

populate()