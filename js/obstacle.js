class Obstacle{
    constructor(ctx, x, obstacleImage){
        this.ctx = ctx;
        this.imageObstacle = obstacleImage;
        this.w = 40;
        this.h = 40;
        
        this.x = x;
        this.y = 0;
        this.dx = .8;
        this.dxMiddle = 2;
    }
}