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

  /**
   * This function draws the image of the player, and it also calls the animateImg
   * function to animate the image
   * @param framesCounter - the number of frames that have passed since the game
   * started.
   */
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

  /**
   * If the framesCounter is divisible by 4, then increment the frameIndex by 1. If
   * the frameIndex is greater than 3, then reset the frameIndex to 0
   * @param framesCounter - the number of frames that have passed since the game
   * started.
   */
  animateImg(framesCounter) {
    if (framesCounter % 4 === 0) {
      this.frameIndex++;

      if (this.frameIndex > 3) this.frameIndex = 0;
    }
  }

  /**
   * If the player is moving right, and is not jumping, then the player image is
   * the first image in the array. If the player is moving right, and is jumping,
   * then the player image is the second image in the array. If the player is
   * moving left, and is jumping, then the player image is the third image in the
   * array. If the player is moving left, and is not jumping, then the player image
   * is the fourth image in the array
   */
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

  /**
   * The function checks if the player is jumping and if the player is jumping, it
   * checks if the player is colliding with the top of the canvas, the top of the
   * middle obstacles, or the bottom of the middle obstacles. If the player is
   * colliding with any of those, the player's y velocity is set to 0. If the
   * player is not colliding with any of those, the player's y velocity is set to
   * -20 if the player is jumping and 20 if the player is not jumping
   */
  checkCollision() {
    let yBottomPlayer = this.y + this.h;
    let yTopObstaclesBottom = this.ctx.canvas.height - 40;
    let yBottomObstacleMiddle = Game.obstaclesMiddle[0][0].y + Game.obstaclesMiddle[0][0].h;

    if ((this.y <= 40 && this.jumping === true)||
    (yBottomPlayer >= Game.obstaclesMiddle[0][0].y && Game.obstaclesMiddle[0][0].x <= 40 && 
    (this.jumping === false) && Game.obstaclesMiddle[0][25].x >= 40 && +(this.y + this.h) <= yBottomObstacleMiddle)
    || (yBottomPlayer >= yTopObstaclesBottom && this.jumping === false) 
    ||(this.y <= yBottomObstacleMiddle && Game.obstaclesMiddle[0][0].x <= 40 &&(this.jumping === true) &&
      Game.obstaclesMiddle[0][25].x >= 40&&this.y >= Game.obstaclesMiddle[0][0].y))
    {
      this.dy = 0
    }
    else if (this.jumping === true ) 
    {
      this.dy = -10 ;
    }    
    else if (this.jumping === false) 
    {
      this.dy = 10;
    }
  }
}
