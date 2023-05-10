function preload() {
  tileSet = loadImage(
    "https://github.com/xLTJ/P5js/blob/main/Kap%2010/Exercise%2019/tiles.png"
  );
}
let tileSetCols = 24;
let tileSetRows = 21;
let sourceTileSize = 8;

function setup() {
  createCanvas(640, 640);
}

function draw() {
  background(220);
  testing();
}

function testing() {
  console.log("ok");
  let sX = (26 % tileSetCols) * sourceTileSize;
  let sY = Math.floor(26 / tileSetCols) * sourceTileSize;
  image(
    tileSet,
    6 * 4, //xkord på canvas.
    6 * 4, //ykort på canvas.
    32, //Bredden på tilet på canvas
    32, //samme men højde
    sX, //xkord på tilesettet billedet skal starte. Finder tilens collum, og ganger med tilsize.
    sY, //ykord på tilesettet billedet skal starte. Finder tilens row og ganger med tilesize
    sourceTileSize, //Bredden på det snippet der tages af tilesettet
    sourceTileSize //Samme men højden i stedet
  );
}
