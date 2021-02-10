
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground, tree, mango1, mango2, mango3, boy, string,stone;
var detectCollision;

function preload()
{
	//boyImage = loadImage("images/boy.png")

}

function setup() {
	var canvas = createCanvas(2000,400);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20);
	tree = new Tree(600, 300,100,200);
	mango1 = new Mango(600, 225, 50); 
	mango2 = new Mango(650, 150, 50); 
	mango3 = new Mango(550, 150, 50);
	boy = new Boy(200, 315, 100, 150);
	stone = new Stone(100, 50, 40, 40);
	string1 = new String(stone.body,{x:200, y:210});
	
    var options={
		bodyA:stone.body,
		bodyB:boy.body,
		stiffness:0.04,
		length:10,
	}
	var string = Constraint.create(options);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  //detectCollision(stone,mango1)
  //detectCollision(stone,mango2)
  //detectCollision(stone,mango3)
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  boy.display();
  stone.display();
  string1.display();

  strokeWeight(10)
  line(stone.body.position.x, stone.body.position.y, boy.body.position.x, boy.body.position.y);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string1.fly();
}

function keyPressed(){
    if(keyCode===32){
		Matter.Body.setPosition(stone, {X:235, y: 340});
		string1.attach(stone.body);
	}
	
//function detectCollision (lMango, lStone){
	//mangoBodyPosition=lMango.body.position;
	//stoneBodyPosition=lStone.body.position;

	//var distance=dist(StoneBodyPosition.x, StoneBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y );
	//if(distance<=lMango.r+lStone.r)
	//{
		//Matter.Body.setStatic(lMango.body, false);
	//}
		
//}
}


