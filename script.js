let currentAudio = null;

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const soundSrc = button.dataset.sound;

    // Stop any currently playing audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Create and play new audio
    currentAudio = new Audio(soundSrc);
    currentAudio.play().catch(err => {
      console.error("Playback failed:", err);
    });
  });
});
