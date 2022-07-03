function setup(){
  createCanvas(650，650)
  background(255,193,37)
  strokeWeight(3)
  var w = width-1
  var h = height-1
  let i = 1
  for (;i < 12;i++){
     line((w/13)*i,2,(w/13)*i,h)
  }
  i = 1
  for (;i < 12;i++){
     line(2,(h/13)*i,w,(h/13)*i)
  }
}
function draw(){
  
}
