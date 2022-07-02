function setup(){
  createCanvas(1000,1000)
}
function draw(){
  background(255)
  fill(0)
  var w = width-1
  var h = height-1
  line(1,1,1,w)
  line(1,w,w,h)
  line(w,h,w,1)
  line(w,1,1,1)
}
