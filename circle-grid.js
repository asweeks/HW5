
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (var i = 10; i <= 390; i = i + 20) {
   for(var x= 10; x<= 390; x+=20){
     ellipse(i,x, 15);
   }
  }
}
