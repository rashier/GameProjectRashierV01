class Obstacle {
  /**
   * The constructor function is used to create a new object with the properties
   * of the Obstacle class
   * @param ctx - the canvas context
   * @param x - the x position of the obstacle
   * @param obstacleImage - the image of the obstacle
   */
  constructor(ctx, x, obstacleImage) {
    this.ctx = ctx;
    this.imageObstacle = obstacleImage;
    this.w = 40;
    this.h = 40;

    this.x = x;
    this.y = 0;
    this.dx = 0.8;
    this.dxMiddle = 2;
  }
  
  move() {
    let x = this.x;
    this.x -= this.dxMiddle;
    if (this.x < -this.w) {
      this.x = x
    };
  }
}
