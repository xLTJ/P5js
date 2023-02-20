function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  trekant(70, 70, 100, 200);
}

function trekant(a, b, c, start) {
  //let A = Math.cos(((b ** 2 + c ** 2 - a ** 2) / 2) * b * c);
  //let B = Math.cos(((c ** 2 + a ** 2 - b ** 2) / 2) * c * a);
  let C = rtg(Math.cos(((a ** 2 + b ** 2 - c ** 2) / 2) * a * b));
  let bY = b / rtg(Math.cos(180 - C));
  let bX = Math.sqrt(b ** 2 - bY ** 2);
  print("bY = " + bY);
  print("BX = " + bX);
  print("C = " + C);
  triangle(start, start, start + a, start, start + a + bX, start - bY);
}

function rtg(radianer) {
  return radianer * 57.2958;
}
