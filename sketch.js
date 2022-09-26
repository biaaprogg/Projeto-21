var ball
var ground
var leftside
var rightside

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

var options = {
isStatic: false, restitution: 0.3, fiction: 0, density: 1.2
}
	
ball = Bodies.circle(260,100,20, options)
World.add(world, ball)

ground = Bodies.rectangle(width/2, 670, width, 20)
World.add(world, ground)

leftside = Bodies.rectangle(1100,600,20,120)
World.add(world, leftside)

rightside = Bodies.rectangle(1350,600,20,120)
World.add(world, rightside)

	Engine.run(engine);
  
}


function draw() {
	var groundPos= ground.position; push()
	translate(groundPos.x, groundPos.y);
	rectMode(CENTER)
	strokeWeight(4);
	fill(255,255,0)
	rect(0,0,this.w, this.h);
	pop()

  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



