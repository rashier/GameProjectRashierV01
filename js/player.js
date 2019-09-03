class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.imagePlayer01 = new Image();
    this.imagePlayer01.src = "./img/Marvin the MartianRun01.png";
    this.w =40;
    this.h = 80;

    this.x = 30;
    this.y = 30;
    this.positionY = false;

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
    console.log(this.imagePlayer01.frameIndex)
    if (framesCounter % 6 === 0) {
      this.imagePlayer01.frameIndex++;

      // Si el frame es el último, se vuelve al primero
      if (this.imagePlayer01.frameIndex > 3) this.imagePlayer01.frameIndex = 0;
    }
  }

  //me mueve el jugador
  move() {
    if (this.positionY) {
      this.imagePlayer01.src = "./img/Marvin the MartianRun01.png";
      this.y = 560 - this.h;
    } else {
      this.imagePlayer01.src = "./img/Marvin the MartianRun02.png";
      this.x = 30;
      this.y = 30;
    }
  }
}
