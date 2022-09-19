var x = 200;
var y = 200; //her laves to variabler: x og y.
function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  fill(0);
  ellipse(x,y,50,50);  //her laves en ellipse med dens x og y position basered på variablerne x og y 
  if (x >= 400){
   x = 0; 
  } // hvis x er 400 eller mere vil x blive tildelt værdien 0. Dette gør at hvis den rammer den venstre kant vil den komme tilbage til den anden side.
  if (keyCode === UP_ARROW) {
    y = y - 1; //Hvis man trykker på op pilen vil der trækkes 1 fra y hver gang draw kører. Dette betyder at circlen bevæger sig op.
  } else if (keyCode === DOWN_ARROW) {
   y = y + 1; //Det samme som før med der lægges 1 til i stedet så circlen bevæger ned i stedet.
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 1; //Det samme men der trækkes 1 fra x i stedet for y. Derfor bevæger cirlen sig til venstre. 
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 1; //Det samme igen men der lægges 1 til x så cirlen bevæger sig til højre.
  }
}