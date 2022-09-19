function setup() {
  createCanvas(600, 600);
  background(220);
}

function draw() {
  if(mouseIsPressed == true){
    if(mouseButton == LEFT){
      ellipse(mouseX,mouseY,50,50);
    }
    else if(mouseButton == RIGHT){
      rect(mouseX,mouseY,50,50);
    }
  }
}
