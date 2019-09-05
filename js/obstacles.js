class Obstacles{
    constructor(ctx, x){
        this.ctx=ctx;
        this.imageObstacles=new Image();
        this.imageObstacles.src="img/floor01.png";
        this.w=40;
        this.h=40;
        
        this.x=x;
        this.y=0;
        this.dx=3;
    }

}