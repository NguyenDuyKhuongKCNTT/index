const heartRain = document.getElementById('heart-rain');
const stars = document.getElementById('stars');
const celebrateBtn = document.getElementById('celebrateBtn');

function createStars(count = 45) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${2 + Math.random() * 4}s`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    star.style.transform = `scale(${0.5 + Math.random()})`;
    stars.appendChild(star);
  }
}

function dropHeart(isBurst = false, x = Math.random() * window.innerWidth, y = -30) {
  const heart = document.createElement('span');
  heart.className = `heart ${isBurst ? 'burst' : ''}`;
  heart.textContent = ['💖', '💘', '💝', '💕', '💗'][Math.floor(Math.random() * 5)];
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.fontSize = `${16 + Math.random() * 22}px`;

  if (isBurst) {
    const moveX = `${-140 + Math.random() * 280}px`;
    const moveY = `${-180 + Math.random() * 120}px`;
    heart.style.setProperty('--x', moveX);
    heart.style.setProperty('--y', moveY);
  } else {
    heart.style.animationDuration = `${4 + Math.random() * 4}s`;
    heart.style.setProperty('--drift', `${-70 + Math.random() * 140}px`);
  }

  heartRain.appendChild(heart);
  setTimeout(() => heart.remove(), isBurst ? 1800 : 8000);
}

function heartShower(amount = 24) {
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      dropHeart(true, window.innerWidth / 2, window.innerHeight / 2);
    }, i * 60);
  }
}

setInterval(() => dropHeart(false), 320);
celebrateBtn.addEventListener('click', () => heartShower(30));
window.addEventListener('click', (event) => {
  for (let i = 0; i < 8; i++) {
    setTimeout(() => dropHeart(true, event.clientX, event.clientY), i * 30);
  }
});

createStars();
heartShower(18);
