function setup(){
  createCanvas(640,640)
  background(255,255,255)
  fill(255,193,37)
  strokeWeight(3)
  var w = width-1
  var h = height-1
  let i = 1
  rect(0,0,640,640,25,25,25,25)
  for (;i < 12;i++){
     line((w/12)*i,2,(w/12)*i,h)
  }
  i = 1
  for (;i < 12;i++){
     line(2,(h/12)*i,w,(h/12)*i)
  }
}
function draw(){
  
}
