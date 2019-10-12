function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(220);
  for (var i = 10; i <= 410; i = i + 10) {
    line(width/2, 0, i-10, 400);
  }
}
