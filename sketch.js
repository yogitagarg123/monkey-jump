
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
 createCanvas(600,600);
 ground=createSprite(400,350,900,20);
  ground.velocityX=-4;
ground.x=ground.width/2;
  
  monkey=createSprite(100,330,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  var score=0;
  var survivaltime=0;
  
  FoodGroup=new Group() ;
  obstacleGroup=new Group();
  
}


function draw() {
  createCanvas(600,600);
background(225);
  
if(ground.x<0) {
  ground.x=ground.width/2;
} 
 
  if(keyDown("space") ) {
    monkey.velocityY = -12; }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
 food();
  spawnObstacles();
drawSprites();
 stroke("white"); 
  textSize(20); 
  fill("white");
  text("Score: "+ score, 500,50); 

  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX = 0; monkey.velocityY = 0; obstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1); 
    FoodGroup.setLifetimeEach(-1); }
  
  stroke("black"); 
  textSize(20);
  fill("black"); 
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50); 
}
function food(){
  if(frameCount%60===0){
 banana=createSprite(600,250,20,20);
banana.addImage(bananaImage);
    banana.scale=0.5;
    banana.depth=monkey.depth+1;
  banana.velocityX=-3;
  banana=Math.round(random(120,220));
FoodGroup.add(banana);
    banana.lifeTime=300;
  }  
  
}
function spawnObstacles() {
  if(frameCount % 300 === 0) { 
    obstacle = createSprite(800,320,10,40); 
    obstacle.velocityX = -6; 
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15; 
    obstacle.lifetime = 300; 
    obstaclesGroup.add(obstacle); } 
}
  
  
  
  
  










