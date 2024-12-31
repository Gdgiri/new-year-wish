// Function to play the New Year music (new-year.mp3)
function playNewYearMusic() {
  const newYearMusic = document.getElementById("new-year-music");
  newYearMusic.play();
}



// Trigger the countdown and New Year greeting
document.getElementById("start-btn").addEventListener("click", function () {
  const username = document.getElementById("username").value.trim();

  if (!username) {
    alert("Please enter your name!");
    return;
  }

  // Hide the input and show the countdown
  document.getElementById("input-container").style.display = "none";
  document.getElementById("countdown-container").style.display = "block";

  let countdown = 10;

  const countdownElement = document.getElementById("countdown");

  // Start the countdown
  const timer = setInterval(() => {
    countdownElement.textContent = countdown;
    countdown--;

   
    // After countdown ends, clear the interval and play New Year music
    if (countdown < 0) {
      clearInterval(timer);

      // Hide countdown and show New Year greeting
      document.getElementById("countdown-container").style.display = "none";
      const popupContainer = document.getElementById("popup-container");
      popupContainer.style.display = "block";
      document.getElementById(
        "greeting"
      ).textContent = `🎉 Happy New Year 2025, ${username}! 🎉`;

      // Play the New Year background music (new-year.mp3)
      playNewYearMusic();
    }
  }, 1000); // Change every 1 second
});
