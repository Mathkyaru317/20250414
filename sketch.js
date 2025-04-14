let circles = [];

function setup() {
  //產生一個全視窗的畫布
  createCanvas(windowWidth, windowHeight);
  //畫布的顏色為#f5ebe0
  background('#f5ebe0');
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 50),
      color: color(random(255), random(255), random(255))
    });
  }
}

function draw() {
  background('#f5ebe0');
  let sizeFactor = map(mouseX, 0, width, 20, 80);
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size * sizeFactor / 50);
  }
}
