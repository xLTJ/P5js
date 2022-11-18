function setup() {
  createCanvas(windowWidth, windowHeight);
  let x;
  let y;
  let w;
  let i = 0;
  while (i < 10) {
    x = random(50, windowWidth - 50);
    y = random(50, windowHeight - 50);
    w = random(50, 200);
    fill(random(0, 255), random(0, 255), random(0, 255));
    rect(x, y, w, w / 1.5);
    i++;
  }
}
