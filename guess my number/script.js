var random = Math.trunc(Math.random() * 20) + 1;
console.log(random);
var score=20;
var highscore=0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  
  const p = document.querySelector('.number');
  if (guess <= 20 && guess >= 1) {
    if (random == guess) {
      p.innerHTML = random;
      document.querySelector('.message').innerHTML = 'correct number!';
      document.body.style.background = '#60b347';
      if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').innerHTML=highscore;
      }
    } else if (guess < random) {
      document.querySelector('.message').innerHTML = 'too low!';
      score--;
      document.querySelector('.score').innerHTML=score;
    } else if (guess > random) {
      document.querySelector('.message').innerHTML = 'too high!';
      score--;
      document.querySelector('.score').innerHTML=score;
    }
  } 
  else {
    document.querySelector('.message').innerHTML = 'Try again!';
  }
});

document.querySelector('.again').addEventListener('click',function(){
  score=20;
  random= Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').innerHTML = 'Start guessing...';
  document.querySelector('.score').innerHTML = score;
  document.querySelector('.number').innerHTML= '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor='#222';
})
