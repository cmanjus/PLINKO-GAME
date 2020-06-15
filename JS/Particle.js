class Particle{
    constructor(){
        var options={
            restitution:0.4,
             }
        this.body = Bodies.circle(random(50,450),20,8,options);
        World.add(world,this.body);
        this.radius = 8;
        this.color = color(random(0,255),random(0,255),random(0,255));
    }
    display(){
        var pos = this.body.position;
         var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}