export class Pixel {
    public x:number;
    public y:number;
    public hue:number;
    public velocity:number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
        this.hue = Math.floor( Math.random() * 360 );
        var direction = Math.random() > 0.5 ? -1 : 1;
        this.velocity = ( Math.random() * 30 + 20 ) * 0.01 * direction;
    }

    update(){
        this.hue += this.velocity;
    }

    render(ctx:any){
        var hue = Math.round( this.hue );
        ctx.fillStyle = 'hsl(' + hue + ', 100%, 50% )';
        ctx.fillRect( this.x, this.y, 1, 1 );
    }

}