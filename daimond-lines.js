var y;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  for (var i = 10; i <= 200; i = i + 10) {
    line(width / 2 - i, i, width / 2 + i, i);
  }

  for (var x = 10; x <= 200; x = x + 10) {
    //y= x*-1
    line(200 - x, height - x, 200 + x, height - x);
  }

}
