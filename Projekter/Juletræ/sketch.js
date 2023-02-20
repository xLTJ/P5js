let b1,
  baseWidth,
  mid,
  baseW,
  star,
  randomColor,
  ballAmount,
  kugler,
  coolBalls,
  cooldown,
  ballColor,
  colorCooldown;

function preload() {
  starImg = loadImage("Star.png");
}

function setup() {
  createCanvas(400, 400);
  mid = 400 / 2;
  baseW = 50;
  b1 = new Base(mid - baseW / 2, 350, 50, baseW);
  l1 = new Leaves(mid - 250 / 2, 350, 250, 150);
  l2 = new Leaves(mid - 200 / 2, 250, 200, 150);
  l3 = new Leaves(mid - 150 / 2, 150, 150, 100);
  s1 = new Star(mid - 75 / 2, 0, 75);
  ballAmount = 0;
  coolBalls = [];
  cooldown = 0;
  colorCooldown = 0;
  ballColor = [0, 0, 0];
}

function draw() {
  background(220);
  b1.create();
  l1.create();
  l2.create();
  l3.create();
  s1.create();

  if (cooldown > 50) {
    if (mouseIsPressed) {
      if (mouseButton == LEFT) {
        ballAmount++;
        //coolBalls[ballAmount * 3 - 3] = ballAmount;
        coolBalls[ballAmount * 2] = mouseX;
        coolBalls[ballAmount * 2 - 1] = mouseY;
        print(coolBalls);
        cooldown = 0;
      }
    }
  }

  for (i = 0; i < ballAmount; i++) {
    fill(ballColor[0], ballColor[1], ballColor[2]);
    ellipse(coolBalls[i * 2 + 2], coolBalls[i * 2 + 1], 20);
  }

  if (colorCooldown > 50) {
    ballColor[0] = random(255);
    ballColor[1] = random(255);
    ballColor[2] = random(255);
    colorCooldown = 0;
  }
  cooldown++;
  colorCooldown++;
}

class Base {
  constructor(bx, by, bw, bh) {
    this.x = bx;
    this.y = by;
    this.w = bw;
    this.h = bh;
  }
  create() {
    fill(164, 116, 73);
    rect(this.x, this.y, this.w, this.h);
  }
}

class Leaves {
  constructor(lx, ly, lw, lh) {
    this.x = lx;
    this.y = ly;
    this.w = lw;
    this.h = lh;
  }
  create() {
    fill("green");
    triangle(
      this.x,
      this.y,
      this.x + this.w,
      this.y,
      this.x + this.w / 2,
      this.y - this.h
    );
  }
}

class Star {
  constructor(sx, sy, sw) {
    this.x = sx;
    this.y = sy;
    this.w = sw;
  }
  create() {
    image(starImg, this.x, this.y, this.w, this.w);
  }
}

class BALLS {
  constructor(ballX, ballY, ballR) {
    this.x = ballX;
    this.y = ballY;
    this.r = ballR;
  }
  create() {
    fill(random(255), random(255), random(255));
    ellipse(this.x, this.y, this.r);
  }
}
