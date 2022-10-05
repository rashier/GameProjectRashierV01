
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
  counter:0,
  score:0,

  init: function(canvasId, assets) {
    this.canvas = document.getElementById(canvasId);

    let canvasContainer = document.getElementById('container')
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width  = canvasContainer.offsetWidth;
    this.canvas.height = canvasContainer.offsetHeight;
    
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
    this.generateObstacleMiddle();

    document.addEventListener("keypress", e => {
      e.preventDefault();
      if (e.key == ' ') {
        this.player.jumping = !this.player.jumping;
        this.counter++;
      }

      if (e.key == 'c') {
        this.player.change = !this.player.change;
      }
    });

    this.start();
  },

  start: function() {

    this.intervalID = setInterval(() => {
      this.clear();
      this.framesCounter++;
      this.score++;
      this.counter++;
      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }

      if (this.framesCounter % 50 === 0) {
        this.generateObstacle();
      }

      if (this.counter % 300 === 0) {
        this.generateObstacleMiddle();
        this.counter=0;
      }

      this.drawAll();
      this.moveAll();
      document.getElementById("scoreboard").innerHTML="Score: "+Math.floor(this.score/30);
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

      this.obstaclesBottom[i].x -= this.obstaclesBottom[i].dx

      this.ctx.drawImage(
        this.obstaclesBottom[i].imageObstacle,
        this.obstaclesBottom[i].x,
        this.obstaclesBottom[i].y=this.canvas.height-40,
        this.obstaclesBottom[i].w,
        this.obstaclesBottom[i].h
      );
    }
    this.obstaclesMiddle.forEach((elem) => {
        for (var i = 0; i < elem.length; i++) {

          elem[i].x -= elem[i].dxMiddle

          this.ctx.drawImage(
            elem[i].imageObstacle,
            elem[i].x,
            elem[i].y = canvas.height/2,
            elem[i].w,
            elem[i].h
          );
        }
    })

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

    if (this.obstaclesTop[0].x < (-this.obstaclesTop[0].w))
    this.obstaclesTop.shift();

    this.obstaclesBottom.push(
      new Obstacle(this.ctx,1000,this.assets[4])
    );
    if (this.obstaclesBottom[0].x<(-this.obstaclesBottom[0].w))
    this.obstaclesBottom.shift();


    },
    generateObstacleMiddle: function(){

      this.obstaclesMiddle[0]=( Array(26).fill().map((_, idx) => new Obstacle(this.ctx, ((idx * 40) + this.canvas.width),this.assets[4])))
    
    },
    
  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};
