
<button id="applauseBtn">Applause</button>
<button id="booBtn">Boo</button>
<button id="gaspBtn">Gasp</button>
<button id="tadaBtn">Tada</button>
<button id="victoryBtn">Victory</button>
<button id="wrongBtn">Wrong</button>
<button id="stopBtn">Stop</button>

<audio id="applauseAudio" src="applause.ogg"></audio>
<audio id="booAudio" src="boo.ogg"></audio>
<audio id="gaspAudio" src="gasp.ogg"></audio>
<audio id="tadaAudio" src="tada.ogg"></audio>
<audio id="victoryAudio" src="victory.ogg"></audio>
<audio id="wrongAudio" src="wrong.ogg"></audio>
<audio id="stopAudio" src="stop.ogg"></audio>

<script>
  const applauseBtn = document.getElementById("applauseBtn");
  const booBtn = document.getElementById("booBtn");
  const gaspBtn = document.getElementById("gaspBtn");
  const tadaBtn = document.getElementById("tadaBtn");
  const victoryBtn = document.getElementById("victoryBtn");
  const wrongBtn = document.getElementById("wrongBtn");
  const stopBtn = document.getElementById("stopBtn");

  const applauseAudio = document.getElementById('applauseAudio');
  const booAudio = document.getElementById('booAudio');
  const gaspAudio = document.getElementById('gaspAudio');
  const tadaAudio = document.getElementById('tadaAudio');
  const victoryAudio = document.getElementById('victoryAudio');
  const wrongAudio = document.getElementById('wrongAudio');
  const stopAudio = document.getElementById('stopAudio');

  applauseBtn.addEventListener('click', () => {
    applauseAudio.currentTime = 0;
    applauseAudio.play();
  });
  booBtn.addEventListener('click', () => {
    booAudio.currentTime = 0;
    booAudio.play();
  });
  gaspBtn.addEventListener('click', () => {
    gaspAudio.currentTime = 0;
    gaspAudio.play();
  });
  tadaBtn.addEventListener('click', () => {
    tadaAudio.currentTime = 0;
    tadaAudio.play();
  });
  victoryBtn.addEventListener('click', () => {
    victoryAudio.currentTime = 0;
    victoryAudio.play();
  });
  wrongBtn.addEventListener('click', () => {
    wrongAudio.currentTime = 0;
    wrongAudio.play();
  });
  stopBtn.addEventListener('click', () => {
    stopAudio.currentTime = 0;
    stopAudio.play();
  });


