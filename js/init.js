const game = new Game();

let baseSpeed = 5; // vitesse nominale
let timeout = 16; // 16 ms ≈ 60 fps
let lastTime = performance.now();

setInterval(() => {
  const now = performance.now();
  const elapsed = now - lastTime; // combien de ms se sont écoulées en vrai
  lastTime = now;

  // ratio entre temps réel et temps prévu
  const ratio = elapsed / timeout;

  // ajuste la vitesse si une frame est en retard ou en avance
  speed = baseSpeed * ratio;

  game.update();
}, timeout);

window.addEventListener('keypress', (key) => {
  game.key(key.key);
});
