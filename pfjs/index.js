function setup(){
  createCanvas(700,700)
  background(255,193,37)
  strokeWeight(3)
}
function draw(){
  var w = width-1
  var h = height-1
  rect(0,0,650,650)
  for (let i;i < 14;i++){
     line((w/13)*i,1,(w/13)*i,h)
  }
}
