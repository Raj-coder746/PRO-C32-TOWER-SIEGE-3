class Polygon {
    constructor(x, y, radius) {
        var options = {
            'restitution':0.5,
            'friction':1.5,
            'density':2.0,
             isStatic: false
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        this.image = loadImage('Sprites/polygon.png');
        World.add(world, this.body);
}
 
    display() {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}