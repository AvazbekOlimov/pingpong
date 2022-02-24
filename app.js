const player1El = document.querySelector('#player1')
const player2El = document.querySelector('#player2')
const player1Btn = document.querySelector('.btn-player1')
const player2Btn = document.querySelector('.btn-player2')
const gameLevelEl = document.querySelector('#game-level')
const reset = document.querySelector('.btn-reset')

let scorePlayer1 = 0
let scorePlayer2 = 0
let gameLevel = 3
let gameOver = false

player1Btn.addEventListener('click', function() {
    if(!gameOver){
      scorePlayer1++  
      if (gameLevel <= scorePlayer1) {
          gameOver = true
          player1El.style.color = 'green'
          player2El.style.color = 'red'
      }
    }    
    player1El.textContent = scorePlayer1
})
player2Btn.addEventListener('click', function() {
    if (!gameOver) {
       scorePlayer2++
       if (gameLevel <= scorePlayer2) {
        gameOver = true
        player2El.style.color = 'green'
        player1El.style.color = 'red'
    } 
    }    
    player2El.textContent = scorePlayer2
})
gameLevelEl.addEventListener('change', ()=>{
    let value = +gameLevelEl.value
    gameLevel = value
})
reset.addEventListener('click', ()=>{ 
    scorePlayer1 = 0
    scorePlayer2 = 0
    player2El.textContent = 0
    player1El.textContent = 0
    gameOver = false
    player2El.style.color = 'white'
    player1El.style.color = 'white' 
    gameLevelEl.value = 3
    gameLevel = 3
})


