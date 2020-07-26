class Block {
    constructor(x, y, width, height) {
      var options = {
         //isStatic : true,
        'restitution':0.4,
        'friction':5,
        'density':1.0
      }
      this.block = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world,this.block);
    }
    
    display(){
      var pos =this.block.position;
      
      rectMode(CENTER);

      fill(rgb(248,248,0));

      strokeWeight(4);
      stroke("black");

      rect(pos.x,pos.y,this.width, this.height);
    }
  };
  