function setup() {
  createCanvas(windowWidth, windowHeight);
  let x;
  let y;

  for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      x = random(50, windowWidth / 2 - 50);
      y = random(50, windowHeight - 50);
    } else {
      x = random(windowWidth / 2 + 50, windowWidth - 50);
      y = random(50, windowHeight - 50);
    }

    let r = random(100);
    circle(x, y, r);
    text(i, x, y);
  }
}
