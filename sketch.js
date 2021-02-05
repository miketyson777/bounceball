const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_option= {
    "restitution": 1.0
  }

  ball = Bodies.circle(200,200,20,ball_option);
  World.add(world,ball);

  var ground_option = {
    "isStatic": true
  }

  ground = Bodies.rectangle(200,375,400,50,ground_option);
  World.add(world,ground);
  
}

function draw() {
  background(0);  
  Engine.update(engine);

  ellipseMode(RADIUS);
  fill (255);
  ellipse(ball.position.x,ball.position.y,20);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);
}