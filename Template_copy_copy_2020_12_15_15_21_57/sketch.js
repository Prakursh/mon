

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 500);

  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,1200,20);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  score = 0;
  survivalTime = 0;
  
  fGroup = createGroup();
  obstaclesGroup = createGroup();
  
}


function draw() {
 background(180);
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+ survivalTime, 100,50);
  
   
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
  
 monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  Obstacles();
  
  drawSprites();
  
}


function food(){
  
  if(frameCount%80 === 0){
    var ban = createSprite(390,Math.round(random(120,200)),20,20)
    ban.addImage(bananaImage) ;  
    ban.scale = 0.1;
    ban.velocityX = -7;
    ban.lifetime = 150;
   fGroup.add(ban);
  }
  
  
  
  
}

function Obstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,330,10,40);
    obstacle.addImage( obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 
 
 }
 }







