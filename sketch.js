const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
var engine, world;
var box1;
var platform;
var  slingshot;
function setup() {
  createCanvas(1600,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1600,100);
  

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);  
  box3 = new Box(200,500,50,50);
  box4 = new Box(810,260,300, PI/2);
  box7 = new Box(800,240,300, PI/2);

  box5 = new Box(700,240,70,70);
  box6 = new Box(920,240,70,70);
  slingshot = new Slingshot(box3.body,{x:200, y:500});
  
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  noStroke();
  textSize(35);
  fill("white");
  text("SCORE: "+score,500,50);
  box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box7.display();
    box5.display();
    box6.display(); 
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box7.score();
    box5.score();
    box6.score(); 
    slingshot.display();
   
    
  
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(box3.body);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(box3.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}