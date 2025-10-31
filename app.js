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
        question: "Who is known as the 'Mother of Dragons'?",
        options: {
            a: "Cersei Lannister",
            b: "Daenerys Targaryen",
            c: "Sansa Stark",
            d: "Arya Stark",
        },
        answer: "Daenerys Targaryen",
    },
    {
        question: "Which house has a direwolf as its sigil?",
        options: {
            a: "Stark",
            b: "Lannister",
            c: "Targaryen",
            d: "Baratheon",
        },
        answer: "Stark",
    },
    {
        question: "Who is called 'The Kingslayer'?",
        options: {
            a: "Jaime Lannister",
            b: "Tyrion Lannister",
            c: "Ned Stark",
            d: "Robb Stark",
        },
        answer: "Jaime Lannister",
    },
    {
        question: "Which city is Daenerys Targaryen's first major conquest?",
        options: {
            a: "Oldtown",
            b: "King's Landing",
            c: "Winterfell",
            d: "Meereen",
        },
        answer: "Meereen",
    },
    {
        question: "What is Jon Snow's real parentage?",
        options: {
            a: "Ned Stark & Catelyn Stark",
            b: "Rhaegar Targaryen & Lyanna Stark",
            c: "Robert Baratheon & Lyanna Stark",
            d: "Eddard Stark & Wylla",
        },
        answer: "Rhaegar Targaryen & Lyanna Stark",
    },
    {
        question: "Who is the youngest Stark child?",
        options: {
            a: "Arya",
            b: "Bran",
            c: "Rickon",
            d: "Sansa",
        },
        answer: "Rickon",
    },
    {
        question: "Which character is known for saying 'A Lannister always pays his debts'?",
        options: {
            a: "Tyrion Lannister",
            b: "Cersei Lannister",
            c: "Jaime Lannister",
            d: "Tywin Lannister",
        },
        answer: "Tyrion Lannister",
    },
    {
        question: "Who is the Lord Commander of the Night's Watch at the start of the series?",
        options: {
            a: "Alliser Thorne",
            b: "Jon Snow",
            c: "Samwell Tarly",
            d: "Jeor Mormont",
        },
        answer: "Jeor Mormont",
    },
    {
        question: "What is the ancestral seat of House Baratheon?",
        options: {
            a: "Storm's End",
            b: "Dragonstone",
            c: "Winterfell",
            d: "Casterly Rock",
        },
        answer: "Storm's End",
    },
    {
        question: "Who kills the Night King?",
        options: {
            a: "Jon Snow",
            b: "Arya Stark",
            c: "Bran Stark",
            d: "Daenerys Targaryen",
        },
        answer: "Arya Stark",
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
        ele.style.background = '#003a00ff'
        correctAnswers++
    }else{
        ele.style.background = '#550202ff'
        wrongAnswers++
    }

    for(var li of options){
        if(li.textContent == questionsArr[questionCounter].answer){
            li.style.background = '#045304'
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

    if(scoreCount < 21){
        msg.innerHTML = "You know nothing, Jon Snow."
    }else if(scoreCount < 41){
        msg.innerHTML = "A squire in the courts of Westeros."
    }else if(scoreCount < 61){
        msg.innerHTML = "A sworn brother of the Night's Watch."
    }else if(scoreCount < 81){
        msg.innerHTML = "A noble of Westeros."
    }else{
        msg.innerHTML = "You have claimed the Iron Throne!"
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