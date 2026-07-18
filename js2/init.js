import style from './core/styles.js';
import deployGrid from './core/grid.js';
import Game from './core/game.js';

function init() {
  style();
  const CreateGame = new Game(400, 400, '#game');
  deployGrid();
}

init();
