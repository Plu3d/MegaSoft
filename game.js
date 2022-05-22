const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Which of these is an incorrect array declaration?',
        choice1: 'int[] arr = new int[10];',
        choice2: 'int arr[] = int [10] new;',
        choice3: 'int arr[]; arr = new int[10];' ,
        choice4: 'int arr[] = new int[10];',
        answer: 2,
    },

    {
        question: 'Generics in java does not apply with?',
        choice1: 'Array',
        choice2: 'Set',
        choice3: 'Tree' ,
        choice4: 'List',
        answer: 1,
    },

    {
        question: 'How do you sort an Array?',
        choice1: 'Collection.sort()',
        choice2: 'Array.sort()',
        choice3: 'Arrays.sort()' ,
        choice4: 'System.sort()',
        answer: 3,
    },

    {
        question: 'How do you copy the content of an Array?',
        choice1: 'Arrays.copy()',
        choice2: 'Array.copy()',
        choice3: 'System.arrayCopy()' ,
        choice4: 'Collection.copy()',
        answer: 3,
    },

    {
        question: 'For which of the following situations is only one array NOT appropriate?',
        choice1: 'Working with 30 scores on an exam.',
        choice2: 'Working with names and ages of students.',
        choice3: 'Working with mileage during a vacation.' ,
        choice4: 'Working with company sales.',
        answer: 2,
    },

    
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion ['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score 
}

startGame()
