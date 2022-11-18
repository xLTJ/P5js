function setup() {
  createCanvas(800, 800);
  background(0);

  let x = 0;
  let y = 0;

  for (i = 0; i < 8; i++) {
    for (o = 0; o < 4; o++) {
      rect(x, y, 100);
      x += 200;
      print("x = " + x);
      print("y = " + y);
    }

    x = 100;
    y += 100;

    for (o = 0; o < 4; o++) {
      rect(x, y, 100);
      x += 200;
    }

    x = 0;
  }
}
function draw() {
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      print(mouseX, mouseY);
    }
  }
}
