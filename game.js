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
        question: 'Generics in java does not apply to?',
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
        question: 'In which situations is only one array NOT appropriate?',
        choice1: 'Working with 30 scores on an exam.',
        choice2: 'Working with names and ages of students.',
        choice3: 'Working with mileage during a vacation.' ,
        choice4: 'Working with company sales.',
        answer: 2,
    },

    {
        question: "What will the predfined variable string'people' store?" +
        ' \n' +
        'int numPeople=4;' +
        ' \n' +
        'if(numPeople>3) {' +
        ' \n' +
        '   people="Group";' +
        ' \n' +
        '}' +
        ' \n' +
        'else if (numPeople==2) {' +
        ' \n' +
        '   people="Couple";' +
        ' \n' +
        '}' +
        ' \n' +
        'else if (numPeople==1) {' +
        ' \n' +
        '   people="Person";' +
        ' \n' +
        '}' +
        ' \n' +
        'else {' +
        ' \n' +
        'people="no people";' +
        ' \n' +
        '}',
        choice1: 'Group',
        choice2: 'Couple',
        choice3: 'Person' ,
        choice4: 'People',
        answer: 1,
    },

    {
        question: 'What will points be assigned to when this code is iterated?' +
        ' \n' +
        'int points =7;' +
        ' \n' +
        'if(32>1) {' +
        ' \n' +
        'points = 5;' +
        ' \n' +
        '}' +
        ' \n' +
        'else if(3>10) {' +
        ' \n' +
        'points =points + 1;' +
        ' \n' +
        '}',
        choice1: '7',
        choice2: '5',
        choice3: '6' ,
        choice4: 'Points',
        answer: 2,
    },

    {
        question: 'What will be displayed to the screen after this code has iterated?' +
        ' \n' +
        'int highScore =1000;' +
        ' \n' +
        'int userScore =0;' +
        ' \n' +
        'userScore= userScore + 100;' +
        ' \n' +
        'userScore= userScore + 50;' +  
        ' \n' +
        'userScore= userScore * 2;' +
        ' \n' +
        'userScore= userScore + 400;' +
        ' \n' +
        
        'if (highScore >= userScore) {' +
        ' \n' +
        'System.out.println("Congratulations");' +
        ' \n' +
        '}' +
        ' \n' +
        'Else {' +
        ' \n' +
        'System.out.println("Maybe next time");' +
        ' \n' +
        '}',
        choice1: '0',
        choice2: 'HighScore:1000',
        choice3: 'Congratulations' ,
        choice4: 'Maybe next time',
        answer: 3,
    },

    {
        question: 'For the code bellow, what will be the last line printed to the screen?' +
        ' \n' +
        ' for(int i= 0 ; i < 10: ++i) {' +
        ' \n' +
        'System.out.println(i);' + 
        ' \n' +
         '}',
        choice1: '10',
        choice2: 'Nothing, there is an error in the code.',
        choice3: '9' ,
        choice4: '11',
        answer: 3,
    },

    {
        question: 'What will be the last thing printed to the screen?' +
        ' \n' +
        'int x =243;' +
        ' \n' +
        '   int iterations = 0;' +
        ' \n' +
        '   while(x>13) {' +
        ' \n' +
        '   x = x-11;' +
        ' \n' +
        '   x = x/3;' +
        ' \n' +
        '   iterations = iterations +1;' +
        ' \n' +
        '   }' +
        ' \n' +
        '   System.out.println(iterations);',
        choice1: '7',
        choice2: '2',
        choice3: '3' ,
        choice4: '5',
        answer: 3,
    },
    
    {
        question: 'Which of the following can not be used as a variable name in Java programming language?',
        choice1: 'Identifier',
        choice2: 'keywords',
        choice3: 'Identifier and Keywords' ,
        choice4: 'literal',
        answer: 2,
    },
    
    {
        question: 'Which is the valid variable name?',
        choice1: '5thTeam',
        choice2: '&5thTeam',
        choice3: '_5thTeam' ,
        choice4: 'None of the Above',
        answer: 3,
    },
    
    {
        question: 'Which are the invalid variable names?',
        choice1: '1stLevel',
        choice2: 'first Level',
        choice3: '*firstLevel' ,
        choice4: 'All of the Above',
        answer: 4,
    },
    
    {
        question: 'Which one of the following is not a primitive datatype?',
        choice1: 'byte',
        choice2: 'short',
        choice3: 'long' ,
        choice4: 'class',
        answer: 4,
    },
    
    {
        question: 'How many bytes do void data type require?',
        choice1: '1',
        choice2: '2',
        choice3: '3' ,
        choice4: '0',
        answer: 4,
    }
    
    


]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 15;

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
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
