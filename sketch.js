var box1;
var box2;

function setup() {
  createCanvas(400,400);

  box1 = createSprite(50,200, 50,50)
  box2 = createSprite(300,300,50,50)
}

function draw() {
  background(30);

  if(keyIsDown(LEFT_ARROW)){
    box1.velocityX = -3
  }
  
  if(keyIsDown(LEFT_ARROW)){
    box2.velocityX = -3
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    box1.velocityX = 3
  }
  if(keyIsDown(RIGHT_ARROW)){
    box2.velocityX = 3
  }

  drawSprites()
}






