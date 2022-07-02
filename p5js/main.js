function setup(){
  createCanvas(720,720)
}
function draw(){
  background(255)
  var w = width-1
  var h = height-1
  line(1,1,1,w)
  line(1,w,w,h)
  line(w,h,w,1)
  line(w,1,1,1)
}
