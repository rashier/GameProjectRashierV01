class Player {
  constructor(ctx, imageMarvin01, imageMarvin02, imageDot03, imageDot04) {
    this.ctx = ctx;
    this.imagePlayerArray = [
      imageMarvin01,
      imageMarvin02,
      imageDot03,
      imageDot04
    ];

    this.imagePlayer01 = this.imagePlayerArray[0];
    this.w = 80;
    this.h = 120;

    this.x = 40;
    this.y = this.ctx.canvas.height - this.h - 40;
    this.dy = 0;
    this.change = true;
    this.jumping = false;
    this.press = false;
    this.frames = 4;
    this.frameIndex = 0;
  }

  //me dibuja el jugador
  draw(framesCounter) {
    this.ctx.drawImage(
      this.imagePlayer01,
      this.frameIndex * Math.floor(this.imagePlayer01.width / this.frames),
      0,
      Math.floor(this.imagePlayer01.width / this.frames),
      this.imagePlayer01.height,

      this.x,
      this.y,
      this.w,
      this.h
    );

    this.animateImg(framesCounter);
  }

  animateImg(framesCounter) {
    if (framesCounter % 4 === 0) {
      this.frameIndex++;

      if (this.frameIndex > 3) this.frameIndex = 0;
    }
  }

  move() {
    this.checkCollision();

    if (this.change) {
      if (!this.jumping) {
        this.imagePlayer01 = this.imagePlayerArray[0];
        this.y += this.dy;
      } else {
        this.imagePlayer01 = this.imagePlayerArray[1];
        this.y += this.dy;
      }
    } else {
      if (this.jumping) {
        this.imagePlayer01 = this.imagePlayerArray[2];
        this.y += this.dy;
      } else {
        this.imagePlayer01 = this.imagePlayerArray[3];
        this.y += this.dy;
      }
    }
  }

  checkCollision() {
    let yBottomPlayer = this.y + this.h;
    let yTopObstaclesBottom = this.ctx.canvas.height - 40;
    let yBottomObstacleMiddle = Game.obstaclesMiddle[0][0].y + Game.obstaclesMiddle[0][0].h;

    if ((this.y <= 40 && this.jumping === true)||
    (yBottomPlayer >= Game.obstaclesMiddle[0][0].y && Game.obstaclesMiddle[0][0].x <= 40 && 
    (this.jumping === false) && Game.obstaclesMiddle[0][25].x >= 40&&+(this.y+this.h) <= yBottomObstacleMiddle)
    || (yBottomPlayer >= yTopObstaclesBottom && this.jumping === false) 
    ||(this.y <= yBottomObstacleMiddle && Game.obstaclesMiddle[0][0].x <= 40 &&(this.jumping === true) &&
      Game.obstaclesMiddle[0][25].x >= 40&&this.y >= Game.obstaclesMiddle[0][0].y))
    {
      this.dy=0
    }
    else if (this.jumping === true ) 
    {
      this.dy = -20;
    }    
    else if (this.jumping === false) 
    {
      this.dy = 20;
    }
  }
}
