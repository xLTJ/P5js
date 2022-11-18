function setup() {
  createCanvas(windowWidth, windowHeight);
  let navneListe = [
    "Lucinda",
    "Noble",
    "Robby",
    "Wilford",
    "Cyrus",
    "Gilbert",
    "Elwood",
    "Liz",
    "Cathleen",
    "Wendy",
  ];
  for (let i = 0; i < navneListe.length; i++) {
    textSize(navneListe[i].length * 10);
    text(navneListe[i], random(100, width - 100), random(100, height - 100));
  }
}
