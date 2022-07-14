class Boat {
    constructor(x, y, width, height, boatPos) {
      var options = {
        restitution:1,
        density:1,friction:1
      };
      this.image = loadImage("assets/boat.png")
      this.width = width;
      this.height = height;
      this.boatPosition = boatPos;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, this.boatPosition, this.width, this.height);
      pop();
    }
  }