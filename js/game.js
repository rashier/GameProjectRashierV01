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

  init: function(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.background = new Background(
      this.canvas.width,
      this.canvas.height,
      this.ctx
    );
      let gap = 0;
    this.player = new Player(this.ctx);
    this.obstaclesTop = Array(26).fill().map((_, idx) => new Obstacles(this.ctx, (idx * (40 + gap) )))
    this.obstaclesBottom = Array(26).fill().map((_, idx) => new Obstacles(this.ctx, (idx * (40 + gap) )))
    this.obstaclesMiddle = Array(26).fill().map((_, idx) => new Obstacles(this.ctx, (idx * 40) + this.canvas.width))


    document.addEventListener("keypress", e => {
      e.preventDefault();
      if (e.keyCode == 32) {
        this.player.positionY = !this.player.positionY;
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

      // if (this.framesCounter % 50 === 0) {
      //   this.generateObstacle();
      // }

      this.drawAll();
      this.moveAll();
    }, 1000 / this.fps);
  },

  drawAll: function() {
    this.background.draw();
    
    for (var i = 0; i < this.obstaclesTop.length; i++) {

      this.obstaclesTop[i].x-=.8

      this.ctx.drawImage(
        this.obstaclesTop[i].imageObstacles,
        this.obstaclesTop[i].x,
        this.obstaclesTop[i].y,
        this.obstaclesTop[i].w,
        this.obstaclesTop[i].h
      );
    }

    for (var i = 0; i < this.obstaclesBottom.length; i++) {
      
      this.obstaclesBottom[i].x-=.8

      this.ctx.drawImage(
        this.obstaclesBottom[i].imageObstacles,
        this.obstaclesBottom[i].x,
        this.obstaclesBottom[i].y=this.canvas.height-40,
        this.obstaclesBottom[i].w,
        this.obstaclesBottom[i].h
      );
    }

    for (var i = 0; i < this.obstaclesMiddle.length; i++) {
      
      this.obstaclesMiddle[i].x-=.8

      this.ctx.drawImage(
        this.obstaclesMiddle[i].imageObstacles,
        this.obstaclesMiddle[i].x,
        this.obstaclesMiddle[i].y=this.canvas.height/2,
        this.obstaclesMiddle[i].w,
        this.obstaclesMiddle[i].h
      );
    }

   
    //me dibuja eñ jugador
    this.player.draw(this.framesCounter);
  },

  moveAll: function() {
    this.background.move();
    this.player.move();
  },

  //generamos nuevos obstáculos
  // generateObstacle: function() {
  //   this.obstacles.push(
  //     new Obstacles(this.ctx)
  //   );
  // },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};
