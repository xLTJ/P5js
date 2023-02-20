let menneskeRadius,
  antalMennesker,
  antalSmittede,
  antalDoktorer,
  smittetSandsynlighed,
  doktorSandsynlighed,
  startStatus,
  statusBestemmer,
  menneskeKollision,
  uhhhIdkWhatThisIs,
  epicTrailOMG,
  maxFart,
  kant,
  død;
let mennesker = [];

//--------------------------------------Instillinger-------------------------------------------

antalMennesker = 300; //antallet af mennesker

smittetSandsynlighed = 2; //sandynlighed for at et menneske starter som smittet i %

doktorSandsynlighed = 2; //sandsynlighed for at et menneske starter som doktor i %

menneskeKollision = false; //om menneskerne kan kollidere med hinanden (buggy)

død = true; //om menneskerne dør

menneskeRadius = 7; //radiusen på menneskerne

dontTurnOn = false; //lad være med at slå til

epicTrailOMG = false; //slå til

maxFart = 2; //max hastighed

kant = true; //om der er en sort kant om menneskerne

//----------------------------------------------------------------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);

  //her laves der der et antal mennesker baseret på antalMennesker. Hvert menneske bliver pushed til mennesker[]
  for (let i = 0; i < antalMennesker; i++) {
    statusBestemmer = random(0, 100);
    if (statusBestemmer < smittetSandsynlighed) {
      startStatus = "smittet";
    } else if (statusBestemmer < smittetSandsynlighed + doktorSandsynlighed) {
      startStatus = "doktor";
    } else {
      startStatus = "usmittet";
    }

    mennesker.push(
      new Menneske(
        random(menneskeRadius, windowWidth - menneskeRadius),
        random(menneskeRadius, windowHeight - menneskeRadius),
        menneskeRadius,
        random(-maxFart, maxFart),
        random(-maxFart, maxFart),
        startStatus,
        random(50, 200)
      )
    );
  }

  print(mennesker); //for debugging
}

function draw() {
  if (epicTrailOMG == false) {
    background(225);
  }

  if (kant == false) {
    noStroke();
  }

  //her bliver menneskerne lavet, samt der bliver checket om de koliderer med kanten.
  //Der er også her hvor der bliver checked om personerne rammer hinanden, og hvad der sker derefter kommer an på personens status.
  for (m of mennesker) {
    m.draw();
    m.kantKollision(windowWidth, windowHeight);
    for (m2 of mennesker) {
      if (m.overlap(m2)) {
        if (m.status == "smittet" && m2.status == "usmittet") {
          m2.status = "smittet";
        }

        if (m.status == "doktor" && m2.status == "smittet") {
          m2.status = "rask";
        }

        if (menneskeKollision == true) {
          m.retningX = -m.retningX;
          m.retningY = -m.retningY;
          m2.retningX = -m.retningX;
          m2.retningY = -m.retningY;
        }

        if (dontTurnOn == true) {
          m2.retningX = m.retningX;
          m2.retningY = m.retningY;
        }
      }
    }

    if (m.status == "smittet" && død == true) {
      m.hp -= 0.1;
    }

    if (m.hp <= 0) {
      m.status = "død";
      m.retningX = 0;
      m.retningY = 0;
    }
  }
}

//Her er klassen for menneskerne
class Menneske {
  constructor(x, y, radius, retningX, retningY, status, hp) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.retningX = retningX;
    this.retningY = retningY;
    this.status = status;
    this.hp = hp;
  }

  //her bliver personerne tegnet på skærmen, samt hver person får tildelt en farve baseret på deres status.
  draw() {
    if (this.status == "usmittet") {
      fill(88, 214, 141);
    }

    if (this.status == "smittet") {
      fill(210, 43, 43);
    }

    if (this.status == "rask") {
      fill(93, 173, 226);
    }

    if (this.status == "doktor") {
      fill(155, 89, 182);
    }

    if (this.status == "død") {
      fill(86, 101, 115);
    }

    circle(this.x, this.y, this.radius * 2);
  }

  //Her checkes der om menneskerne kolliderer med kanten af skærmen. Hvis dette er tilfældet ændres deres retning så de ikke forsvinder
  kantKollision(windowWidth, windowHeight) {
    if (this.x + this.radius > windowWidth) {
      this.retningX = -this.retningX;
    }

    if (this.x - this.radius <= 0) {
      this.retningX = -this.retningX;
    }

    if (this.y + this.radius > windowHeight) {
      this.retningY = -this.retningY;
    }

    if (this.y - this.radius <= 0) {
      this.retningY = -this.retningY;
    }

    this.x += this.retningX;
    this.y += this.retningY;
  }

  //Her checkes der om en cirkel rammer en anden cirkel.
  overlap(andenCirkel) {
    let d = dist(this.x, this.y, andenCirkel.x, andenCirkel.y);
    return d < this.radius + andenCirkel.radius;
  }
}
