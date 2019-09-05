class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.imagePlayer01 = new Image();
    this.imagePlayer01.src = "./img/Dotwarner02.png";
    this.w =80;
    this.h = 160;

    this.x = 40;
    this.y = 40;
    this.change=true;
    this.positionY = true;

    // número de imágenes diferentes
    this.imagePlayer01.frames = 4;
    this.imagePlayer01.frameIndex = 0;
  }

  //me dibuja el jugador
  draw(framesCounter) {
    this.ctx.drawImage(
      this.imagePlayer01,
      this.imagePlayer01.frameIndex*Math.floor(this.imagePlayer01.width / this.imagePlayer01.frames),0,Math.floor(this.imagePlayer01.width / this.imagePlayer01.frames),this.imagePlayer01.height,

      this.x,
      this.y,
      this.w,
      this.h
    );

    this.animateImg(framesCounter);
  }

  animateImg(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 4 === 0) {
      this.imagePlayer01.frameIndex++;

      // Si el frame es el último, se vuelve al primero
      if (this.imagePlayer01.frameIndex > 3) this.imagePlayer01.frameIndex = 0;
    }
  }

  //me mueve el jugador
  move() {
    if (this.change){
      if (this.positionY) {
        this.imagePlayer01.src = "img/Marvin the MartianRun01.png";
          this.y = this.ctx.canvas.height-this.h-40;
        } else {
          this.imagePlayer01.src = "img/Marvin the MartianRun02.png";
          this.x = 40;
          this.y = 40;
        }
      }
        else{
          if (this.positionY) {
            this.imagePlayer01.src = "img/Dotwarner02.png";
              this.y = this.ctx.canvas.height-this.h-40;
            } else {
              this.imagePlayer01.src = "img/Dotwarner01.png";
              this.x = 40;
              this.y = 40;
            }
    
    }
  }
}
