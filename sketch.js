
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(100,100,20,20);
	stone = new Stone(200,100,20,20);
	rubber = new Rubber(230,180,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  stone.display();
  rubber.display();
  drawSprites();
 
}



