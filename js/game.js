const Game = {
  canvas: undefined,
  ctx: undefined,
  intervalID: undefined,
  fps: 60,
  background: undefined,
  player: undefined,
  obstaclesTop: [],
  obstaclesBottom: [],
  obstaclesMiddle: [],
  framesCounter: 0,

  // scoreBoard: undefined,

  init: function(canvasId,assets) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.assets=assets;

    this.background = new Background(
      this.canvas.width,
      this.canvas.height,
      this.ctx,
      this.assets[5]
    );

    this.player = new Player(this.ctx,this.assets[0],this.assets[1],this.assets[2],this.assets[3]);
    
    this.obstaclesTop = Array(26).fill().map((_, idx) => new Obstacle(this.ctx, (idx * (40) ),this.assets[4]))
    this.obstaclesBottom = Array(26).fill().map((_, idx) => new Obstacle(this.ctx, (idx * (40) ),this.assets[4]))
    this.obstaclesMiddle = Array(26).fill().map((_, idx) => new Obstacle(this.ctx, ((idx * 40) + this.canvas.width),this.assets[4]))


    document.addEventListener("keypress", e => {
      e.preventDefault();
      if (e.keyCode == 32) {
        this.player.jumping = !this.player.jumping;
      }
      if (e.keyCode == 60) {
        this.player.change = !this.player.change;
      }
    });
    //   ScoreBoard.init(this.ctx);

    this.start();
  },

  start: function() {
    this.intervalID = setInterval(() => {
      this.clear();
      this.framesCounter++;

      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }

      if (this.framesCounter % 50 === 0) {
        this.generateObstacle();
      }

      this.drawAll();
      this.moveAll();
    }, 1000 / this.fps);
  },

  drawAll: function() {
    this.background.draw();

    for (var i = 0; i < this.obstaclesTop.length; i++) {

      this.obstaclesTop[i].x-=this.obstaclesTop[i].dx

      this.ctx.drawImage(
        this.obstaclesTop[i].imageObstacle,
        this.obstaclesTop[i].x,
        this.obstaclesTop[i].y,
        this.obstaclesTop[i].w,
        this.obstaclesTop[i].h
      );
    }

    for (var i = 0; i < this.obstaclesBottom.length; i++) {

      this.obstaclesBottom[i].x-=this.obstaclesTop[i].dx

      this.ctx.drawImage(
        this.obstaclesBottom[i].imageObstacle,
        this.obstaclesBottom[i].x,
        this.obstaclesBottom[i].y=this.canvas.height-40,
        this.obstaclesBottom[i].w,
        this.obstaclesBottom[i].h
      );
    }

    for (var i = 0; i < this.obstaclesMiddle.length; i++) {

      this.obstaclesMiddle[i].x-=this.obstaclesTop[i].dxMiddle

      this.ctx.drawImage(
        this.obstaclesMiddle[i].imageObstacle,
        this.obstaclesMiddle[i].x,
        this.obstaclesMiddle[i].y=this.canvas.height/2,
        this.obstaclesMiddle[i].w,
        this.obstaclesMiddle[i].h
      );
    }


    //me dibuja eL jugador
    this.player.draw(this.framesCounter);
  },

  moveAll: function() {
    this.background.move();
    this.player.move();
  },

  // generamos nuevos obstáculos
  generateObstacle: function() {
    this.obstaclesTop.push(
      new Obstacle(this.ctx,1000,this.assets[4])
    );

    if (this.obstaclesTop[0].x<(-this.obstaclesTop[0].w))
    this.obstaclesTop.shift();

    this.obstaclesBottom.push(
      new Obstacle(this.ctx,1000,this.assets[4])
    );
    if (this.obstaclesBottom[0].x<(-this.obstaclesBottom[0].w))
    this.obstaclesBottom.shift();

  // obstaclesMiddle PENDIENTE SU IMPLEMENTACION

    },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};
