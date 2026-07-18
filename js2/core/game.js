class Game {
  constructor(width, height, id) {
    this.canva = document.querySelector(id);

    this.canva.style.width = width + 'px';
    this.canva.style.height = height + 'px';
  }
}

export default Game;
