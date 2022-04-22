var angulo = 30;
var barra,pared,pared2,desconocido;
/*POP = Confuguracion o posicion anterior
PUSH nueva configuracion o nueva posición

/////

push
translate
rotate
rect
pop*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  

   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   barra = Bodies.rectangle(100,300,100,20,ground_options);
  World.add (world,barra);

  pared = Bodies.rectangle(0,height / 2, 20,height,ground_options);
  World.add (world,pared)
  
  pared2 = Bodies.rectangle(width - 10, height / 2,20,height,ground_options);
  World.add (world,pared2);

  //desconocido = Bodies.rectangle (100,200,100,20,ground_options);
  //World.add (world,desconocido);

   btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(fuerza);

  ground = Bodies.rectangle(width / 2,400,width,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
 
  Matter.Body.rotate (barra,angulo);
  angulo = angulo + 0.1;
  
  push();
  translate (barra.position.x,barra.position.y,angulo);
  rotate (angulo);
  rect(0,0,100,20);
  pop();

  rect (pared.position.x,pared.position.y,20,height);

  rect (pared2.position.x,pared2.position.y,20,height);

  ellipse(ball.position.x,ball.position.y,20);

  rect(ground.position.x,ground.position.y,width,20);
 
console.log(ground.position.y);

  
  
}

function fuerza()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  