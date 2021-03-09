var trex , trex_running , trex_collided , ground , invisibleGround , groundimage; 

var CloudsGroup , CloudImage ;
var ObstacleGroup , Obstacle1 , Obstacle2 , Obstacle3 , Obstacle4 , Obstacle5 , Obstacle6

function preload () {
  trex_running = loadAnimation ("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage ("trex_collided.png");
  groundimage = loadImage ("ground2.png");
  CloudImage = loadImage ("cloud.png");
  Obstacle1 = loadImage("obstacle1.png");
   Obstacle2= loadImage("obstacle2.png");
   Obstacle3= loadImage("obstacle3.png");
   Obstacle4= loadImage("obstacle4.png");
   Obstacle5= loadImage("obstacle5.png");
   Obstacle6 = loadImage("obstacle6.png");
}


function setup() {
  createCanvas(600, 200);
  
  trex = createSprite (50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,10);
  ground.addImage("ground", groundimage);
  ground.x = ground.width / 2;
  ground.velocityX = -2;
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  CloudsGroup = new Group ();
  
  ObstacleGroup = new Group ();
  
}

function draw() {
  background(180);
  
  if (keyDown("space")){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.8
  if (ground.x<0){
    ground.x = ground.width / 2;
    
  }
  trex.collide(invisibleGround);
  
SpawnClouds ();
  SpawnObstacles ();

  drawSprites()
}

function SpawnClouds (){
  if (frameCount % 60 === 0){
  var Cloud = createSprite (600 ,120 ,40 ,10);
   Cloud.y = Math.round (random(80,120));
  Cloud.addImage (CloudImage);
    Cloud.velocityX = -3;
    Cloud.depth = trex.depth ;
    trex.depth = trex.depth + 1 ;
    Cloud.scale = 0.5 ; 
    Cloud.lifetime =  134 ; 
    CloudsGroup.add(Cloud) ;
}
}

function SpawnObstacles(){
  if (frameCount % 60 === 0){
    var Obstacle = createSprite (600 , 165,10 , 40) ;
    Obstacle.velocityX = -4;
    var randomNum = Math.round (random(1 , 6));
    switch(randomNum){
      case 1:Obstacle.addImage(Obstacle1);
        break;
        
        case 2:Obstacle.addImage(Obstacle2);
        break;
        
        case 3 :Obstacle.addImage(Obstacle3);
        break;
        
        case 4:Obstacle.addImage(Obstacle4);
        break;
        
        case 5 :Obstacle.addImage(Obstacle5);
        break;
        
        case 6 :Obstacle.addImage(Obstacle6);
        break;
        default:break;
    }
    Obstacle.scale = 0.5;
    Obstacle.lifetime = 150;
    ObstacleGroup.add(Obstacle
);
  }
}