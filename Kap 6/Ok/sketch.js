let input, button, greeting;
function setup() {
  // create canvas
  createCanvas(710, 400);

  fornavnInput = createInput();
  efternavnInput = createInput();
  fornavnInput.position(20, 85);
  efternavnInput.position(20, 120);

  button = createButton("submit");
  button.position(efternavnInput.x + efternavnInput.width, efternavnInput.y);
  button.mousePressed(greet);

  greeting = createElement("h2", "what is your name?");
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const fornavn = fornavnInput.value();
  const efternavn = efternavnInput.value();
  greeting.html("hello " + fornavn + " " + efternavn + "!");
  fornavnInput.value("");
  efternavnInput.value("");
}
