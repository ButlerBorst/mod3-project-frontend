

var remainingSec;
var interval;

function tick() {
  var min = Math.floor(remainingSec / 60);
  var sec = remainingSec - min * 60;

  var timerWrap = document.getElementsByClassName("timer-wrap")[0];

  if (sec < 10) {
    sec = "0" + sec;
    if (min == 0) {
      timerWrap.style.color = "red";
    }
  }
  if (sec == 0 && min == 0) {
    alert("completed");
    clearInterval(interval);
  }
  timerWrap.textContent = min + " : " + sec;
  remainingSec--;
}

function timer() {
  var value = document.getElementById("input-no").value;
  if (isNaN(value)) {
    alert("Please input Number");
  } else {
    remainingSec = value * 60;
    interval = setInterval(tick, 1000);
    document.getElementsByClassName("input-wrap")[0].style.display = "none";
  }
}

window.onload = function() {
  var inputWrap = document.getElementsByClassName("input-wrap");
  // create input tag
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Please Set Break Time");
  input.setAttribute("id", "input-no");
  inputWrap[0].appendChild(input);
  // create btn tag
  var btn = document.createElement("button");
  var btntext = document.createTextNode("Click");
  btn.appendChild(btntext);
  inputWrap[0].appendChild(btn);
  btn.onclick = timer;
};
