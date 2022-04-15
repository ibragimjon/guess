const  againBtn = document.querySelector('.again')
const   checkBtn = document.querySelector('.check')
const   scoreBtn = document.querySelector('.score')
const  highscoreBtn = document.querySelector('.highscore')
const message = document.querySelector('.message')
const body  = document.querySelector('body')
const guess = document.querySelector('.guess')
const number = document.querySelector(".number")
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const againId = document.getElementById('.again')




let score = 20
let highscore = 0

let randomNum = Math.floor(Math.random() * 20) + 1
console.log(randomNum)

checkBtn.addEventListener('click', () =>{
  if(guess.value){
    if(guess.value == randomNum){
        message.textContent = 'you are win'
        number.textContent = randomNum
        body.style.background = '#66df22'
  
        if(score > highscore) {
            highscore = score
            highscoreBtn.textContent = highscore
        }
      } else if (guess.value > randomNum){
        message.textContent = 'Too height'
        score--
        scoreBtn.textContent = score
      } else if (guess.value < randomNum) {
          message.textContent = 'Too lose '
          score--
        scoreBtn.textContent = score
      }
  }else{
      message.textContent = 'No Number'
  }

  if(score <= 0 ){
   modal.classList.remove('hidden')
   overlay.classList.remove('hidden')
  }
}) 



againId.addEventListener('click', ()=> {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
  againGame()
})

againBtn.addEventListener('click', ()=>{
  againGame()
})


function againGame () {
  score = 20
  scoreBtn.textContent = 20
  body.style.background = '#222'
  message.textContent = 'Start guessing. . .'
  number.textContent = '?'
   randomNum = Math.floor(Math.random() * 20) + 1
  guess.value = ''
  
}
