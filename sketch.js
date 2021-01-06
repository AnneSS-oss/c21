var fixedRect, movingRect;
var object3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object3 = createSprite(200,400,30,30);
  object3.shapeColor = "purple";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect,object3)) {
    
  
  
    movingRect.shapeColor = "red";
    object3.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    object3.shapeColor = "purple";
  }
  drawSprites();
}
function isTouching(object1,object2) {

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {

      return true;
    }

  else {
    return false;
  }

}