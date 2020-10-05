
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ball = new PaperClass(200,450,20);
	
	log1 = new Box(590,610,20,100);
	log2 = new Box(670,650,200,20);
	log3 = new Box(750,610,20,100);
	
	ground = new Ground(400,665,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  log1.display();
  log2.display();
  log3.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== "UP_ARROW");
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  }
  
 

