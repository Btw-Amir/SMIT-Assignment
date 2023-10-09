var mainQuestions = [
    {
        title: 'What is HTML',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Markup Language'
    },
    {
        title: 'What is CSS',
        options: ['Styling Language', 'Gora Language', 'Kala Language', 'None of the above'],
        correctAnswer: 'Styling Language'
    },
    {
        title: 'What is JS',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Programming Language'
    },
    {
        title: 'What is React',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Programming Language'
    }
]
function start(event){
var questions = document.getElementById('questions')
questions.className = ""

var start = event.target    
start.className = "hide"

questions.innerHTML = mainQuestions[0].title
mainOptions()
var next = document.getElementById('next')   
next.className = ""
}
var noQ = 0
function next(){
    noQ++
    if(noQ < mainQuestions.length){
        questions.innerHTML = mainQuestions[noQ].title
        mainOptions()

    }else{
        questions.innerHTML = ""
        var next = document.getElementById('next')   
next.className = "hide"
        var result = document.getElementById('result')
        result.className = ""
    }
    
}

function mainOptions(){
var mainOptions = document.getElementById('main-option')    
for(var i = 0; i < mainQuestions.length; i++){
    var input = document.createElement('input')
    input.type = "radio"
mainOptions.append(input)
input.append(input.value)
}
}