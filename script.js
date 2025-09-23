
  const button=document.getElementById('button');
  const applauseBtn = document.getElementById("applauseBtn");
  const booBtn = document.getElementById("booBtn");
  const gaspBtn = document.getElementById("gaspBtn");
  const tadaBtn = document.getElementById("tadaBtn");
  const victoryBtn = document.getElementById("victoryBtn");
  const wrongBtn = document.getElementById("wrongBtn");
  const stopBtn = document.getElementById("stopBtn");

 let currentSound = null;

button.forEach(button=>{
	button.addEventListener('click',()=>{
          audioPlayer.pause();
          audioPlayer.currentTime = 0;

		    const soundFile = button.getAttribute('data-sound');
            audioSource.src = `sounds/${soundFile}`;
		    audioPlayer.load();
		    audioPlayer.play();    
		
	});
});



  stopBtn.addEventListener('click', () => {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
});


