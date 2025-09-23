<script>
  const button=document.getElementById('button');
  const applauseBtn = document.getElementById("applauseBtn");
  const booBtn = document.getElementById("booBtn");
  const gaspBtn = document.getElementById("gaspBtn");
  const tadaBtn = document.getElementById("tadaBtn");
  const victoryBtn = document.getElementById("victoryBtn");
  const wrongBtn = document.getElementById("wrongBtn");
  const stopBtn = document.getElementById("stopBtn");

 const audioPlayer = new Audio();
const buttons = document.querySelectorAll('.btn');
const currentSound=null;

button.forEach(button=>{
	button.addEventListener('click',()=>{
        is(currentSound){
			 audioSound.pause();
          audioSound.currentTime = 0;
		} 

		    const soundFile = button.getAttribute('data-sound');
            audioSource.src = `sounds/${soundFile}`;
		    audioSound.load();
		    audioSound.play();    
		
	});
});



  stopBtn.addEventListener('click', () => {
  audioSound.pause();
  audioSound.currentTime = 0;
});
</script>

