var mySound;

function preload() {
   soundFormats("wav");
  mySound = loadSound("pop.wav");
}


var bubbles = [];

function setup() {
  createCanvas(800, 600);

  for (var i = 0; i < 10; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(50, 100)
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(255);

  for (var i = 0; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        mySound.play(); //bubble make popping sound!
        bubbles.splice(i, 1); // remove this bubble!
           if(bubble.radius > 10){
      var bubble = {
      x: random(width),
      y: random(height),
      radius: random(10, 10)
    };
    bubbles.push(bubble);
    }
        else{
            var bubble = {
      x: random(width),
      y: random(height),
      radius: random(50, 100)
    };
    bubbles.push(bubble);
      }
      }
      fill(255, 200, 200, 200);
    } else {
      fill(255, 220, 200, 200);
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 2);
    bubble.x += random(-1, 1);
    bubble.y += random(-1, 1);
  }
}
