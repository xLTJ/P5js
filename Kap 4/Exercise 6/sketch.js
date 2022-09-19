function setup() { 
  createCanvas(120, 120); 
  strokeWeight(30); 
  } 
  function draw() { 
   background(204); 
   stroke(102); 
   line(40, 0, 70, height); 
   if (mouseIsPressed) { //hvor kommer denne variable fra?
    if (mouseButton == LEFT) {  // og hvad med den?
     stroke(255); 
    } 
    else { 
     stroke(0); 
    } 
    line(0, 70, width, 50);
    } 
  } 