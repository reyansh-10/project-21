var bullet,wall;
var speed,weight,thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 20);
  wall=createSprite(1320,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);
    if(wall.x-bullet.x<(wall.width+bullet.width)/2){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage<100){
    bullet.shapeColor=color(0,255,0);
    }  
     if(damage>10){
      bullet.shapeColor=color(255,0,0);
    } 
  }  
  drawSprites();
}