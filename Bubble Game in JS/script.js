function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 133; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = clutter;
}

var timer = 60;
var timerX;
function runtime() {
  timerX = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").innerHTML = timer;
    } else {
      clearInterval(timerX);
      document.querySelector(".pbtm").innerHTML = `<h1>GAME OVER</h1>`;
    }
  }, 1000);
}
var hitrn;
function getnewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#Hitvar").innerHTML = hitrn;
}

var score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").innerHTML = score;
}

document.querySelector(".pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.innerHTML);
  if (clickedNum == hitrn) {
    increaseScore();
    makeBubble();
    getnewHit();
  } else if (clickedNum != hitrn) {
    score -= 10;
    document.querySelector("#scoreval").innerHTML = score;
  }
  if (score <= 0) {
    clearInterval(timerX);
    document.querySelector(".pbtm").innerHTML = `<h1>GAME OVER 😞</h1>`;
  }
});
getnewHit();
runtime();
makeBubble();
