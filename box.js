class box {
    constructor(x, y, width, height) {
        this.height = height;
        this.width = width;
        this.body = Bodies.rectangle(x, y, this.width, this.height);
        World.add(world, this.body);
        this.visi = 255;
    }
    display(Colour) {
        if (this.body.speed < 8) {
            this.color = Colour;
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            rectMode(CENTER);
            fill(this.color);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else {
            push();
            this.visi = this.visi - 10;
            tint(255, this.visi);
            World.remove(world, this.body);
            pop();
        }

    }
    score(){
        if(this.visi < 0 && this.visi > -10){
            score = score + 1 ;
        }
    }
}
