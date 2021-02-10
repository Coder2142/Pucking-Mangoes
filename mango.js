class Mango {
    constructor(xPos, yPos, radius){
        var options={
         isStatic:true,
         restitution: 0,
         friction:1,
        }
        this.xPos=xPos;
        this.yPos=yPos;
        this.radius=radius;
        this.body=Bodies.circle(this.xPos,this.yPos,this.radius/2,options);
        World.add(world,this.body);
        this.mango=loadImage("images/mango-75x75.png")
        
    }
   
    display(){
        image(this.mango, 525, 110);
        image(this.mango, 575, 185);
        image(this.mango, 625, 110);
        this.mango.depth=mango3.depth+1;
        
        var mangoPos=this.body.position;
        //rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,0)
        push();
        translate(mangoPos.x, mangoPos.y);
        circle(0,0,this.radius);
        pop();
        
    }
};  
