function setup(){
  createCanvas(700,700)
}
function draw(){
  background(0)
  fill(255)
  var w = width-1
  var h = height-1
  fill(255)
  line(1,1,1,w)
  line(1,w,w,h)
  line(w,h,w,1)
  line(w,1,1,1)
}
