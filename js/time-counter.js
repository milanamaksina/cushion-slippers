document.addEventListener("DOMContentLoaded", function () {
  const sec = 16;
  const min = 51;
  const hrs = 4;

  const newTime = 1000 * sec + 1000 * 60 * min + 1000 * 60 * 60 * hrs;
  const endTime = new Date().getTime() + (newTime);

  function updateTimer() {
    const currentTime = new Date().getTime();
    const timeLeft = endTime - currentTime;

    if (timeLeft <= 0) {
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      clearInterval(timerInterval);
    } else {
      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById("hours").textContent = padZeroes(hours);
      document.getElementById("minutes").textContent = padZeroes(minutes);
      document.getElementById("seconds").textContent = padZeroes(seconds);
    }
  }

  function padZeroes(value) {
    return value < 10 ? `0${value}` : value;
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
});
