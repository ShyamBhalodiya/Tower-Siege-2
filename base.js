class base{
    constructor(x,y,width,height){
        var option=  {
            isStatic:true
        }
        this.height = height;
        this.width = width;
        this.body = Bodies.rectangle(x,y,this.width,this.height,option);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(225,0,0);
        rect(0,0,this.width,this.height);
        pop();
    }
}