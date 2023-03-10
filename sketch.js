
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var com
var ground;

var top_wall;
var ball;
var ball2;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   
  
  

  //ground =new Ground(200,390,400,20);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);

  
  ball2 = Bodies.circle(90,150,20,ball_options);
  World.add(world,ball2);

   com = Matter.Constraint.create({
    pointA:{x:200, y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    lenght: 100,
    stiffness: 0.1
   })
   com2 = Matter.Constraint.create({
    bodyA:ball,
    pointA:{x:0, y:0},
    bodyB:ball2,
    pointB:{x:0,y:0},
    lenght: 100,
    stiffness: 0.00001
   })
   World.add(world,com2)
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);


  ellipse(ball.position.x,ball.position.y,20);
  //ground.show();
  push() 
  strokeWeight(2)
  stroke(155)
  line(com2.pointA.x,com2.pointA.y,ball.position.x,ball.position.y)
  pop()
  Engine.update(engine);

  ellipse(ball2.position.x,ball2.position.y,20);
  //ground.show();
  push() 
  strokeWeight(2)
  stroke(155)
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y)
  pop()
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:0});
}
  


