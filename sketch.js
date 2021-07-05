var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function createApples() {
  apples = createSprite(random(50, 350), 40, 10, 10)
  apples.addImage(applesImg);
  apples.scale = 0.1
  apples.velocityY = 4
  apples.lifetime = 50;
  
  
}

function createLeaves() {
  leaves = createSprite(random(50, 350), 40, 10, 10)
  leaves.addImage(leavesImg);
  leaves.scale = 0.1
  leaves.velocityY = 4
  leaves.lifetime = 50;
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2))

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
      
    } else {
      createLeaves();
      
    }
    
  }
    
    

  rabbit.x = mouseX;

  drawSprites();
}