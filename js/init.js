const game = new Game();

let speed = 50; // px par tick
let timeout = 1000; // 100 ms ≈ 10 FPS

setInterval(() => {
  game.update();
}, timeout);

window.addEventListener('keypress', (key) => {
  game.key(key.key);
});
