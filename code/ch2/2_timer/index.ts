module ch2_2_timer {
  var // Basics properties
    timerId = -1,
    interval = 25,
    ms = 0,
    seconds = 0,
    minutes = 0,
    // Kick the timer off with an interval
    startTimer = function() {
      if (timerId === -1) {
        timerId = window.setInterval("turnTimerOn()", interval);
      }
    },
    // Update the screen with the timer data
    displayTimer = function() {
      document.getElementById("milliseconds").innerHTML = ms.toString();
      // todo : beck
      document.getElementById("seconds").innerHTML = seconds.toString();
      document.getElementById("minutes").innerHTML = minutes.toString();
    },
    // Start counting
    turnTimerOn = function() {
      ms += interval;
      if (ms >= 1000) {
        ms = 0;
        seconds += 1;
      }
      if (seconds >= 60) {
        ms = 0;
        seconds = 0;
        minutes += 1;
      }
      // todo : beck
      displayTimer();
    },
    // Pause the timer
    pauseTimer = function() {
      window.clearInterval(timerId);
      timerId = -1;
    },
    // Reset the timer to 0
    clearTimer = function() {
      pauseTimer();
      ms = 0;
      seconds = 0;
      minutes = 0;
      displayTimer();
    },
    // Bootstrap everything
    // todo : beck
    init = function(startButton, pauseButton, clearButton) {
      document
        .getElementById(startButton)
        .addEventListener("click", startTimer, false);
      document
        .getElementById(pauseButton)
        .addEventListener("click", pauseTimer, false);
      document
        .getElementById(clearButton)
        .addEventListener("click", clearTimer, false);
      displayTimer();
    };

  window.onload = function() {
    // todo : beck
    init("startButton", "pauseButton", "clearButton");
  };
}
