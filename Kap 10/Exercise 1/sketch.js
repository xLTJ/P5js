class Car {
  constructor(PosX, PosY, Width, Length, Speed, Color, Brand) {
    this.#x = PosX;
    this.#y = PosY;
    this.#width = Width;
    this.#length = Length;
    this.#speed = Speed;
    this.#c = color(Color);
    this.#brand = Brand;
    this.#finished = false;
  }

  //Denne metode for bilen til at bevæge sig
  move() {
    this.#x += this.#speed;
  }

  //Denne metode viser bilen på skærmen
  display() {
    fill(this.#c);
    rect(this.#x, this.#y, this.#width, this.#length);
  }

  //Denne metode checker om bilen x-værdi er større end 1000, og hvis den er sætter den this.#finished til true,  og skriver i konstollen at bilen har kørt færdig

  finish() {
    if (this.x >= 1000 && !this.#finished) {
      this.#finished = true;
      console.log(this.#brand + " hit the finish-line!");
    }
  }
}
