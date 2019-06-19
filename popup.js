


let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear existing countdowns
  clearInterval(countdown);

  const now = Date.now();
  const then = now + (seconds * 1000);
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop
    if(secondsLeft < 0) {
      alert("completed");

      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const ampm = hour > 12 ? 'pm' : 'am';
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}${ampm}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
let formTimer = document.getElementById('custom')
formTimer.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  this.reset();
  timer (mins * 60);
});




// works but doesn't persit
//
// var remainingSec;
// var interval;
//
// function tick() {
//   var min = Math.floor(remainingSec / 60);
//   var sec = remainingSec - min * 60;
//
//   var timerWrap = document.getElementsByClassName("timer-wrap")[0];
//
//   if (sec < 10) {
//     sec = "0" + sec;
//     if (min == 0) {
//       timerWrap.style.color = "red";
//     }
//   }
//   if (sec == 0 && min == 0) {
    // alert("completed");
//     clearInterval(interval);
//   }
//   timerWrap.textContent = min + " : " + sec;
//   remainingSec--;
// }
//
// function timer() {
//   var value = document.getElementById("input-no").value;
//   if (isNaN(value)) {
//     alert("Please input Number");
//   } else {
//     remainingSec = value * 60;
//     interval = setInterval(tick, 1000);
//     document.getElementsByClassName("input-wrap")[0].style.display = "none";
//   }
// }
//
// window.onload = function() {
//   var inputWrap = document.getElementsByClassName("input-wrap");
//   // create input tag
//   var input = document.createElement("input");
//   input.setAttribute("type", "text");
//   input.setAttribute("placeholder", "Please Set Break Time");
//   input.setAttribute("id", "input-no");
//   inputWrap[0].appendChild(input);
//   // create btn tag
//   var btn = document.createElement("button");
//   var btntext = document.createTextNode("Click");
//   btn.appendChild(btntext);
//   inputWrap[0].appendChild(btn);
//   btn.onclick = timer;
// };
