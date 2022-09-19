let y;
let ySpeed = 3

function setup() {
  createCanvas(400, 400);
  y = height/2;
}

function draw() {
  background(200)
  ellipse(width / 2, y, 50, 50);
  if (y < 25 || y > height - 25){
    ySpeed *= -1;
  }

  y += ySpeed;
}
