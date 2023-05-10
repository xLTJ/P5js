let xPos, yPos, playerWidth, playerHeight;
let stateMachine;
let jumpSpeed = 4;
let fallSpeed = 4;
let moveSpeed = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stateMachine = new StateMachine();
  frameRate(144);
  xPos = 10;
  yPos = height;
  playerWidth = 50;
  playerHeight = 50;
}

function draw() {
  background(255, 255, 255);
  view(stateMachine);
  text("current state = " + this.currentState);
  print(xPos);
  rect(xPos, yPos - playerHeight, playerWidth, playerHeight);
}

//Inspiration
//https://24ways.org/2018/state-machines-in-user-interfaces/
//https://musing-rosalind-2ce8e7.netlify.app/?machine=%7B%22key%22%3A%22login%20form%22%2C%22initial%22%3A%22start%22%2C%22states%22%3A%7B%22start%22%3A%7B%22on%22%3A%7B%22SUBMIT%22%3A%22loading%22%7D%7D%2C%22loading%22%3A%7B%22on%22%3A%7B%22REJECT%22%3A%22error%22%2C%22RESOLVE%22%3A%22success%22%7D%7D%2C%22error%22%3A%7B%22on%22%3A%7B%22SUBMIT%22%3A%22loading%22%7D%7D%2C%22success%22%3A%7B%7D%7D%7D

//Model
class StateMachine {
  constructor() {
    this.currentState = "idle";
  }

  transition(event) {
    switch (this.currentState) {
      case "idle":
        if (event == "LEFT") {
          this.currentState = "runLeft";
        }
        if (event == "RIGHT") {
          this.currentState = "runRight";
        }
        if (event == "JUMP") {
          this.currentState = "jump";
        }
        if (event == "CROUCH") {
          this.currentState = "crouch";
        }
        break;
      case "runLeft":
        if (event == "PASSIVE") {
          this.currentState = "idle";
        }
        break;
      case "runRight":
        if (event == "PASSIVE") {
          this.currentState = "idle";
        }
        break;
      case "jump":
        if (event == "FALLING") {
          this.currentState = "falling";
        }
        break;
      case "falling":
        if (event == "PASSIVE") {
          this.currentState = "idle";
        }
        break;

      case "crouch":
        if (event == "PASSIVE") {
          this.currentState = "idle";
        }
        break;
      default:
        // This should never occur
        this.currentState = undefined;
    }
  }
}

//View - This could be made to a class also
function view(model) {
  text("The current state is: " + model.currentState, 100, 200);
  switch (model.currentState) {
    case "idle":
      if (keyIsDown(65)) {
        let activeEvent = "LEFT";
        stateMachine.transition(activeEvent);
      } else if (keyIsDown(68)) {
        let activeEvent = "RIGHT";
        stateMachine.transition(activeEvent);
      } else if (keyIsDown(87)) {
        let activeEvent = "JUMP";
        stateMachine.transition(activeEvent);
      } else if (keyIsDown(83)) {
        let activeEvent = "CROUCH";
        stateMachine.transition(activeEvent);
      }

      playerHeight = 50;
      break;

    case "runLeft":
      if (keyIsDown(65) == false) {
        let activeEvent = "PASSIVE";
        stateMachine.transition(activeEvent);
      }
      xPos -= moveSpeed;
      break;

    case "runRight":
      if (keyIsDown(68) == false) {
        let activeEvent = "PASSIVE";
        stateMachine.transition(activeEvent);
      }
      xPos += moveSpeed;
      break;

    case "jump":
      if (yPos < height - 100) {
        let activeEvent = "FALLING";
        stateMachine.transition(activeEvent);
      }
      yPos -= jumpSpeed;
      break;

    case "falling":
      if (yPos > height) {
        let activeEvent = "PASSIVE";
        stateMachine.transition(activeEvent);
      }
      yPos += fallSpeed;
      break;

    case "crouch":
      if (keyIsDown(83) == false) {
        let activeEvent = "PASSIVE";
        stateMachine.transition(activeEvent);
      }
      playerHeight = 25;
      break;
  }
}
