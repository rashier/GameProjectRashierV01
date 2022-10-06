/* It creates a background image that moves from right to left */
class Background {
  /**
   * The constructor function is used to create a new object, and it is called when
   * the object is instantiated
   * @param w - width of the canvas
   * @param h - height of the canvas
   * @param ctx - the canvas context
   * @param backgroundImage - the image that will be used as the background
   */
  constructor(w, h, ctx, backgroundImage) {
    this.ctx = ctx;
    this.imageBackground = backgroundImage;
    this.w = w;
    this.h = h;

    this.x = 0;
    this.y = 0;
    this.dx = 2;
  }

  /**
   * We draw the background image twice, once at the x and y coordinates of the
   * background object, and once at the x and y coordinates of the background
   * object plus the width of the background image
   */
  draw() {
    this.ctx.drawImage(this.imageBackground, this.x, this.y, this.w, this.h);

    this.ctx.drawImage(
      this.imageBackground,
      this.x + this.w,
      this.y,
      this.w,
      this.h
    );
  }

  //me mueve el background
  /**
   * Move the image to the left by the amount of the dx property, and if the image
   * has moved off the left edge of the canvas, move it back to the right edge.
   */
  move() {
    this.x -= this.dx;
    if (this.x < -this.w) this.x = 0;
  }
}
