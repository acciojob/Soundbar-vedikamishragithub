const buttons = document.querySelectorAll('.btn');
const stopBtn = document.getElementById('stopBtn');
let currentSound = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Stop the current sound if it's playing
    if (currentSound) {
      currentSound.pause();
      currentSound.currentTime = 0; // Reset to start
    }

    // Create a new audio object and play the sound
    const soundFile = butt.getAttribute('data-sound');
    currentSound = new Audio(`sounds/${soundFile}`);
    currentSound.play();
  });
});

stopBtn.addEventListener('click', () => {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0; // Reset to start
  }
});
