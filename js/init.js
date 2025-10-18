const game = new Game();

let speed = 5; // px per frame
let timeout = 100; // 16ms = 60fps

setInterval(() => {
  game.update();
}, timeout);

window.addEventListener('keypress', (key) => {
  game.key(key.key);
});
