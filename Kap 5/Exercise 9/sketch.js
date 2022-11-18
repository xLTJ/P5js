function setup() {
  createCanvas(windowWidth, windowHeight);
}

let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;

function draw() {
  background(200);
  for (i = 0; i < 10; i++) {
    line(x1, y1 + i * 10, windowWidth, y1 + i * 10);
  }

  for (i = 0; i < 10; i++) {
    line(x2 + i * 10, y2, x2 + i * 10, windowHeight);
  }
  y1++;
  x2 += 2;
}
