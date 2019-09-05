class Background{
    constructor(w,h,ctx){
        this.ctx=ctx;
        this.imageBackground=new Image();
        //
        this.imageBackground.src="img/planet07.png";
        this.w=w;
        this.h=h;
        
        this.x=0;
        this.y=0;
        this.dx=2;
    }

    //me dibuja el background
    draw()
    {
        this.ctx.drawImage(
            this.imageBackground,
            this.x,
            this.y,
            this.w,
            this.h
        );
        this.ctx.drawImage(
            this.imageBackground,
            this.x + this.w,
            this.y,
            this.w,
            this.h
        );
    }

    //me mueve el background
    move()
    {
        this.x-=this.dx;
        if(this.x<-this.w) this.x = 0;
    }
}