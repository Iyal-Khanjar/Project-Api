const btnQuestion = document.querySelector('.btnQuestion'),
    Question = document.querySelector('.question'),
    trueOrFalse = document.querySelector('.trueOrFalse'),
    img = document.querySelector('.img'),
    btnTrue = document.querySelector('.btnTrue'),
    btnFalse = document.querySelector('.btnFalse')

let arr = []
btnTrue.disabled = true
btnFalse.disabled = true

async function app() {
    let url = `https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean`;
    let info = await (await fetch(url)).json();
    let question = info.results[0].question
    Question.innerHTML = question
    let answer = info.results[0].correct_answer
    arr.push(question, answer)
    btnTrue.disabled = false
    btnFalse.disabled = false
    btnQuestion.disabled = true
    btnTrue.style.background = ''
    btnFalse.style.background = ''
    trueOrFalse.innerHTML = ''
    img.innerHTML = ''
    console.log(arr[1]);
}

async function answerIsTrue() {
    if (arr[1] == 'True') {
        trueOrFalse.innerHTML = 'You are correct'
        trueOrFalse.style.color = 'green'
        btnTrue.style.background = 'green'
        img.innerHTML = '<img src="../img/correct.jpg">'
    }

    else {
        trueOrFalse.innerHTML = 'You are wrong'
        trueOrFalse.style.color = 'red'
        btnTrue.style.background = 'red'
        img.innerHTML = '<img src="../img/wrong.jpg">'
    }

    btnTrue.disabled = true
    btnFalse.disabled = true
    btnQuestion.disabled = false
    arr.shift()
    arr.shift()
}

async function answerIsFalse() {
    if (arr[1] == 'False') {
        trueOrFalse.innerHTML = 'You are correct'
        trueOrFalse.style.color = 'green'
        btnFalse.style.background = 'green'
        img.innerHTML = '<img src="../img/correct.jpg">'
    }

    else {
        trueOrFalse.innerHTML = 'You are wrong'
        trueOrFalse.style.color = 'red'
        btnFalse.style.background = 'red'
        img.innerHTML = '<img src="../img/wrong.jpg">'
    }

    btnTrue.disabled = true
    btnFalse.disabled = true
    btnQuestion.disabled = false

    arr.shift()
    arr.shift()
}

btnQuestion.addEventListener('click', app)
btnTrue.addEventListener('click', answerIsTrue)
btnFalse.addEventListener('click', answerIsFalse)


