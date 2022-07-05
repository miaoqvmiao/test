var isBlack = 1,
    chessmanX,
    chessmanY,
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
    wt = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    chessmanW = 15,
    chessmanH = 15

function setup(){
  if (navigator.userAgent.indexOf('Android') == -1){
    createCanvas(640,640)
  }else{
    createCanvas(wt,wt)
  }
  background(255,255,255)
  fill(238,154,73)
  strokeWeight(3)
  var w = width-1
  var h = height-1
  let i = 1
  rect(0,0,height,width,25,25,25,25)
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

function onmousedown(){
  if (mouseX <= height && mouseY <= width){
    chessmanX = Math.abs(Math.round((mouseX - (w / 14) / 2) / chessmanW))
    chessmanY = Math.abs(Math.round((mouseY - (h / 14) / 2) / chessmanH))
    if (chessboard[chessmanX][chessmanY] == 0){
      if (isBlack == 1){
        fill(0,0,0)
        ellipse(chessmanX,chessmanY,15,15)
        chessboard[chessmanY][chessmanX] = 1
        isBlack = 0
      }else{
        fill(250,250,250)
        ellipse(chessmanX,chessmanY,15,15)
        chessboard[chessmanY][chessmanX] = 2
        isBlack = 1
      }
      
    }
  }
}

window.onerror = function (message,url,line){
  alert(message + '\nURL:' + url + '\nLine:' + line)
}
