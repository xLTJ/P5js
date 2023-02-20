function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawCircle(50, 50, 50);
}

function drawCircle(x, y, r) {
  fill("yellow");
  ellipse(x, y, r * 2);
}
