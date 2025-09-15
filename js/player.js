const PlayerElement = document.getElementById('player');

class Player {
  constructor(x, y) {
    this.SetPosition(x, y);
    this.dir = 0;
    this.xpos = parseInt(PlayerElement.style.left.slice(0, -2));
    this.ypos = parseInt(PlayerElement.style.top.slice(0, -2));
    this.xtarget = this.xpos;
    this.ytarget = this.ypos;
    this.snakeMove = false;
    MapArray.push({
      name: 'player',
      x: this.xpos,
      y: this.ypos,
    });
  }

  RefreshValues() {
    this.xpos = parseInt(PlayerElement.style.left.slice(0, -2));
    this.ypos = parseInt(PlayerElement.style.top.slice(0, -2));
    this.xtarget == this.xpos && this.ypos == this.ytarget ? (this.snakeMove = false) : (this.snakeMove = true);
  }

  SetXposition(x) {
    PlayerElement.style.left = `${x}px`;
  }

  SetYposition(y) {
    PlayerElement.style.top = `${y}px`;
  }
  SetPosition(x, y) {
    this.SetXposition(x);
    this.SetYposition(y);
  }

  VerifyTargetCollision() {
    if (this.xtarget > 750) {
      this.xtarget = 0;
      this.SetXposition(0);
    }

    if (this.xtarget < 0) {
      this.xtarget = 750;
      this.SetXposition(750);
    }

    if (this.ytarget < 0) {
      this.ytarget = 550;
      this.SetYposition(550);
    }

    if (this.ytarget > 550) {
      this.ytarget = 0;
      this.SetYposition(0);
    }
  }

  MovePlayer() {
    if (this.xtarget > this.xpos) {
      this.SetXposition(this.xpos + 2.5);
    }

    if (this.xtarget < this.xpos) {
      this.SetXposition(this.xpos - 2.5);
    }

    if (this.ytarget > this.ypos) {
      this.SetYposition(this.ypos + 2.5);
    }

    if (this.ytarget < this.ypos) {
      this.SetYposition(this.ypos - 2.5);
    }

    this.createNewTarget();
    this.VerifyTargetCollision();
  }

  createNewTarget() {
    if (!this.snakeMove) {
      switch (this.dir) {
        case 0:
          this.xtarget = this.xpos + 50;
          break;

        case 1:
          this.xtarget = this.xpos - 50;
          break;

        case 2:
          this.ytarget = this.ypos - 50;
          break;
        case 3:
          this.ytarget = this.ypos + 50;
          break;
      }
    }
  }
}
