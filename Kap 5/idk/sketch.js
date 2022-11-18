function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  noStroke();
  let size = 50;
  let x = 50;
  let y = 50;
  let z = 50;
  function circles(z) {
    for (let i = 0; i < 4; i++) {
      for (let i = 0; i < 5; i++) {
        fill(random(255), random(255), random(255));
        ellipse(x, y, size);
        x += size;
      }
      y += size;
      x = z;
    }
  }

  for (let i = 0; i < 5; i++) {
    y = 50;
    circles(z);
    z += 300;
  }

  /*
  for (let i = 0; i < 4; i++) {
    for (let i = 0; i < 5; i++) {
      fill(random(256), random(256), random(256));
      ellipse(x, y, size);
      x += size;
    }
    y += size;
    x = 50;
  }
  */
}
