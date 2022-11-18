function setup() {
  createCanvas(windowWidth, windowHeight);
  let x;
  let y;
  let i = 0;
  while (i < 100) {
    x = random(0, windowWidth);
    y = random(0, windowHeight);

    if (i % 2 == !0) {
      fill(0, 0, 255);
      text(i, x, y);
    }
    i++;
  }
}
