let clr, sound;

function preload() {
  sound = loadSound('/media/elephantsound.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  clr = color(130);
}

function draw() {
  background(clr);
}

function touchStarted() {
  clr = color(random(255), random(255), random(255));
  sound.play()
}