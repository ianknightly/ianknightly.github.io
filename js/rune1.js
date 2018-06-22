let r = new Rune({
  container: "#rune1",
  width: 500,
  height: 400
});

// var numColors = 20;
// var angle = 360 / numColors;
// var radius = 150;
//
// for (var i = 0; i < numColors; i++) {
//
//   var curAngle = i * angle;
//   var x = Math.cos(Rune.radians(curAngle)) * radius;
//   var y = Math.sin(Rune.radians(curAngle)) * radius;
//
//   r.circle((r.width / 2) + x, (r.height / 2) + y, 20)
//     .fill('hsv', curAngle, 80, 90)
//     .stroke(false);
// }

var numColors = 20;
var angle = 360 / numColors;
var radius = 150;

for (var i = 0; i < numColors; i++) {

  var curAngle = i * angle;
  var clr = r.map(curAngle, 0, 360, 0, 255);
  var x = Math.cos(Rune.radians(curAngle)) * radius;
  var y = Math.sin(Rune.radians(curAngle)) * radius;

  r.circle((r.width / 2) + x, (r.height / 2) + y, 20)
    .fill(clr, clr, clr)
    .stroke(false);

}

// r.rect(0, 0, 200, 200)
//   .fill(0, 0, 255)
//   .move(50, 50)
//   .rotate(45, 150, 150)
//   .stroke(false)
//
// r.triangle(r.width / 2, 0, 0, r.height, r.width, r.height)
//   .fill(250, 150, 50, 0.5)
//   .stroke(false)
//
// for (let i = 0; i < 10; i++) {
//   r.circle(r.random(0, r.width), r.random(0, r.height), 50)
//     .fill(r.random(0, 255), r.random(0, 255), r.random(0, 255), 0.5)
//     .stroke(false)
// }
//
// r.ellipse(0, 0, 50, 50)
//   .move(300, 300)
//   .stroke(false)
//
// r.line(0, r.height, r.width, 0)
//   .stroke(0, 255, 0)
//   .strokeWidth(5)
//
// r.polygon(0, 0)
//   .lineTo(50, 50)
//   .lineTo(50, 100)
//   .lineTo(100, 100)



r.draw();