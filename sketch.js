
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
var banana
var obstacle
var Gamestate=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  console  .log(ground.x)
  bananaGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
background(255)
  if(Gamestate===0){
      if(ground.x<0){
     ground.x=ground.width/2;
     }
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  spawnbanana()
  spawnobstacle()
  }
  if(monkey.isTouching(obstacleGroup)){
     Gamestate=1
    monkey.velocityY=0
    ground.velocityX=0
    obstacleGroup.setVelocityXEach(0)
    bananaGroup.setVelocityXEach(0)
    obstacleGroup.setLifetimeEach(-1)
    bananaGroup.setLifetimeEach(-1)
     }
monkey.collide(ground);
  drawSprites();
}
function spawnbanana(){
  if(frameCount%100===0){
    banana=createSprite(400,Math.round(random(100,250)))
    banana.addImage(bananaImage)
    banana.velocityX=-3
    banana.scale=0.1  
    banana.lifetime=100
    bananaGroup.add(banana);
}
}
function spawnobstacle(){
  if(frameCount%100===0){
    obstacle=createSprite(400,330)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-3
    obstacle.scale=0.1
    obstacle.lifetime=100
    obstacleGroup.add(obstacle);
    
  }
}




