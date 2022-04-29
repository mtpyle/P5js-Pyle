//variables//
var x=20
var y=20
var x2=180
var y2=220
var x3=100
var circleA=70
var circleB=140
var circleC=100
var circleC2=140
var pressed=0
var pressedState=0

//franmerate and canvas size//
function setup() {
  createCanvas(600,600);
  frameRate(30);
}
//if statements mouseclick changes background and text once pizza is off page//
function draw() {
  if(pressedState == 1){
    background(10);
  if(pressedState == 2)
    background(60);
  } else {
    background(220);
  if(x>599){
    textSize(50)
    fill(200,20,20)
    text("REFRESH PAGE",100,300);
  }
  
//tried to use while loop to do text but it crashed and i lose all my work and had to restart the entire lab. Not sure why I am not doing it correctly but every way ive tried crashed my page//
    //while(x>599){   
  //textSize(50);
  //text("RESTART",100,300);
} 
  //slice of pizza//
  triangle(x,y,x2,y,x3,y2);
  colorMode(RGB);
  fill(200,20,20);
  x++;
  y++;
  x2++;
  y2++;
  x3++;
  
  //pep circles//
  ellipse(circleA,circleA,30,30)
  fill('#fc0');
  circleA++;
  
  ellipse(circleB,circleA,30,30)
  fill(200,20,20);
  circleB++;
  
  ellipse(circleC,circleC2,30,30);
  fill('#fc0');
  circleC++;
  circleC2++;
}
//defining mouse click functions//
function mousePressed(){
  pressed = pressed+1;
  pressedState = (pressed % 3);
}