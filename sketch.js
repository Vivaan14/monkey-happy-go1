//Global Variables
var bananaImage;
var obstacleImage;
var obstacleImage;
var score;
var backImage;
var backgrounds 
var monkeyImage;
var foodGroup;
var animalGroup;
var score;
var Monkey;
var ground;
var Banana;
var obstacleGroup,Obstacle;
var obstacleImage;
function preload(){
  bananaImage = loadImage("banana.png");
backImage = loadImage("jungle.jpg");
monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
obstacleImage =
loadImage("stone.png");
}


function setup() {
  createCanvas(600,400);
  backgrounds = createSprite(0,0,600,600);
  backgrounds.scale =1.5 ;
backgrounds.addImage(backImage);
  foodGroup = new Group();
  animalGroup=new Group();
  obstacleGroup = new Group();
   Monkey = createSprite(100,340,20,50);
 Monkey.addAnimation("running",monkeyImage);
  Monkey.scale = 0.15;
  animalGroup.add(Monkey);
  score = 0; 
  ground= createSprite(100,345,600,20);
  ground.visible = false; 
}


function draw(){
 background(150);
   if(keyDown("space")){
Monkey.velocityY = - 10;
}
if(frameCount%60===0){
   Banana = createSprite(400,250,20,20);
  Banana.addImage(bananaImage);
 Banana.scale = 0.10;
  foodGroup.add(Banana);
  Banana.velocityX = -3;
}
if(frameCount%120===0){
Obstacle = createSprite(600,300,20,20);
Obstacle.addImage(obstacleImage);
Obstacle.scale = 0.1;
Obstacle.velocityX = -6;
obstacleGroup.add(Obstacle);
}
   if(obstacleGroup.isTouching(animalGroup)){
  Monkey.scale = 0.2;
  }
    Monkey.velocityY = Monkey.velocityY + 0.8
  backgrounds.velocityX = -8
  if(backgrounds.x<0){
  backgrounds.x = backgrounds.width/2;
  }
if(foodGroup.isTouching(animalGroup)){
score = score+2;
foodGroup.destroyEach();
}
Monkey.collide(ground);
switch(score){
  case 10:Monkey.scale = 0.12;
    break;
    case 20 : Monkey . scale = 0.14;
    break;s
    case 30 : Monkey.scale = 0.16;
    break;
    case 40 : Monkey .scale = 0.18
    break;
    default:break;
}
  drawSprites();
  //textSize = 20
  stroke("white");
  fill("white");
 text("score:"+ score,500,50);
}