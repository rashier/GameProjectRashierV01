const Game = {
  canvas: undefined,
  ctx: undefined,
  intervalID: undefined,
  fps: 60,
  background: undefined,
  player: undefined,
  obstacles: [],
  framesCounter : 0,
  // scoreBoard: undefined,
  keys: {
    SPACE: 32
  },
  init: function(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.background = new Background(
      this.canvas.width,
      this.canvas.height,
      this.ctx
    );

    this.player = new Player(this.ctx);

    document.addEventListener("keypress", e => {
      e.preventDefault();

      if (e.keyCode == 32) {
        this.player.positionY = !this.player.positionY;
      }
    });
    //   ScoreBoard.init(this.ctx);

    this.start();
  },

  start: function() {
    this.intervalID = setInterval(() => {
      this.clear();
      this.framesCounter++;

      // controlamos que frameCounter no sea superior a 1000
      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }

      this.drawAll();
      this.moveAll();
    }, 1000 / this.fps);
  },

  drawAll: function() {
    this.background.draw();
    this.player.draw(this.framesCounter);
    console.log(this.framesCounter)
  },

  moveAll: function() {
    this.background.move();
    this.player.move();
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};
