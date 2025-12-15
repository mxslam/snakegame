const game = new Game();

let lastTime = performance.now();

function gameLoop(currentTime) {
  const deltaTime = (currentTime - lastTime) / 1000; // Delta en secondes
  lastTime = currentTime;

  game.update(deltaTime);
  requestAnimationFrame(gameLoop);
}

// Démarrer la boucle de jeu
requestAnimationFrame(gameLoop);

window.addEventListener('keypress', (key) => {
  game.key(key.key);
});
