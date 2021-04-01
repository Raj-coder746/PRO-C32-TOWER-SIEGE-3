class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.2,
          'isStatic': false
      }
      this.body1 = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      
      World.add(world, this.body1);
    }
    display(){
      var pos =this.body1.position;
      var angle = this.body1.angle;
      if(this.body1.speed < 5) {
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        fill("violet");
        rect(0, 0, this.width, this.height);
        pop();
      } else {
        World.remove(world, this.body1);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255, this.Visibility);
        pop();
      }
    }

    score() {
      if(this.Visibility < 0 && this.Visibility > -105){
          score = score + 1;
      }
    }
  }