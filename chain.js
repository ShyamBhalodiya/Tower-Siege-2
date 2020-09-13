class chain {
    constructor(bodyA, pointB) {
        this.bodyA = bodyA;
        this.pointB = pointB;
        var options = {
            bodyA: this.bodyA,
            pointB: this.pointB,
            length: 100,
            stiffness: 0.04
        }
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    display() {
        if (this.body.bodyA) {
            var pos = this.body.bodyA.position;
            var point = this.body.pointB;
            push();
            stroke(255);
            strokeWeight(7);
            line(pos.x, pos.y, point.x, point.y);
            pop();
        }
    }
    fly() {
        this.body.bodyA = null;
    }
    attach(body){
        this.body.bodyA = body;
    }
}