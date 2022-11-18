function setup() {
  createCanvas(windowWidth, windowHeight);
  let ulige = [];
  let lige = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      lige.push(i);
    } else {
      ulige.push(i);
    }
  }

  for (let i = 0; i < lige.length; i++) {
    text(
      lige[i],
      random(width / 2 + 100, width - 100),
      random(100, height - 100)
    );
  }

  for (let i = 0; i < ulige.length; i++) {
    text(ulige[i], random(100, width / 2 - 100), random(100, height - 100));
  }
}
