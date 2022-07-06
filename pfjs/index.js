var isBlack = 1,
    chessmanX,
    chessmanY,
    chessboard = new Array(),
    wt = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    chessmanW = 40,
    chessmanH = 40,
    wth,
    ht

function setup(){
  if (navigator.userAgent.indexOf('Android') == -1){
    createCanvas(640,640)
  }else{
    createCanvas(wt,wt)
  }
  background(255,255,255)
  fill(238,154,73)
  strokeWeight(3)
  let i = 0
  var w = width-1
  var h = height-1
  chessboard.length = 15
  for (;i <= 15;i++){
    chessboard[i] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  }
  i = 1
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
  wth = w + 1
  ht = h + 1
}

function draw(){
  
}

onmousedown = function(){
  noStroke()
  if (mouseX <= height && mouseY <= width){
    chessmanX = Number(Math.abs(Math.round((mouseX - ((wth + 0) / 14) / 2) / chessmanW)))
    chessmanY = Number(Math.abs(Math.round((mouseY - ((ht + 0) / 14) / 2) / chessmanH)))
    if (chessboard[chessmanY - 1][chessmanX - 1] == 0){
      if (isBlack == 1){
        fill(0,0,0)
        ellipse(chessmanX * (wth / 14 / 2),chessmanY * (ht / 14 / 2),chessmanW,chessmanH)
        chessboard[chessmanY - 1][chessmanX - 1] = 1
        isBlack = 0
      }else{
        fill(250,250,250)
        ellipse(chessmanX * (wth / 14 / 2),chessmanY * (ht / 14 / 2),chessmanW,chessmanH)
        chessboard[chessmanY - 1][chessmanX - 1] = 2
        isBlack = 1
      }
      console.log(chessboard) 
    }
  }
  strokeWeight(3)
}

window.onerror = (message,url,line) => {alert(message + '\nURL:' + url + '\nLine:' + line)}
