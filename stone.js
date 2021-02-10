class Stone {
    constructor(xPos, yPos, radius){
        var options={
         isStatic:false,
         restitution: 0,
         friction:1,
         density:1.2,

        }
        this.xPos=xPos;
        this.yPos=yPos;
        this.radius=radius;
        this.body=Bodies.circle(this.xPos,this.yPos,this.radius/2,options);
        World.add(world,this.body);
        this.image = loadImage("images/stone.png")
        
    }
    display(){
        image(this.image, stone.body.position.x, stone.body.position.y);
        var stonePos=this.body.position;
        //rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,0)
        push();
        translate(stonePos.x, stonePos.y);
        circle(0,0,this.radius);
        pop();
        
    }
};  

