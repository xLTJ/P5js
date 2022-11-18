function setup() {
  let x = windowWidth / 2;
  let y = windowHeight / 2;

  createCanvas(windowWidth, windowHeight);
  background(200);
  for (i = 0; i < 30; i++) {
    fill(40 + i * 10);
    ellipse(x, y, 700 - i * 20);
    print(i);
  }
}
