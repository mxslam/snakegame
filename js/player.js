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
      selector: 'player',
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

  MovePlayer(deltaTime) {
    // Calculer la distance à parcourir cette frame (utilise la vitesse globale)
    const moveDistance = window.SPEED_PX_PER_SECOND * deltaTime;
    
    // Mouvement horizontal
    if (this.xtarget > this.xpos) {
      const newX = Math.min(this.xpos + moveDistance, this.xtarget);
      this.SetXposition(newX);
    } else if (this.xtarget < this.xpos) {
      const newX = Math.max(this.xpos - moveDistance, this.xtarget);
      this.SetXposition(newX);
    }

    // Mouvement vertical
    if (this.ytarget > this.ypos) {
      const newY = Math.min(this.ypos + moveDistance, this.ytarget);
      this.SetYposition(newY);
    } else if (this.ytarget < this.ypos) {
      const newY = Math.max(this.ypos - moveDistance, this.ytarget);
      this.SetYposition(newY);
    }

    this.createNewTarget();
    this.VerifyTargetCollision();
  }

  createNewTarget() {
    if (!this.snakeMove) {
      switch (this.dir) {
        case 0:
          this.xtarget = this.xpos + window.CASE_SIZE;
          break;

        case 1:
          this.xtarget = this.xpos - window.CASE_SIZE;
          break;

        case 2:
          this.ytarget = this.ypos - window.CASE_SIZE;
          break;
        case 3:
          this.ytarget = this.ypos + window.CASE_SIZE;
          break;
      }
    }
  }
}
