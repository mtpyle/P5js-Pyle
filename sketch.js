//declaring variables//
var circleX;
var circleY;
var dcenter;
var circleZ;
var leftwall;
var rightwall;
function setup() {
  createCanvas(500,500);
 //initializing variables//
  circleX=50;
  circleY=circleX+400;
  //distance from center point to cursor//
  dcenter=dist(width/2,height/2,mouseX,mouseY);
  //left and right walls//
  leftwall=50;
  rightwall=leftwall*9;
  //spend the last 3 hours trying constrain min and max and couldnt figure out why it wasn't working and event tried copying the p5 tutorial and nothing worked and its already 5pm on thursday//
  circleZ=constrain(mouseX,leftwall,450);
  //lowered frame rate to give bubbles more time on screen//
  frameRate(20);
}

function draw() {
  background(220);
 //moving circles//
  ellipse(circleX,100,50,50)
  circleX++;
  ellipse(circleY,400,50,50);
  circleY--;
 //circle moves with cursor//
  ellipse(mouseX-50,mouseY-50,50,50);
  print(dcenter);
  ellipse(circleZ,250,50,50);
  circleZ++;
  //going to be x contrain walls//
  push()
  stroke(150)
  line(leftwall,0,leftwall,height);
  line(rightwall,0,rightwall,height);
  pop()
}
//chages colors with mouse click//
function mousePressed(){
  fill(0,millis()%256,100);
}
//changes canvas color with keystroke//
function keyPressed(){
  background(millis()%256,0,0);
}