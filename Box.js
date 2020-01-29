class Box{
    constructor(x, y, width, height,r,g,b,angle) {
        var options = {
            'restitution':0.0,
            'friction':1.0,
            'density':10.
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
        this.r = r;
        this.g = g;
        this.b = b;
      }
      display(){

        rgbcount = 1;
        var angle = this.body.angle;
        push();
        strokeWeight(1);
        fill(this.r,this.g,this.b);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0,0,this.width,this.height );

        pop();
      }
}