function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  let x;
  let y;
  let w;

  for (i = 0; i < 10; i++) {
    x = random(50, windowWidth - 50);
    y = random(50, windowHeight - 50);
    w = random(50, 100);
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(x, y, w);
  }
}
