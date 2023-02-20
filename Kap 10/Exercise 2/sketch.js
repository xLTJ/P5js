let tesla;
let volvo;
let audi;
let placement;

function setup() {
  createCanvas(1000, 400);
  placement = 1;
  //new car(posX, posY, width, height, speed, color, name)
  tesla = new Car(0, 20, 90, 50, 4, "blue", "Tesla");
  volvo = new Car(0, 100, 50, 50, 2, "yellow", "Volvo");
  audi = new Car(0, 200, 90, 80, 3, "green", "Audi");
}

function draw() {
  background(220);
  makeCar(tesla);
  makeCar(volvo);
  makeCar(audi);
}

class Car {
  constructor(posX, posY, width, height, speed, color, name) {
    this.x = posX;
    this.y = posY;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.color = color;
    this.name = name;
    this.finished = false;
  }

  move() {
    this.x += this.speed;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  finish() {
    if (this.x + this.width >= 1000 && this.finished == false) {
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
