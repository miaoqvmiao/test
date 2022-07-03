function setup(){
  createCanvas(700,700)
  background(255,193,37)
  strokeWeight(3)
}
function draw(){
  fill(255,255,255)
  var w = width-1
  var h = height-1
  line(1,1,1,w)
  line(1,w,w,h)
  line(w,h,w,1)
  line(w,1,1,1)
  for (let i;i = 13;i++){
     line((w/13)*i,1,(w/13)*i,h)
  }
}
