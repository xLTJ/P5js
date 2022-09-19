let x; 
let y; 
let xspeed; 
let yspeed; 
let ellipseW;
let ellipseH;
let w = window.innerWidth;
let h = window.innerHeight;

function setup() { 
  createCanvas(w, h);
  x = width/2
  y = height/2
  xspeed = 5; 
  yspeed = 0.5*xspeed; 
  ellipseW = 50;
  ellipseH = 50;
} 

function draw() { 
  if (x<ellipseW/2){
    xspeed/=-random(0.5,1.5)
  }
  if (x>w-ellipseW/2){
    xspeed/=-random(0.5,1.5)
  }
  if (y<ellipseH/2){
    yspeed/=-random(0.5,1.5)
  }
  if (y>h-ellipseW/2){
    yspeed/=-random(0.5,1.5)
  }
  if (xspeed> 50){
    xspeed = 5
  }
  if (xspeed< -50){
    xspeed = -5
  }
  if (yspeed> 50){
    yspeed = 5
  }
  if (yspeed< -50){
    yspeed = -5
  }
  background(220);
  ellipse(x, y, 50, 50); 
  x+=xspeed; 
  y+=yspeed; 
  }
