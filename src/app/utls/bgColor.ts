export class Pixel {
    public x:number;
    public y:number;
    public hue:number;
    public velocity:number;
    public high:string;
    public low:string;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
        this.hue = Math.floor( Math.random() * 360 );
        var direction = Math.random() > 0.5 ? -1 : 1;
        this.velocity = ( Math.random() * 30 + 20 ) * 0.01 * direction;
        let date = new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true }).split(" ")[1];
        let hMax = date == "PM" ? 15 : 50;
        let hMin = date == "PM" ? 1 : 15;
        let lMax = date == "PM" ? 20 : 40;
        let lMin = date == "PM" ? 10 : 20;
        this.high = (Math.random() * ( hMax - hMin) + hMax) + '%';
        this.low = (Math.random() * (lMax - lMin) + lMax) + '%';
    }

    update(){
        this.hue += this.velocity;
    }

    render(ctx:any){
        var hue = Math.round( this.hue );
        ctx.fillStyle = 'hsl(' + hue + ', '+this.high+' , '+this.low+' )';
        ctx.fillRect( this.x, this.y, 1, 1 );
    }

}