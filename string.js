class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    fly(){
        this.string.bodyA = null;
    }
   
        attach(body){
            this.string.bodyA = body;
        }
    

    

    display(){
        //image(this.constraint,200,20);
        //image(this.constraint,170,20);
        if(this.string.bodyA){
            var pointA = this.string.bodyA.position;
            var pointB = this.pointB;
            push();
            pop();
        }
    }
    
}