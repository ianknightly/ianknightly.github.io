let canvas, ball, field, xpos, ypos, dir, count, s, slider;

function preload() {
  ball = loadImage("/media/ball.png");
  field = loadImage("/media/field.jpeg");
}

function setup() {
  canvas = createCanvas(400, 400);
  xpos = 30;
  ypos = height / 2;
  dir = 1;
  count = 0;
  s = 0;
  canvas.parent('p5sketch');
  imageMode(CENTER);
  noStroke();
  slider = createSlider(1, 50, 25);
  slider.position(375, 1075);
}


function draw() {
  background(50, 50, 50);
  let speed;
  speed = slider.value();
  count = count + 0.1;
  s = 50 * sin(count);
  ypos = height / 2 + sin(count) * 50;
  ellipse(width / 2, ypos, speed, 50);
  // background(field);
  // image(ball, xpos, ypos, 60, 60);
  // xpos = xpos + dir;
  // if (xpos > width + 40 || xpos < -40) {
  //   dir = dir * -1;
  //   ypos += 30;
  // }
}