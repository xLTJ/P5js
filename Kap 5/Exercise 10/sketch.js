function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(20);

  let x;
  let y;

  for (i = 0; i < 10; i++) {
    x = random(20, windowWidth - 20);
    y = random(20, windowHeight - 20);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    point(x, y);
  }
}
