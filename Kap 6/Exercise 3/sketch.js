let circleNumb = 0;

function setup() {
  let w = windowWidth;
  let h = windowHeight;

  createCanvas(w, h);

  let circle1 = drawCircle(100, 130, 50);
  let circle2 = drawCircle(170, 130, 50);
  let circle3 = drawCircle(600, 300, 50);
  let circle4 = drawCircle(random(0, w), random(0, h), 50);

  circleOverlap(circle1, circle2);
  circleOverlap(circle1, circle3);
  circleOverlap(circle1, circle4);
}

function circleOverlap(circle1, circle2) {
  if (
    Math.sqrt((circle2[0] - circle1[0]) ** 2 + (circle2[1] - circle1[1]) ** 2) <
    circle1[2] + circle2[2]
  ) {
    print(
      "circle " +
        circle1[3] +
        " and " +
        "circle " +
        circle2[3] +
        " overlap: " +
        "true"
    );
    print(
      "afstand = " +
        Math.sqrt(
          (circle2[0] - circle1[0]) ** 2 + (circle2[1] - circle1[1]) ** 2
        )
    );
  } else {
    print(
      "circle " +
        circle1[3] +
        " and " +
        "circle " +
        circle2[3] +
        " overlap: " +
        "false"
    );
    print(
      "afstand " +
        Math.sqrt(
          (circle2[0] - circle1[0]) ** 2 + (circle2[1] - circle1[1]) ** 2
        )
    );
  }
}

function drawCircle(x, y, r) {
  circleNumb += 1;
  ellipse(x, y, r * 2);
  text(circleNumb, x, y);
  return [x, y, r, circleNumb];
}
