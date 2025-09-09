const game = new Game();

window.addEventListener('keypress', (key) => {
  game.key(key.key);
});
