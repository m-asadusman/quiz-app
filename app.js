var mainBox = document.getElementById('mainBox')
var quizBox = document.querySelector('.quizBox')
var resultBox = document.querySelector('.resultBox')
var qSpan = document.getElementById('qSpan')
var options = document.getElementById('options').children
var question = document.getElementById('question')
var nextBtn = document.getElementById('nextBtn')
var total = document.getElementById('total')
var correct = document.getElementById('correct')
var wrong = document.getElementById('wrong')
var score = document.getElementById('score')
var msg = document.getElementById('msg')
var tryAgainBtn = document.getElementById('tryAgainBtn')
var questionCounter = 0
var qSpanCounter = 1
var correctAnswers = 0
var wrongAnswers = 0

var questionsArr = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: {
            a: "var",
            b: "let",
            c: "const",
            d: "All of the above",
        },
        answer: "All of the above",
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: {
            a: "String",
            b: "Number",
            c: "Boolean",
            d: "Character",
        },
        answer: "Character",
    },
    {
        question: "What is the output of 'typeof null' in JavaScript?",
        options: {
            a: "'null'",
            b: "'undefined'",
            c: "'object'",
            d: "'number'",
        },
        answer: "'object'",
    },
    {
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        options: {
            a: "JSON.parse()",
            b: "JSON.stringify()",
            c: "JSON.convert()",
            d: "JSON.toObject()",
        },
        answer: "JSON.parse()",
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: {
            a: "// for single-line, /* */ for multi-line",
            b: "# for single-line",
            c: "<!-- -->",
            d: "None of the above",
        },
        answer: "// for single-line, /* */ for multi-line",
    },
    {
        question: "What will `2 + '2'` return in JavaScript?",
        options: {
            a: "4",
            b: "'22'",
            c: "NaN",
            d: "Error",
        },
        answer: "'22'",
    },
    {
        question: "Which company developed JavaScript?",
        options: {
            a: "Microsoft",
            b: "Netscape",
            c: "Sun Microsystems",
            d: "Oracle",
        },
        answer: "Netscape",
    },
    {
        question: "Which of the following methods is used to add an element at the end of an array?",
        options: {
            a: "push()",
            b: "pop()",
            c: "shift()",
            d: "unshift()",
        },
        answer: "push()",
    },
    {
        question: "What is the default value of an uninitialized variable in JavaScript?",
        options: {
            a: "null",
            b: "undefined",
            c: "0",
            d: "NaN",
        },
        answer: "undefined",
    },
    {
        question: "What will `console.log(0 == '0')` output?",
        options: {
            a: "true",
            b: "false",
            c: "undefined",
            d: "Error",
        },
        answer: "true",
    }
];


function startQuiz(){
    mainBox.style.display = 'none'
    quizBox.style.display = 'flex'
    
    runQuestions()
}

function runQuestions(){
    
    if(questionCounter < questionsArr.length){

        var values = Object.values(questionsArr[questionCounter].options)
        
        qSpan.innerHTML = qSpanCounter
        qSpanCounter++

        question.innerHTML = '• ' + questionsArr[questionCounter].question

        options[0].textContent = values[0]
        options[1].textContent = values[1]
        options[2].textContent = values[2]
        options[3].textContent = values[3]

        for(var li of options){
            li.onclick = function(){
                opts(this)
                
            }
            li.style.background = ''
            li.style.pointerEvents = ''
            
        }
        nextBtn.className = "btn nextDisabled"
    }else if(questionCounter >= questionsArr.length){
        nextBtn.textContent = 'Finish'
    }else{
        return
    }
}

function opts(ele){
    
    if(ele.textContent == questionsArr[questionCounter].answer){
        ele.style.background = 'linear-gradient(90deg,rgba(68, 117, 61, 1) 0%, rgba(7, 71, 2, 1) 100%)'
        correctAnswers++
    }else{
        ele.style.background = 'linear-gradient(90deg,rgba(122, 39, 39, 1) 0%, rgba(94, 0, 0, 1) 100%)'
        wrongAnswers++
    }

    for(var li of options){
        if(li.textContent == questionsArr[questionCounter].answer){
            li.style.background = 'linear-gradient(90deg,rgba(68, 117, 61, 1) 0%, rgba(7, 71, 2, 1) 100%)'
        }
        li.style.pointerEvents = 'none'
    }
    nextBtn.className = "btn nextEnabled"

}

function next(){
    if(nextBtn.textContent == 'Finish'){
        quizBox.style.display = 'none'
        resultBox.style.display = 'flex'
        result()
    }else{
        questionCounter++
        runQuestions()
    }
}

function result(){
    total.innerHTML = questionCounter
    correct.innerHTML = correctAnswers
    wrong.innerHTML = wrongAnswers
    var scoreCount = Math.round((correctAnswers / questionCounter) * 100)
    score.innerHTML = scoreCount

    if(scoreCount < 60){
        msg.innerHTML = "You have failed!"
    }else{
        msg.innerHTML = "You have passed!"
    }
}

function tryAgain(){
    resultBox.style.display = 'none'
    mainBox.style.display = 'flex'
    questionCounter = 0
    qSpanCounter = 1
    correctAnswers = 0
    wrongAnswers = 0
    nextBtn.textContent = 'Next'
    nextBtn.className = 'btn nextDisabled'
    for (var li of options) {
        li.style.background = ''
        li.style.pointerEvents = ''
    }
}