class box {
    constructor(x, y, width, height) {
        this.height = height;
        this.width = width;
        this.body = Bodies.rectangle(x, y, this.width, this.height);
        World.add(world, this.body);
        this.visi = 0;
    }
    display(Colour) {
        if (this.body.velocity.x < 2 || this.body.velocity.y < 2) {
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
            tint(225, this.visi);
            World.remove(world, this.body);
            pop();
        }

    }
}
