//create two rectangles
//f, m
//paint them crimson
//make the m rectangle move
//condition for isTouching- colors change for both rectangles to your fav color
var f,m;
var f1,m1;

function setup() {
  createCanvas(800,400);
 
  f = createSprite(60,200,40,70);
  f.shapeColor = "crimson";

  m = createSprite(120,200,70,40);
  m.shapeColor = "crimson";

  f1 = createSprite(400,40,40,40);
  f1.shapeColor = "crimson";
  f1.velocityY= 3;

  m1 = createSprite(400,400,40,40);
  m1.shapeColor = "crimson";
  m1.velocityY=-3;


}

function draw() {
  background(255,255,255);  

if (m.x-f.x < m.width/2+f.width/2
  &&f.x-m.x < m.width/2+f.width/2
  &&m.y-f.y< m.height/2+f.height/2
  &&f.y-m.y < m.height/2+f.height/2){
f.shapeColor = "blue";
m.shapeColor = "black";

}
else{
f.shapeColor = "crimson";
m.shapeColor = "crimson";
}

m.x = World.mouseX;
m.y = World.mouseY;

if(m1.y-f1.y< m1.height/2+f1.height/2
    &&f1.y-m1.y < m1.height/2+f1.height/2){
m1.velocityY= m1.velocityY*-1;
f1.velocityY= f1.velocityY*-1;
  }


  drawSprites();


}