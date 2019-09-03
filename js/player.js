class Player{
    constructor(ctx){
        this.ctx=ctx;
        this.imagePlayer01=new Image();
        this.imagePlayer01.src="img/Marvin01.png";
        this.imagePlayer02=new Image();
        this.imagePlayer02.src="img/Marvin02.png";
        this.w=80;
        this.h=80;
        
        this.x=30;
        this.y=30;
        this.positionY=false;
    }

    //me dibuja el jugador
    draw()
    {
if(this.y==(560-this.w)){
        this.ctx.drawImage(
            this.imagePlayer01,
            this.x=30,
            this.y=560-this.w,
            this.w,
            this.h
        );
}else{
    this.ctx.drawImage(
        this.imagePlayer02,
        this.x=30,
        this.y=30,
        this.w,
        this.h
    );
}
    }

    //me mueve el jugador 
    move()
    {
        if (this.positionY){
            
            this.y=560-this.w;

        }
        else{
            this.x=30;
            this.y=30;
        }
    }
}