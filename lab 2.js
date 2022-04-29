function setup() {
  createCanvas(400, 400);
}
//For this assignment I created a "ufo" blasting off into space. The ufo includes a radar function as well.//

function draw() {
  background(40);
  
  //Base of ufo//
  push()
  colorMode(HSB);
  fill(300,80,50,20);
  ellipseMode(CENTER);
  ellipse(200,200,200,20);
  pop()
  
  //Top of ufo with a window for pilot//
  push()
  colorMode(RGB);
  beginShape()
  fill(30,250,30);
  vertex(200,170);
  vertex(230,190);
  vertex(170,190);
  beginContour();
  vertex(200,175);
  vertex(183,185);
  vertex(217,185);
  endContour();
  endShape(CLOSE);
  pop()
  
  //Bottom of ufo
  push()
  colorMode(RGB);
  fill('#00FFF0');
  arc(200,210,60,20,0,PI,CHORD);
  pop()
  
  //Stream of fire from blast off//
  push()
  colorMode(RGB);
  strokeWeight(0);
  beginShape()
  fill(150,30,30);
  vertex(200,230);
  vertex(210,250);
  vertex(210,270);
  vertex(190,270);
  vertex(190,250);
  endShape()
  pop()
  
  //Stream of fire from blast off//
  push()
  colorMode(RGB);
  strokeWeight(0);
  fill(220,60,60);
  quad(185,275,190,275,120,350,100,350);
  quad(197,275,202,275,210,350,190,350);
  quad(210,275,215,275,300,350,280,350);
  pop()
  
  //Radar pole on top of ufo//
  push()
  colorMode(RGB);
  strokeWeight(5);
  stroke(60,80,150);
  line(200,170,200,135);
  pop()
  
  //Radar receptor at top of radar pole//
  push()
  colorMode(RGB);
  fill(150,50,50);
  ellipse(200,135,10,10);
  pop()
  
  //Visual of radar pulsing surrounding area//
  push()
  colorMode(RGB);
  noFill();
  strokeWeight(4);
  stroke('#0F0');
  bezier(170,110,100,50,50,120,50,50);
  bezier(200,110,150,80,250,50,200,10);
  bezier(230,100,270,50,300,150,350,50);
  pop()
  
 
  
    
  
  
  
  
}