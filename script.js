var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;
var startTime, currentTime, elapsedTime = 0;

function start() {
  if (!timer) {
    timer = true;
    startTime = Date.now() - elapsedTime;
    stopwatch();
  }
}

function stop() {
  timer = false;
  elapsedTime = Date.now() - startTime;
}

function reset() {
  timer = false;
  elapsedTime = 0;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function stopwatch() {
  if (timer) {
    currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    // Convert elapsedTime to hr, min, sec, and count
    hr = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    sec = Math.floor((elapsedTime / 1000) % 60);
    count = Math.floor((elapsedTime % 1000) / 10);

    var hrString = hr < 10 ? "0" + hr : hr;
    var minString = min < 10 ? "0" + min : min;
    var secString = sec < 10 ? "0" + sec : sec;
    var countString = count < 10 ? "0" + count : count;

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;

    requestAnimationFrame(stopwatch); // Calls the stopwatch function again for a smooth update
  }
}
