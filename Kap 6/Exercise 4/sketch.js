let x, y, w;

function setup() {
  createCanvas(400, 400);
  x = random(50, 350);
  y = random(50, 350);
  w = random(100, 150);
}

function draw() {
  background(220);
  ellipse(x, y, w);
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      if (Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2) < w / 2) {
        print("ok");
      }
    }
  }
}
