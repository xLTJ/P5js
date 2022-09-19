let x1
let y1
let x2
let y2
let w = window.innerWidth;
let h = window.innerHeight;
let Kat1Point = 0
let Kat2Point = 0
let ost1 = true
let ost2 = true
let ost3 = true
let ost4 = true
let ost5 = true
let ost6 = true
let ost7 = true
let ost8 = true
let ost9 = true
let ost10 = true
let ost11 = true
let ost12 = true
let ost13 = true
let ost14 = true
let ost15 = true
let ost16 = true

function setup() {
  createCanvas(w, h);
  x1 = random(25,width-25)
  y1 = random(25,height-25)
  x2 = random(25,width-25)
  y2 = random(25,height-25)
}

function draw() {
  if (keyIsDown(RIGHT_ARROW)) {
    x1 += 5;
  }

  if (keyIsDown(LEFT_ARROW)) {
    x1 -=5;
  }

  if (keyIsDown(UP_ARROW)) {
    y1 -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y1 +=5;
  }

  if (keyIsDown(68)) {
    x2 += 5;
  }

  if (keyIsDown(65)) {
    x2 -=5;
  }

  if (keyIsDown(87)) {
    y2 -= 5;
  }

  if (keyIsDown(83)) {
    y2 +=5;
  }
  

 clear()

  fill(255,255,0)
  if(ost1 == true) {
  ellipse(42,284,20,20)
    if(sqrt((42-x1+25)*(284-y1+25))<10) {
      ost1 = false;
      Kat1Point += 1;
    }

    else if(sqrt((42-x2+25)*(284-y2+25))<10) {
      ost1 = false;
      Kat2Point += 1;
    }
  }

  if(ost2 == true) {
  ellipse(267,637,20,20)
  if(sqrt((267-x1+25)*(637-y1+25))<10) {
    ost2 = false;
    Kat1Point += 1;
  }

  else if(sqrt((267-x2+25)*(637-y2+25))<10) {
    ost2 = false;
    Kat2Point += 1;
  }
}

if(ost3 == true) {
  ellipse(664,444,20,20)
  if(sqrt((664-x1+25)*(444-y1+25))<10) {
    ost3 = false;
    Kat1Point += 1;
  }

  else if(sqrt((664-x2+25)*(444-y2+25))<10) {
    ost3 = false;
    Kat2Point += 1;
  }
}

if(ost4 == true) {
  ellipse(498,167,20,20)
  if(sqrt((498-x1+25)*(167-y1+25))<10) {
    ost4 = false;
    Kat1Point += 1;
  }

  else if(sqrt((498-x2+25)*(167-y2+25))<10) {
    ost4 = false;
    Kat2Point += 1;
  }
}

if(ost5 == true) {
  ellipse(300,500,20)
  if(sqrt((300-x1+25)*(500-y1+25))<10) {
    ost5 = false;
    Kat1Point += 1;
  }

  else if(sqrt((498-x2+25)*(167-y2+25))<10) {
    ost5 = false;
    Kat2Point += 1;
  }
}

if(ost6 == true) {
  ellipse(600,528,20,20)
  if(sqrt((600-x1+25)*(528-y1+25))<10) {
    ost6 = false;
    Kat1Point += 1;
  }

  else if(sqrt((600-x2+25)*(528-y2+25))<10) {
    ost6 = false;
    Kat2Point += 1;
  }
}

if(ost7 == true) {
  ellipse(100,153,20,20)
  if(sqrt((100-x1+25)*(153-y1+25))<10) {
    ost7 = false;
    Kat1Point += 1;
  }

  else if(sqrt((100-x2+25)*(153-y2+25))<10) {
    ost7 = false;
    Kat2Point += 1;
  }
}

if(ost8 == true) {
  ellipse(280,320,20,20)
  if(sqrt((280-x1+25)*(320-y1+25))<10) {
    ost8 = false;
    Kat1Point += 1;
  }

  else if(sqrt((280-x2+25)*(320-y2+25))<10) {
    ost8 = false;
    Kat2Point += 1;
  }
}

if(ost9 == true) {
  ellipse(281,119,20)
  if(sqrt((281-x1+25)*(119-y1+25))<10) {
    ost9 = false;
    Kat1Point += 1;
  }

  else if(sqrt((281-x2+25)*(119-y2+25))<10) {
    ost9 = false;
    Kat2Point += 1;
  }
}

if(ost10 == true) {
  ellipse(95,537,20)
  if(sqrt((95-x1+25)*(537-y1+25))<10) {
    ost10 = false;
    Kat1Point += 1;
  }

  else if(sqrt((95-x2+25)*(537-y2+25))<10) {
    ost10 = false;
    Kat2Point += 1;
  }
}

  ellipse(664,248,20)
  ellipse(639,65,20)
  ellipse(456,616,20)
  ellipse(707,692,20)
  ellipse(76,659,20)
  ellipse(78,44,20)

  fill(0,200,255)
  ellipse(x1,y1,50,50)
  fill(255,100,0);
  ellipse(x2,y2,50,50)

  if (mouseIsPressed){
    if (mouseButton == LEFT) {
      print("blå kat point = " + Kat1Point);
      print("orange kat point = " + Kat2Point)
    }
  }
}
