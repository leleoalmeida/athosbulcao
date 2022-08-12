function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeCap(SQUARE);
  noLoop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  tS = 1000;
  tilesX = 2;
  tilesY = 0;



  while (tS > 300 && tilesX < 9) {
    tilesX++;
    tS = windowWidth / tilesX;
  }
  translate(tS / 2, tS / 2);
  tilesY = ceil(windowHeight / tS);

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {
      xPos = x * tS;
      yPos = y * tS;
      push();
      translate(xPos, yPos);
      rotate(HALF_PI * floor(random(0, 4)));

      tiler(floor(new Date().getHours() % 4));

      noFill();
      stroke(230);
      strokeWeight(tS / 100);
      rect(-tS / 2, -tS / 2, tS, tS);
      pop();
    }
  }
}


function tiler(design) {
  switch (design) {
    case 0:
      fill(random(0, 30));
      rect(-tS / 2, -tS / 2, tS / 5, tS / 5);
      noFill();
      stroke(random(0, 30));
      strokeWeight(tS / 8);
      arc(-tS / 2, -tS / 2, tS * 2 - tS / 8, tS * 2 - tS / 8, 0, HALF_PI,);
      strokeWeight(tS / 24);
      arc(-tS / 2, -tS / 2, tS * 2 - tS / 3, tS * 2 - tS / 3, 0, HALF_PI);
      break;
    case 1:
      pop();
      stroke(230);
      x = xPos / tS;
      y = yPos / tS;
      xPos -= tS / 2;
      yPos -= tS / 2;

      if ((x + y) % 2 == 1) {
        fill(255);
        rect(xPos, yPos, tS, tS);
        fill(0, 0, 125);
      } else {
        fill(0, 0, 125);
        rect(xPos, yPos, tS, tS);
        fill(255);
      }
      if (y % 2 == 1) {
        arc(xPos + tS, yPos + tS, tS - tS / 5, tS * 2, PI, PI + HALF_PI, PIE);
        arc(xPos, yPos + tS, tS - tS / 5, tS * 2, HALF_PI + PI, 2 * PI, PIE);
      } else {
        arc(xPos, yPos, tS - tS / 5, tS * 2, 0, HALF_PI, PIE);
        arc(xPos + tS, yPos, tS - tS / 5, tS * 2, HALF_PI, PI, PIE);
      }
      break;
    case 2:
      cor = floor(random(0, 2));
      if (cor == 1) {
        fill(0, 0, 125);
      } else {
        fill(130, 140, 190);
      }
      noStroke();

      rect(- tS / 2, - tS / 2, tS / 3, (tS / 3) + tS / 6 + tS / 12);
      quad(- tS / 2, - tS / 2, tS - tS / 2, 0 - tS / 2, tS - tS / 2, (tS / 12) - tS / 2, ((tS / 3) + tS / 6 + tS / 12) - tS / 2, (tS / 3) - tS / 2);
      fill(255);
      if (cor == 1) {
        stroke(0, 0, 125);
      } else {
        stroke(130, 140, 190);
      }
      strokeWeight(tS / 6);
      circle((tS / 3) - tS / 2, (tS / 3) - tS / 2, (tS / 3), (tS / 3));
      break;
    case 3:
      noStroke();

      switch (floor(random(3))) {
        case 0:
          fill(90, 125, 210); //blue
          break;
        case 1:
          fill(240, 200, 80); //yellow
          break;

        case 2:
          fill(70, 120, 70); //green
          break;
      }
      circle(-tS / 4, tS / 4, tS / 2 - tS / 10, tS / 2 - tS / 10);
      stroke(0);
      strokeWeight(tS / 20);
      noFill();
      beginShape();
      vertex(-tS / 2 + (tS / 40), -tS / 2 + (tS / 40));
      vertex(-tS / 4, -tS / 4);
      vertex(-tS / 4, 0);
      vertex(tS / 4 - tS / 40, 0);
      vertex(0, 0);
      vertex(0, tS / 4 - tS / 40);
      vertex(0, 0);
      bezierVertex(0, 0, 0, -tS / 2 + tS / 20, tS / 2 - tS / 20, -tS / 2 + tS / 20);
      vertex(tS / 2 - tS / 20, 0);
      vertex(tS / 4 + tS / 20, 0);
      vertex(tS / 2 - tS / 20, 0);
      vertex(tS / 2 - tS / 20, tS / 2 - tS / 20);
      vertex(0, tS / 2 - tS / 20);
      vertex(0, tS / 4 + tS / 40);
      endShape();
      stroke(255, 0, 0);
      break;
  }
}