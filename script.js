const heartRain = document.getElementById('heart-rain');
const stars = document.getElementById('stars');
const celebrateBtn = document.getElementById('celebrateBtn');
const surpriseBtns = document.querySelectorAll('.surprise-btn');
const imageReveal = document.getElementById('imageReveal');
const revealImage = document.getElementById('revealImage');
const revealTitle = document.getElementById('revealTitle');
const revealText = document.getElementById('revealText');
const closeReveal = document.getElementById('closeReveal');

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

function heartShower(amount = 24, x = window.innerWidth / 2, y = window.innerHeight / 2) {
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      dropHeart(true, x, y);
    }, i * 60);
  }
}

function svgToDataUri(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createArtwork(type) {
  const artworks = {
    cake: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
        <defs>
          <linearGradient id="bgCake" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#ff8dc7"/>
            <stop offset="100%" stop-color="#7a3cff"/>
          </linearGradient>
        </defs>
        <rect width="900" height="600" rx="30" fill="url(#bgCake)"/>
        <circle cx="120" cy="110" r="56" fill="rgba(255,255,255,0.18)"/>
        <circle cx="770" cy="120" r="44" fill="rgba(255,255,255,0.14)"/>
        <circle cx="750" cy="470" r="68" fill="rgba(255,255,255,0.12)"/>
        <text x="450" y="110" text-anchor="middle" font-size="44" fill="#ffffff" font-family="Verdana">Sweet Birthday</text>
        <rect x="250" y="300" width="400" height="110" rx="24" fill="#ffcee3"/>
        <rect x="280" y="238" width="340" height="86" rx="22" fill="#fff6fb"/>
        <rect x="300" y="198" width="18" height="52" rx="9" fill="#ffd166"/>
        <rect x="442" y="188" width="18" height="62" rx="9" fill="#ffd166"/>
        <rect x="584" y="198" width="18" height="52" rx="9" fill="#ffd166"/>
        <circle cx="309" cy="188" r="12" fill="#ff8a00"/>
        <circle cx="451" cy="178" r="12" fill="#ff8a00"/>
        <circle cx="593" cy="188" r="12" fill="#ff8a00"/>
        <circle cx="320" cy="334" r="16" fill="#ff6fae"/>
        <circle cx="380" cy="350" r="16" fill="#67e8f9"/>
        <circle cx="450" cy="332" r="16" fill="#ffd166"/>
        <circle cx="520" cy="350" r="16" fill="#ff6fae"/>
        <circle cx="580" cy="334" r="16" fill="#67e8f9"/>
        <text x="450" y="492" text-anchor="middle" font-size="28" fill="#fff7fb" font-family="Verdana">Một ngày thật rực rỡ và ngọt ngào</text>
      </svg>
    `,
    gift: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
        <defs>
          <linearGradient id="bgGift" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#1ec8ff"/>
            <stop offset="100%" stop-color="#ff5aa5"/>
          </linearGradient>
        </defs>
        <rect width="900" height="600" rx="30" fill="url(#bgGift)"/>
        <text x="450" y="105" text-anchor="middle" font-size="42" fill="#ffffff" font-family="Verdana">A Little Surprise</text>
        <circle cx="180" cy="150" r="10" fill="#fff3a4"/>
        <circle cx="220" cy="210" r="14" fill="#ffffff"/>
        <circle cx="710" cy="150" r="12" fill="#fff3a4"/>
        <circle cx="760" cy="200" r="8" fill="#ffffff"/>
        <rect x="240" y="240" width="420" height="250" rx="28" fill="#ffe4f0"/>
        <rect x="430" y="240" width="40" height="250" fill="#ff4fa3"/>
        <rect x="240" y="320" width="420" height="40" fill="#ff4fa3"/>
        <path d="M450 240 C380 180, 320 180, 325 235 C330 280, 405 282, 450 238Z" fill="#ffd166"/>
        <path d="M450 240 C520 180, 580 180, 575 235 C570 280, 495 282, 450 238Z" fill="#ffd166"/>
        <circle cx="315" cy="430" r="22" fill="#67e8f9" opacity="0.8"/>
        <circle cx="585" cy="430" r="22" fill="#67e8f9" opacity="0.8"/>
        <text x="450" y="540" text-anchor="middle" font-size="28" fill="#fff7fb" font-family="Verdana">Một món quà nhỏ, nhưng đầy yêu thương</text>
      </svg>
    `,
    night: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
        <defs>
          <linearGradient id="bgNight" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#0f1d5b"/>
            <stop offset="100%" stop-color="#6c1d73"/>
          </linearGradient>
        </defs>
        <rect width="900" height="600" rx="30" fill="url(#bgNight)"/>
        <circle cx="715" cy="122" r="56" fill="#fff2b0"/>
        <circle cx="180" cy="120" r="4" fill="#ffffff"/>
        <circle cx="250" cy="90" r="5" fill="#fff7fb"/>
        <circle cx="340" cy="150" r="4" fill="#ffffff"/>
        <circle cx="410" cy="72" r="5" fill="#fff7fb"/>
        <circle cx="520" cy="142" r="4" fill="#ffffff"/>
        <circle cx="615" cy="78" r="5" fill="#fff7fb"/>
        <circle cx="792" cy="208" r="4" fill="#ffffff"/>
        <text x="450" y="108" text-anchor="middle" font-size="40" fill="#ffffff" font-family="Verdana">Bầu Trời Điều Ước</text>
        <path d="M180 470 Q320 360 450 430 T720 400 L720 600 L180 600Z" fill="rgba(255,255,255,0.12)"/>
        <path d="M260 390 L310 250 L360 390Z" fill="#ffd166" opacity="0.92"/>
        <rect x="296" y="390" width="28" height="90" rx="12" fill="#ffe4a0"/>
        <path d="M520 430 C520 370, 610 370, 610 430 C610 470, 580 495, 565 515 C550 495, 520 470, 520 430Z" fill="#ff6fae" opacity="0.9"/>
        <text x="450" y="540" text-anchor="middle" font-size="28" fill="#fff7fb" font-family="Verdana">Chúc mọi điều ước đẹp nhất sẽ thành hiện thực</text>
      </svg>
    `
  };

  return svgToDataUri(artworks[type] || artworks.cake);
}

function openReveal(button) {
  revealImage.src = createArtwork(button.dataset.scene || 'cake');
  revealImage.alt = button.dataset.title || 'Ảnh bất ngờ';
  revealTitle.textContent = button.dataset.title || 'Khoảnh khắc bất ngờ';
  revealText.textContent = button.dataset.text || 'Một khung ảnh nhỏ được mở ra thật mượt.';

  imageReveal.classList.remove('active');
  void imageReveal.offsetWidth;
  imageReveal.classList.add('active');
  imageReveal.setAttribute('aria-hidden', 'false');

  heartShower(18, window.innerWidth / 2, window.innerHeight / 2);
}

function closeRevealModal() {
  imageReveal.classList.remove('active');
  imageReveal.setAttribute('aria-hidden', 'true');
}

setInterval(() => dropHeart(false), 320);

celebrateBtn.addEventListener('click', () => {
  heartShower(30, window.innerWidth / 2, window.innerHeight / 2);
});

surpriseBtns.forEach((button) => {
  button.addEventListener('click', () => openReveal(button));
});

closeReveal.addEventListener('click', closeRevealModal);

imageReveal.addEventListener('click', (event) => {
  if (event.target === imageReveal) {
    closeRevealModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeRevealModal();
  }
});

window.addEventListener('click', (event) => {
  for (let i = 0; i < 8; i++) {
    setTimeout(() => dropHeart(true, event.clientX, event.clientY), i * 30);
  }
});

createStars();
heartShower(18);
