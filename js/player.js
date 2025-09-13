const PlayerElement = document.getElementById('player');

class Player {
  constructor(x, y) {
    this.SetPosition(x, y);
    this.dir = 0;
    this.xpos = parseInt(PlayerElement.style.left.slice(0, -2));
    this.ypos = parseInt(PlayerElement.style.top.slice(0, -2));
    this.xtarget = this.xpos;
    this.ytarget = this.ypos;
  }

  RefreshValues() {
    this.xpos = parseInt(PlayerElement.style.left.slice(0, -2));
    this.ypos = parseInt(PlayerElement.style.top.slice(0, -2));
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

  VerifyTarget() {
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
    this.RefreshValues();

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

    switch (this.dir) {
      case 0:
        if (this.xtarget == this.xpos && this.ypos === this.ytarget) this.xtarget = this.xpos + 50;
        this.VerifyTarget();

        break;

      case 1:
        if (this.xtarget == this.xpos && this.ypos === this.ytarget) this.xtarget = this.xpos - 50;
        this.VerifyTarget();

        break;

      case 2:
        if (this.ytarget == this.ypos && this.xpos === this.xtarget) this.ytarget = this.ypos - 50;
        this.VerifyTarget();

        break;
      case 3:
        if (this.ytarget == this.ypos && this.xpos === this.xtarget) this.ytarget = this.ypos + 50;
        this.VerifyTarget();

        break;
    }
  }
}
