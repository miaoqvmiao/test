var isBlack = 1,
    chessmanX,
    chessmanY
    chessboard = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
var wt = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

function setup(){
  if (navigator.userAgent.indexOf('Android') == -1){
    createCanvas(640,640)
  }esle{
    
  }
  background(255,255,255)
  fill(238,154,73)
  strokeWeight(3)
  var w = width-1
  var h = height-1
  let i = 1
  rect(0,0,640,640,25,25,25,25)
  for (;i < 14;i++){
     line((w/14)*i,2,(w/14)*i,h)
  }
  i = 1
  for (;i < 14;i++){
     line(2,(h/14)*i,w,(h/14)*i)
  }
  fill(0,0,0)
  ellipse(320,320,7,7)
}
function draw(){
  
}
/*
function onmousedown(){
  if (mouseX <= height && mouseY <= width){
    chessmanX,chessmanY = mouseX,mouseY
    chessmanX = Math.round(chessmanX)
    chessmanY = Math.round(chessmanY)
    if (chessboard[chessmanX][chessmanY] == 0){
      if (isBlack == 1){
        fill(0,0,0)
        ellipse(chessmanX,chessmanY,15,15)
        chessboard[chessmanY][chessmanX] = 1
      }else{
        fill(250,250,250)
        ellipse(chessmanX,chessmanY,15,15)
        chessboard[chessmanY][chessmanX] = 2
      }
      
    }
  }
}
*/
onerror = function (msg,url,l){
  alert(msg + '\nurl:' + url + '\nline:' + l)
}
