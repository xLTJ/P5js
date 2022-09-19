function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(mouseX<200){
    ellipse(200,200,50,50)
  }

  else{
    rect(175,175,50,50)
  }
}
