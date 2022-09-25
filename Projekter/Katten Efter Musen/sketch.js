//til at starte med laver jeg alle de variabler jeg skal bruge
let x;
let y;
let catX1;
let catY1;
let catX2;
let catY2;
let a;
let b;
let d;
let speed;
let speedC;
let catA1;
let catB1;
let catA2;
let catB2;
let catD;
let score;
let alive;

//Jeg loader de billeder jeg skal bruge
function preload() {
  CatPic = loadImage("Cat.png");
  MousePic = loadImage("Mouse.png");
}

//Her sætter jeg variablerne til de værdier jeg vil have dem til at være.
function setup() {
  createCanvas(windowWidth, windowHeight);
  speed = 5; //faten for musen
  speedC = 5; //farten for katten
  d = 50; //diameter for musen
  a = 0; //a og b er retningsvektorer for musen
  b = 0;
  x = windowWidth / 2; //x og y er musens position
  y = windowHeight / 2;
  catA1 = speed; //catA1 og catB1 er den 1. kats retningsvektorer
  catB1 = speed;
  catX1 = windowWidth / 8; //1. kats position
  catY1 = windowHeight / 8;
  catX2 = windowWidth - windowWidth / 8; //2. kats position
  catY2 = windowHeight / 8;
  catA2 = speedC; //2. kats retningsvektor
  catB2 = speedC;
  catD = 100; //kattenes diameter
  score = 0; //Spillerens score
  alive = true; //Om spilleren er i live eller ej
}

//Draw funktionen kører dens indhold en gang per frame
function draw() {
  background(220);
  entities();
  showScore();
  move();
  Barrier();
  death();
}

//barrier funktionen sørger for at ingen af entiteterne forlader skærmen.
//Hvis musun rammer en af skærmens kanter vil den ændre dens retningsvektor blive ganget med -1, hvilket vil få den til at bevæge sig den modsatte vej.
//Hvis en af kattene rammer en kant vil den for det første sætte den ene hastighedsvektor (basered på hvilket kan den rammer) mellem 1 og hvad end speedC ligger på.
//For det andet vil dens anden hastihedsvektor blive til et tal imellem -speed og speed, så den tilfældigt vil ændre sin retning
function Barrier() {
  if (x + d >= windowWidth || x <= 0) {
    a *= -1;
  }

  if (y + d >= windowHeight || y <= 0) {
    b *= -1;
  }

  if (catX1 + catD >= windowWidth) {
    catA1 = random(-1, -speedC);
    catB1 = random(-speedC, speedC);
  }

  if (catX1 / 2 <= 0) {
    catA1 = random(1, speedC);
    catB1 = random(-speedC, speedC);
  }

  if (catY1 + catD >= windowHeight) {
    catA1 = random(-speedC, speedC);
    catB1 = random(-1, -speedC);
  }

  if (catY1 / 2 <= 0) {
    catA1 = random(-speedC, speedC);
    catB1 = random(1, speedC);
  }

  if (catX2 + catD >= windowWidth) {
    catA2 = random(-1, -speedC);
    catB2 = random(-speedC, speedC);
  }

  if (catX2 / 2 <= 0) {
    catA2 = random(1, speedC);
    catB2 = random(-speedC, speedC);
  }

  if (catY2 + catD >= windowHeight) {
    catA2 = random(-speedC, speedC);
    catB2 = random(-1, -speedC);
  }

  if (catY2 / 2 <= 0) {
    catA2 = random(-speedC, speedC);
    catB2 = random(1, speedC);
  }
}

//move funktionen sørger for at entiteterne bevæger sig. Dette gøres ved at den lægger værdien af hastihedsvektoren til positions variablen.
function move() {
  x += a;
  y += b;
  catX1 += catA1;
  catY1 += catB1;
  catX2 += catA2;
  catY2 += catB2;
}

//entities funktionen laver entiteterne (musen og kattene)
function entities() {
  image(MousePic, x, y, d, d);
  image(CatPic, catX1, catY1, catD, catD);
  image(CatPic, catX2, catY2, catD, catD);
}

//Denne funktion sørger for at man kan ændre på musens bevægelse med piltasterne.
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
}

//denne funktion viser spillerens afrundede score, og forøger scoren med 1/100 hver gang den kører (hvilket bliver til cirka 1 gang i sekundet)
function showScore() {
  textSize(32);
  if (alive == true) {
    text("score: " + Math.floor(score), 10, 30);
    score += 1 / 100;
  }
}

//death funktionen holder øje med om musen rammer en af de to katte
//Hvis musen rammer en af kattende, bliver speed og hastihedsvektorne sat til 0, så entiteterne ikke længere bevæger sig.
function death() {
  if (
    (x + d > catX1 && x < catX1 + catD && y + d > catY1 && y < catY1 + catD) ||
    (x + d > catX2 && x < catX2 + catD && y + d > catY2 && y < catY2 + catD)
  ) {
    image(CatPic, 0, 0, windowWidth, windowHeight - windowHeight / 4);
    fill(0);
    rect(0, windowHeight - windowHeight / 4, windowWidth, windowHeight);
    fill(255);
    textSize(100);
    text("You died", windowWidth / 2, windowHeight - windowHeight / 16);
    a = 0;
    b = 0;
    catA1 = 0;
    catB1 = 0;
    catA2 = 0;
    catB2 = 0;
    speed = 0;
    alive = false;
  }
}
//hmmm
