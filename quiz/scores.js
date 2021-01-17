const scoresList = document.querySelector('#scoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

scoresList.innerHTML =
highScores.map(score => {
    return `<li class='high-score'>${score.name} - ${score.score}</li>`
}).join('')