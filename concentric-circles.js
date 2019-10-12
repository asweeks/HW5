function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(220);
  for (var i = 10; i <= 390; i = i + 10) {
    ellipse(width/2, height/2, i, i);
  }
}
