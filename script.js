let player;
let heartbeatInterval;

// YouTube Player
function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytMusic', {
    height: '0',
    width: '0',
    videoId: 'mOVYTZT6lHE',
    playerVars: {
      autoplay: 0,
      loop: 1,
      playlist: 'mOVYTZT6lHE'
    }
  });
}

// Typing effect
const text = "I’m really sorry Papa... Please forgive me 🙏";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// Floating roses
setInterval(() => {
  let rose = document.createElement("div");
  rose.classList.add("rose");
  rose.innerText = "🌹";

  rose.style.left = Math.random() * 100 + "vw";
  rose.style.animationDuration = (5 + Math.random() * 5) + "s";

  document.body.appendChild(rose);

  setTimeout(() => rose.remove(), 8000);
}, 300);

// Continuous floating hearts
function startHearts() {
  heartbeatInterval = setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("bg-heart", "beat");
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
  }, 400);
}

// Stop hearts
function stopHearts() {
  clearInterval(heartbeatInterval);
}

// Button click
function acceptApology() {
  document.getElementById("response").innerText = "Thank you Papa ❤️";

  if (player) player.playVideo();
  startHearts();

  // Explosion hearts
  for (let i = 0; i < 25; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";

    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.transform = `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }
}

// Controls
function playMusic() {
  if (player) player.playVideo();
  startHearts();
}

function pauseMusic() {
  if (player) player.pauseVideo();
  stopHearts();
}

// Volume
function setVolume(value) {
  if (player) player.setVolume(value);
}
