function setup() {
  createCanvas(1980, 1200);
  background(255);
}

function draw() {
  if(mouseIsPressed){
    if(mouseButton == LEFT){
      stroke(0)
      strokeWeight(10);
      line(mouseX,mouseY,pmouseX,pmouseY)
    }
    else if(mouseButton == RIGHT){;
      strokeWeight(100)
      stroke(255)
      line(mouseX,mouseY,pmouseX,pmouseY)

    }
    
  }
}
