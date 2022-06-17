var dino = document.getElementById("dino");
var rock = document.getElementById("rock");
var score = document.getElementById("score");
var highscore = document.getElementById("highscore");

function jump() {
  dino.classList.add("jump-animation");
  setTimeout(() =>
    dino.classList.remove("jump-animation"), 500);
}

document.addEventListener('keypress', (event) => {
  if (!dino.classList.contains('jump-animation')) {
    jump();
  }
})

setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino)
    .getPropertyValue('top'));
  const rockLeft = parseInt(window.getComputedStyle(rock)
    .getPropertyValue('left'));
  score.innerText++;

  if (rockLeft < 0) {
    rock.style.display = 'none';
  } else {
    rock.style.display = ''
  }

  if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
    const scorenum = parseInt(score.innerText);
    const highscorenum = parseInt(highscore.innerText);
    if (highscorenum < scorenum){
    highscore.innerText = scorenum;
    }
   score.innerText = 0;
  }
}, 50);
