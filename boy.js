class Boy {
    constructor(x,y,width,height){
        var options={
        isStatic:true,
        restitution:0,
        friction:1,
        
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("images/boy.png");
      
      
    }
    display(){
      image(this.image, 200, 315);
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      
    }
    }
