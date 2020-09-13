function poly(x,y){
    beginShape();
    vertex(x-30,y-10);
    vertex(x,y-30);
    vertex(x+30,y-10);
    vertex(x+30,y+30);
    vertex(x,y+50);
    vertex(x-30,y+30);
    endShape(CLOSE);
  }
class Pgon{
    constructor(){
        this.body = Bodies.polygon(160,280,6,50);
        this.radius = 130 ;
        this.sides = 6 ; 
        World.add(world,this.body);
    }
    display(){
        push();
        fill(124,252,0);
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        poly(0,0)
        pop();
    }
}
