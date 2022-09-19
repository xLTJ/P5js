function setup() {
  createCanvas(400, 400);
  strokeWeight(10)
}

function draw() {
  background(220);

  //til at checke koordinater
  if (mouseIsPressed){
    if (mouseButton == LEFT) {
      print(mouseX,mouseY);
    }
  }

  if(keyIsPressed) {
    if(key == 'a') {
      line(192,54,79,296);
      line(192,54,321,299);
      line(125,196,264,189);
    }
    
    if(key == 'v') {
      line(195,298,325,57);
      line(195,298,72,58);
    }
  }
}
