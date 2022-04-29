//variables//
var x,y;
var xspeed;
var a=50
var b=300
var c=130
var d=350
var e=300
var f=350
function setup() {
  createCanvas(400, 400);
  x=80;
  y=130;
  xspeed=3;
}

function draw() {
  background(190);

  //adding the variables to draw function so that they are repeatewd throughout the sketch//
  display();
  movement();
  buttons();
  }
  
function display(){
  //television shapes the display function includes all of the shapes that make up the televisons set as well as the shape of the ball moving on screen//
  
  //shape of tv screen and anttenna//
  rect(60,60,300,200);
  line(180,60,100,10);
  line(220,60,300,10);
  fill(140);
  
 //shape creating the base of the tv set// 
  push()
  beginShape();
  fill(20);
  vertex(220,260);
  vertex(280,300);
  vertex(120,300);
  vertex(180,260);
  endShape(CLOSE);
  pop();
  //moving shape in TV//
  ellipse(x,y,20,20);
  
}
  
function movement(){
  //the movement function includes all of the conditionals that create the wrap around movement as well as the movement conditionals related to the buttons and the speed of the ball//
   
  //conditional creating wrap around movement for the ellipse//
  if(x+60>width){
    x=70;
   }
    x+= xspeed;
     
  //conditional statement creating the changes when the rectangle button is pressed//   
  if(mouseIsPressed){
    if(mouseX>e-50 && mouseX <e+50 && mouseY>f-50 && mouseY <f+50){
      x-=2*xspeed
      fill(220);
    }
     }
     
  //conditional statment creating the changes that occur when the ellipse button is pressed//
  if(mouseIsPressed){
    if(mouseX>a && mouseX <a+c && mouseY>b && mouseY <b+d){
      x-=2*xspeed
      fill(30);
    }
     }
    
  
  
}
  
function buttons(){
   //the buttons functions includes the shapes and design of the buttons themselves as well as the text related to the buttons//
  
  //rectangle button//
  rect(a,b,c,d);
  push();
  fill(0);
  s= "Press Me";
  text(s,90,360)
  pop();
  
  //ellipse button//
  ellipse(e,f,100,100);
  push();
  fill(0)
  s= "Press Me"
  text(s,e-25,f)
  pop();
  

}