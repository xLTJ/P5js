function setup() {
  createCanvas(600, 600);
  background(220);
}

function draw() {
  if(keyIsPressed === true){
    if (keyCode === 70){
     rect(mouseX,mouseY,30,30);
    }
    else if (keyCode === 67){
     circle(mouseX,mouseY,30);
     }
    else if (keyCode === 69){
      ellipse(mouseX,mouseY,30,60)
    }
  }
}
