function setup(){
  createCanvas(700,700)
  background(255,193,37)
  strokeWeight(3)
  var w = width-1
  var h = height-1
  let i = 1
  rect(0,0,650,650)
  for (;i < 14;i++){
     line((w/13)*i,1,(w/13)*i,h)
  }
  i = 1
  for (;i < 14;i++){
     line(1,(h/13)*i,w,(h/13)*i)
  }
}
function draw(){
  
}
