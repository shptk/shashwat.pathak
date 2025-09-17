// script.js
const body = document.body;

function createStar() {
  const star = document.createElement('div');
  const colors = ['#e0e0e0', '#ffd700', '#87ceeb', '#ff6347'];
  star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  star.classList.add('star');
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDuration = `${Math.random() * 2 + 1}s`;
  body.appendChild(star);
}

for (let i = 0; i < 250; i++) { // Increase the number of stars for full-page coverage
  createStar();
}

// script.js
const musicButton = document.getElementById('music-button');
const audio = new Audio('media/fantasy-music.mp3'); // Path to your music file
let isPlaying = false;

musicButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    musicButton.innerHTML = '<i class="fa-solid fa-guitar"></i>'; // Change icon to default
  } else {
    audio.play();
    musicButton.innerHTML = '<i class="fas fa-pause"></i>'; // Change icon to pause
  }
  isPlaying = !isPlaying;
});

// Optional: Loop the music
audio.loop = true;