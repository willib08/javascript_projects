const username = document.querySelector('#username')
const scoreSaveBtn = document.querySelector('#scoreSaveBtn')
const finalScore = document.querySelector('#finalScore')
const recentScore = localStorage.getItem('recentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH = 6

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    scoreSaveBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: recentScore,
        name: username.value
    }
}

highScores.sort((a,b) => {
    return b.score - a.score
})

highScores.splice(6)

localStorage.setItem('highScores', JSON.stringify(highScores))
window.location.assign('index.html')