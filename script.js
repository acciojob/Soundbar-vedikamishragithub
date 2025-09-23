let currentAudio = null;

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const soundSrc = button.dataset.sound;

    // Stop any currently playing audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.remove(); // Remove the audio element from the DOM
    }

    // Create and play new audio
    currentAudio = new Audio(soundSrc);
    currentAudio.setAttribute('preload', 'auto');
    currentAudio.style.display = 'none'; // Hide the audio element
    document.body.appendChild(currentAudio);

    currentAudio.play().catch(err => {
      console.error("Playback failed:", err);
    });
  });
});

// Stop button functionality
document.getElementById('stopBtn').addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio.remove(); // Remove the audio element from the DOM
    currentAudio = null;
  }
});

