function setup(){
  createCanvas(document.body.clientHeith,document.body.clientWidth)
}
function draw(){
  background(0)
  fill(255)
  var w = document.body.clientWidth-1
  var h = document.body.clientHidth-1
  fill(255)
  line(1,1,1,w)
  line(1,w,w,h)
  line(w,h,w,1)
  line(w,1,1,1)
}
