const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand1, ground1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18;
var polygon1, slingShot;
var score = 0;
var backgroundImg;
var gameState = "on slingshot";
var bg = "Sprites/bg.jpg";

function preload() {
  getBackgroundImg();
  backgroundImg = loadImage("Sprites/bg.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);

  stand1 = new Ground(390,height - 100,200,20);
  stand2 = new Ground(650,height - 200,200,20);
  ground1 = new Ground(400,height + 50,800,20);

  box1 = new Box(330, 235, 30, 40);
  box2 = new Box(360, 235, 30, 40);
  box3 = new Box(390, 235, 30, 40);
  box4 = new Box(420, 235, 30, 40);
  box5 = new Box(450, 235, 30, 40);

  box6 = new Box(360, 195, 30, 40);
  box7 = new Box(390, 195, 30, 40);
  box8 = new Box(420, 195, 30, 40);

  box9 = new Box(390, 185, 30, 40);

  box10 = new Box(590, 135, 30, 40);
  box11 = new Box(620, 135, 30, 40);
  box12 = new Box(650, 135, 30, 40);
  box13 = new Box(680, 135, 30, 40);
  box14 = new Box(710, 135, 30, 40);

  box15 = new Box(620, 85, 30, 40);
  box16 = new Box(650, 85, 30, 40);
  box17 = new Box(680, 85, 30, 40);

  box18 = new Box(650, 55, 30, 40);

  polygon1 = new Polygon(100, 280, 40);

  slingShot = new SlingShot(polygon1.body, {x: 150, y: 150});
}

function draw() {
  if(backgroundImg) {
    background(backgroundImg);
}
  
  noStroke();
  textSize(20);
  fill("white");
  text("SCORE :" + score, 650, 40);
  text("Press the space key for another chance!", 400, 380);

  Engine.update(engine);

  stroke("black");

  box1.score();
  box1.display();
  box2.score();
  box2.display();
  box3.score();
  box3.display();
  box4.score();
  box4.display();
  box5.score();
  box5.display();
  box6.score();
  box6.display();
  box7.score();
  box7.display();
  box8.score();
  box8.display();
  box9.score();
  box9.display();
  box10.score();
  box10.display();
  box11.score();
  box11.display();
  box12.score();
  box12.display();
  box13.score();
  box13.display();
  box14.score();
  box14.display();
  box15.score();
  box15.display();
  box16.score();
  box16.display();
  box17.score();
  box17.display();
  box18.score();
  box18.display();
  stand1.display();
  stand2.display()
  ground1.display();
  polygon1.display();
  slingShot.display();
}

function mouseDragged(){
  if(gameState!=="launched"){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased() {
  slingShot.fly();
  gameState = "launched";
}

function keyPressed() {
  if(keyCode === 32) {
      slingShot.attach(polygon1.body);
      gameState = "on slingshot";
  }
}

async function getBackgroundImg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11, 13);
  if(hour>=06 && hour<=19){
      bg = "Sprites/bg.jpg"
  } else {
      bg = "Sprites/bg1.jpg"
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}