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
 //television shapes//
  rect(60,60,300,200);
  line(180,60,100,10);
  line(220,60,300,10);
  fill(140);
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
  //speed of ball//
  x+= xspeed;
  
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
  
  
  //if rect button is pressed background turns black and ball changes direction until button unpressed//
  if(mouseIsPressed){
    if(mouseX>a && mouseX <a+c && mouseY>b && mouseY <b+d){
      x-=2*xspeed
      fill(30);
    }
  }
  
  //if ellipse button is pressed background turns white and ball changes direction until unpressed//
  if(mouseIsPressed){
    if(mouseX>e-50 && mouseX <e+50 && mouseY>f-50 && mouseY <f+50){
      x-=2*xspeed
      fill(220);
    }
  }
  
  //wrap around movement for ellipse//
  //Tried to do the same for when it moves left with the button pressed but the ellipse would get stuck//
  if(x+60>width){
    x=70;
  }
  
  
  
}