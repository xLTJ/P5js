function setup() {
  createCanvas(windowWidth, windowHeight);
  let x;
  let y;
  for (i = 0; i < 100; i++) {
    x = random(0, windowWidth);
    y = random(0, windowHeight);
    if (i % 2 == 0) {
      fill(255, 0, 0);
      text(i, x, y);
    }
  }
}
