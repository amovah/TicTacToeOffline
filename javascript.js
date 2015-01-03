var table = document.getElementById('table'),
    turn = 0,
    pos = 0,
    poss = [,0,0,0,0,0,0,0,0,0],
    gamestatus = false,
    elementReset = document.getElementById('reset');
drawtable(table);
function drawtic(a,b) {
  a = a.getContext('2d');
  
  
  if (b == 1 && poss[1] == 0) {
    turn = 1;
    poss[1] = 1;
    a.beginPath();
    a.strokeStyle = "red";
    a.lineCap = "round";
    a.moveTo(10,10);
    a.lineTo(90,90);
    a.moveTo(90,10);
    a.lineTo(10,90);
    a.stroke();
  }
  else if ( b == 2 && poss[2] == 0) {
    turn = 1;
    poss[2] = 1;
    a.beginPath();
    a.strokeStyle = "red";
    a.lineCap = "round";
    a.moveTo(120,10);
    a.lineTo(210,90);
    a.moveTo(210,10);
    a.lineTo(120,90);
    a.stroke();
  }
  else if( b == 3 && poss[3] == 0) {
    turn = 1;
    poss[3] = 1;
    a.beginPath();
    a.strokeStyle = "red";
    a.lineCap = "round";
    a.moveTo(230,10);
    a.lineTo(310,90);
    a.moveTo(310,10);
    a.lineTo(230,90);
    a.stroke();
  }
  else if ( b == 4 && poss[4] == 0) {
    turn = 1;
    poss[4] = 1;
    a.beginPath();
    a.strokeStyle = "red";
    a.lineCap = "round";
    a.moveTo(10,110);
    a.lineTo(90,200);
    a.moveTo(90,110);
    a.lineTo(10,200);
    a.stroke();
  }
  else if ( b == 5 && poss[5] == 0) {
    turn = 1;
    poss[5] = 1;
    a.beginPath();
    a.strokeStyle = "red";
    a.lineCap = "round" ;
    a.moveTo(120,110);
    a.lineTo(210,200);
    a.moveTo(210,110);
    a.lineTo(120,200);
    a.stroke();
	}
	
  else if ( b == 6 && poss[6] == 0) {
    turn = 1;
    poss[6] = 1;
    a.beginPath();
    a.strokeStyle = "red";
    a.lineCap = "round";
    a.moveTo(230,110);
    a.lineTo(310,200);
    a.moveTo(310,110);
    a.lineTo(230,200);
    a.stroke();
  }
  else if ( b == 7 && poss[7] == 0) {
    turn = 1;
    poss[7] = 1;
    a.beginPath();
    a.strokeStyle = "red";
    a.lineCap = "round";
    a.moveTo(10,220);
    a.lineTo(90,310);
    a.moveTo(90,220);
    a.lineTo(10,310);
    a.stroke();
  }
  else if ( b == 8 && poss[8] == 0) {
    turn = 1;
    poss[8] = 1;
    a.beginPath();
    a.strokeStyle = "red";
    a.lineCap = "round";
    a.moveTo(120,220);
    a.lineTo(200,310);
    a.moveTo(200,220);
    a.lineTo(120,310);
    a.stroke();
  }
  else if ( b == 9 && poss[9] == 0) {
    turn = 1;
    poss[9] = 1;
    a.beginPath();
    a.strokeStyle = "red";
    a.lineCap = "round";
    a.moveTo(230,220);
    a.lineTo(310,310);
    a.moveTo(310,220);
    a.lineTo(230,310);
    a.stroke();
  }
}
function drawtac(a,b) {
  a = a.getContext('2d');
  
  
  if ( b == 1 && poss[1] == 0) {
    turn = 0;
    poss[1] = 2;
    a.beginPath();
    a.strokeStyle = "blue";
    a.lineCap = "round";
    a.moveTo(90,50);
    a.arc(50,50,40,0,Math.PI*2);
    a.stroke();
  }
  else if ( b == 2 && poss[2] == 0) {
    turn = 0;
    poss[2] = 2;
    a.beginPath();
    a.strokeStyle = "blue";
    a.lineCap = "round";
    a.moveTo(205,50);
    a.arc(165,50,40,0,Math.PI*2);
    a.stroke();
  }
  else if ( b == 3 && poss[3] == 0) {
    turn = 0;
    poss[3] = 2;
    a.beginPath();
    a.strokeStyle = "blue";
    a.lineCap = "round";
    a.moveTo(310,50);
    a.arc(270,50,40,0,Math.PI*2);
    a.stroke();
  }
  else if ( b == 4 && poss[4] == 0) {
    turn = 0;
    poss[4] = 2;
    a.beginPath();
    a.strokeStyle = "blue";
    a.lineCap = "round";
    a.moveTo(90,155);
    a.arc(50,155,40,0,Math.PI*2);
    a.stroke();
  }
  else if ( b == 5 && poss[5] == 0) {
    turn = 0;
    poss[5] = 2;
    a.beginPath();
    a.strokeStyle = "blue";
    a.lineCap = "round";
    a.moveTo(205,155);
    a.arc(165,155,40,0,Math.PI*2);
    a.stroke();
  }
  else if ( b == 6 && poss[6] == 0) {
    turn = 0;
    poss[6] = 2;
    a.beginPath();
    a.strokeStyle = "blue";
    a.lineCap = "round";
    a.moveTo(310,155);
    a.arc(270,155,40,0,Math.PI*2);
    a.stroke();
  }
  else if ( b == 7 && poss[7] == 0) {
    turn = 0;
    poss[7] = 2;
    a.beginPath();
    a.strokeStyle = "blue";
    a.lineCap = "round";
    a.moveTo(90,265);
    a.arc(50,265,40,0,Math.PI*2);
    a.stroke();
  }
  else if ( b == 8 && poss[8] == 0) {
    turn = 0;
    poss[8] = 2;
    a.beginPath();
    a.strokeStyle = "blue";
    a.lineCap = "round";
    a.moveTo(205,265);
    a.arc(165,265,40,0,Math.PI*2);
    a.stroke();
  }
  else if ( b == 9 && poss[9] == 0) {
    turn = 0;
    poss[9] = 2;
    a.beginPath();
    a.strokeStyle = "blue";
    a.lineCap = "round";
    a.moveTo(310,265);
    a.arc(270,265,40,0,Math.PI*2);
    a.stroke();
  }
}
function drawtable(a) {
  a = a.getContext('2d');
  
  a.beginPath();
  a.clearRect(0,0,320,320);
  a.lineWidth = 5;
  a.strokeStyle = "black";
  a.lineCap = 'round';
  a.moveTo(105,10);
  a.lineTo(105,310);
  a.moveTo(220,10);
  a.lineTo(220,310);
  a.moveTo(10,100);
  a.lineTo(310,100);
  a.moveTo(10,210);
  a.lineTo(310,210);
  a.stroke();
}
function setpos(x,y) {
  if ( x <=110 && y <= 105 ) 
    pos = 1;
  else if ( x <= 225 && y <= 105 )
    pos = 2;
  else if ( x <= 320 && y <= 105 )
    pos = 3;
  else if ( x <= 110 && y <= 215 )
    pos = 4;
  else if ( x <= 225 && y <= 215 )
    pos = 5;
  else if ( x <= 320 && y <= 215 )
    pos = 6;
  else if ( x <= 110 && y <= 320 )
    pos = 7;
  else if (  x <= 225 && y <= 320 )
    pos = 8;
  else if ( x <= 320 &&  y <= 320 )
    pos = 9;
}
function game() {
  var e = new Object();
  table.addEventListener('click',function(e) { 
    e['x'] = e.layerX;
    e['y'] = e.layerY;
    setpos(e['x'],e['y']);
    
    
    if ( gamestatus == false ) {
      if ( turn == 0 ) {
        drawtic(table,pos);
        gamechecker();
      }
      else if ( turn == 1 ) {
        drawtac(table,pos);
        gamechecker();
      }
    }
    playerturn();
  });
}
function gamechecker() {
  if (
    (poss[1] == poss[2] && poss[2] == poss[3] && poss[1] == 1) ||
    (poss[4] == poss[5] && poss[5] == poss[6] && poss[4] == 1) ||
    (poss[7] == poss[8] && poss[8] == poss[9] && poss[7] == 1) ||
    (poss[1] == poss[4] && poss[4] == poss[7] && poss[1] == 1) ||
    (poss[2] == poss[5] && poss[5] == poss[8] && poss[2] == 1) ||
    (poss[3] == poss[6] && poss[6] == poss[9] && poss[3] == 1) ||
    (poss[1] == poss[5] && poss[5] == poss[9] && poss[1] == 1) ||
    (poss[3] == poss[5] && poss[5] == poss[7] && poss[3] == 1)
  ) {
    document.getElementById('gamestatus').innerHTML = "X won!";
    alert("X won!!!!!");
    poss[1] = false;
    poss[2] = false;
    poss[3] = false;
    poss[4] = false;
    poss[5] = false;
    poss[6] = false;
    poss[7] = false;
    poss[8] = false;
    poss[9] = false;
    gamestatus = true;
    elementReset.className = 'animate';
  }
  else if (
    (poss[1] == poss[2] && poss[2] == poss[3] && poss[1] == 2) ||
    (poss[4] == poss[5] && poss[5] == poss[6] && poss[4] == 2) ||
    (poss[7] == poss[8] && poss[8] == poss[9] && poss[7] == 2) ||
    (poss[1] == poss[4] && poss[4] == poss[7] && poss[1] == 2) ||
    (poss[2] == poss[5] && poss[5] == poss[8] && poss[2] == 2) ||
    (poss[3] == poss[6] && poss[6] == poss[9] && poss[3] == 2) ||
    (poss[1] == poss[5] && poss[5] == poss[9] && poss[1] == 2) ||
    (poss[3] == poss[5] && poss[5] == poss[7] && poss[3] == 2)
  ) {
    document.getElementById('gamestatus').innerHTML = "O won!";
    alert("O won!!!!!");
    poss[1] = false;
    poss[2] = false;
    poss[3] = false;
    poss[4] = false;
    poss[5] = false;
    poss[6] = false;
    poss[7] = false;
    poss[8] = false;
    poss[9] = false;
    gamestatus = true;
    elementReset.className = 'animate';
   }
else if (
     poss[1] != 0 && poss[2] != 0 && poss[3] != 0 && poss[4] != 0 &&
     poss[5] != 0 && poss[6] != 0 && poss[7] != 0 && poss[8] != 0 &&
     poss[9] != 0
  ) {
    document.getElementById('gamestatus').innerHTML = "Both of you lose!";
    alert("Both of you lose!");
    poss[1] = false;
    poss[2] = false;
    poss[3] = false;
    poss[4] = false;
    poss[5] = false;
    poss[6] = false;
    poss[7] = false;
    poss[8] = false;
    poss[9] = false;
    gamestatus = true;
    elementReset.className = 'animate';
   }
}
function playerturn() {
  
  if ( turn == 0 )
    document.getElementById('turn').innerHTML = "X Turn.";
  else
    document.getElementById('turn').innerHTML = "O Turn.";
}
function reset() {
  drawtable(table);
  poss[1] = 0;
  poss[2] = 0;
  poss[3] = 0;
  poss[4] = 0;
  poss[5] = 0;
  poss[6] = 0;
  poss[7] = 0;
  poss[8] = 0;
  poss[9] = 0;
  gamestatus = false;
  document.getElementById('gamestatus').innerHTML = "";
  elementReset.className = 'reset';
}
game();
playerturn();
