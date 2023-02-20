let tesla;
let volvo;
let audi;
let placement;

function setup() {
  createCanvas(2000, 400);
  placement = 1;
  //new car(posX, posY, width, height, maxSpeed, color, name, acceleration, kmPerTank)
  tesla = new Car(0, 20, 90, 50, 4, "blue", "Tesla", 1.5, 40);
  volvo = new Car(0, 100, 50, 50, 2, "yellow", "Volvo", 2, 80);
  audi = new Car(0, 200, 90, 80, 3, "green", "Audi", 1.7, 60);
}

function draw() {
  background(220);
  makeCar(tesla);
  makeCar(volvo);
  makeCar(audi);
}

class Car {
  constructor(
    posX,
    posY,
    width,
    height,
    maxSpeed,
    color,
    name,
    acceleration,
    kmPerTank
  ) {
    this.x = posX;
    this.y = posY;
    this.width = width;
    this.height = height;
    this.maxSpeed = maxSpeed;
    this.color = color;
    this.name = name;
    this.finished = false;
    this.acc = acceleration;
    this.tank = kmPerTank;
    this.speed = 0;
    this.minusTank = 0;
    this.ahhh = 0;
    this.tankTom = false;
  }

  move() {
    if (this.speed <= this.maxSpeed) {
      this.speed += this.acc / 100;
    }

    this.x += this.speed;

    if (this.x - this.ahhh >= 20) {
      this.ahhh += 20;
      this.minusTank += 1;
    }

    if (this.minusTank > 0 && this.tank > 0) {
      this.tank -= this.minusTank;
      this.minusTank -= 1;
      print(this.tank);
    }

    if (this.tank == 0) {
      this.speed = 0;
    }

    if (this.tankTom == false) {
      print(this.name + "'s tank er tom, fyld den op, stupid ass");
      this.tankTom = true;
    }
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  finish() {
    if (this.x + this.width >= 2000 && this.finished == false) {
      this.finished = true;
      print(this.name + " has finsished " + placement + ". place!");
      placement++;
    }
  }
}

function makeCar(name) {
  name.move();
  name.display();
  name.finish();
}
