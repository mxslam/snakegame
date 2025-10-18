const game = new Game();

setInterval(() => {
  game.update();
}, 16);

window.addEventListener('keypress', (key) => {
  game.key(key.key);
});
