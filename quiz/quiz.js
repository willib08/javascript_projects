const question = document.querySelector('#question');
const options = Array.from(document.querySelectorAll('.option-text'));
const progressText = document.querySelector('#progress');
const scoreText = document.querySelector('#score');
const prgBarF = document.querySelector('#prgBarF');

let currentQuestion= {}
let acceptSelection = true
let score = 0
let questionCounter = 0
let otherQuestions = []

let questions = [
    {
        question: 'How many time zones are there in Russia',
        option1: '11',
        option2: '2',
        option3: '0',
        option4: '4',
        option4: 'none',
        answer: 1,    
    },
    {
        question: 'What is the national flower of Japan',
        option1: 'Rose',
        option2: 'Seaweed',
        option3: 'Cherry Blossom',
        option4: 'Daisy',
        option4: 'none',
        answer: 3,    
    },
    {
        question: 'What country has the most islands in the world?',
        option1: 'Hawaii',
        option2: 'Sweden',
        option3: 'New Zealand',
        option4: 'Japan',
        option4: 'none',
        answer: 3,    
    },
    {
        question: 'Which famous graffiti artist comes from Bristol?',
        option1: 'Lady Pink',
        option2: 'Banksy',
        option3: 'Keith Haring',
        option4: 'King Robbo',
        option4: 'none',
        answer: 2,    
    },
    {
        question: 'What city do The Beatles come from?',
        option1: 'Los Angeles',
        option2: 'Liverpool',
        option3: 'Manchester',
        option4: 'Perth',
        option4: 'none',
        answer: 2,    
    },
    {
        question: 'How many keys does a classic piano have?',
        option1: '112',
        option2: '2',
        option3: '96',
        option4: '88',
        option4: 'none',
        answer: 4,    
    },
    {
        question: 'When was Netflix founded?',
        option1: '2001',
        option2: '1998',
        option3: '2015',
        option4: '1997',
        option4: 'none',
        answer: 4,    
    },
    {
        question: 'What was the clothing company Nike originally called?',
        option1: 'Blue Ribbon Sports',
        option2: 'Klondike',
        option3: 'Krembo',
        option4: 'Bocce Field Sports',
        option4: 'none',
        answer:1,    
    },
    {
        question: 'What is the all-time most-streamed song on Spotify to date?',
        option1: 'Ice, Ice Baby, Vanilla Ice',
        option2: 'Oops I Did it Again, Britney Spears',
        option3: 'The Shape of You, Ed Sheeran',
        option4: 'Smells Like Teen Spirit, Nirvana',
        option4: 'none',
        answer: 3,    
    },
    {
        question: 'Who invented the World Wide Web, and when?',
        option1: 'Bill Gates, 1976',
        option2: 'Tim Berners-Lee, 1990',
        option3: 'Coco Chanel, 1968',
        option4: 'Roger Rabbit, 1980',
        option4: 'none',
        answer: 2,    
    },
]

const SCORE_POINTS = 20
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    otherQuestions = [...questions]
    getNextQuestion()
}
// question increment by 1
getNextQuestion = () =>{
    if(otherQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }
    //  calculate what question we are on by how many we have left 
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    prgBarF.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * otherQuestions.length)
    currentQuestion = otherQuestions[questionsIndex]
    question.innerText = currentQuestion.question
 }    



options.forEach(option => {
    const number = options.dataset['number']
    options.innerText = currentQuestion['option' + number]

})
otherQuestions.splice(questionsIndex, 1)

acceptingAnswers = true
    


options.forEach(option => {
    option.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswet == currentQuestion.answer ? 'correct' : 
        'incorrect'
        // IF QUESTION IS CORRECT, SCORE INCREASES BY 20 POINTS
        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNextQuestion()
        }, 1000)
    
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()
