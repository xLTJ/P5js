const kapital = 50000;
const antalTerminer = 100;
const opsparingRente = 0.5 / 100;
const aktieRente = 7 / 100;
let opsparing = kapital;
let aktier = kapital;
let termin = 0;

function setup() {
  createCanvas(700, 700);
  background(220);

  for (i = 0; i < antalTerminer; i++) {
    opsparing *= 1 + opsparingRente;
  }

  for (i = 0; i < antalTerminer; i++) {
    aktier *= 1 + aktieRente;
  }

  print("opsparing=", opsparing);
  print("aktier=", aktier);
}
