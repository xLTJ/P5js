function setup() {
  let talListe = [7, 4, 5, 6, 9, 1, 2, 8, 3, 10];
  let x = talListe[0];
  let length = talListe.length;
  for (let o = 0; o < length; o++) {
    for (let i = 0; i < talListe.length; i++) {
      if (x < talListe[i]) {
        x = talListe[i];
        HighestNumber = i;
      }
    }

    print("removed", x);
    talListe.splice(HighestNumber, 1);
    print(talListe);
    x = 0;
  }
}
