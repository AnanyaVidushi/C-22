const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var myEngine,myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
    myWorld = myEngine.world;
var options={
  isStatic:true
}
    

    ground=Bodies.rectangle(200,380,400,10,options);
    World.add(myWorld,ground);

    var options1 = { 
      restitution:1
    }

ball=Bodies.circle(100,100,20,options1)
  World.add(myWorld,ball);

}

function draw() {
  background(0);
  Engine.update(myEngine);
  rectMode (CENTER);
  fill ("lightgreen")
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}