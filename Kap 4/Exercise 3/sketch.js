function setup() {
  createCanvas(400, 400);
}

console.log(2 == 2 && 2 == '2'); //sand
console.log(2 == 2 && 2 == '2' && 2 === '2'); //falsk
console.log(2 == 2 && 2 == '2' || 2!=2); //sand
console.log('hello' != 'Hello' && 'hello' !== 'Hello'); //sand
console.log('hello' != 'Hello' || 'hello' !== 'hello' && 'hello' !== 'heLLo'); //sand
console.log(2 === 2 || 2!=3 ); //sand
console.log(2 === 2 || 2!='2' && (true || false)); //sand

function draw() {
  background(220);
}
