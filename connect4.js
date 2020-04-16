var pieces= [];
var player1 = 1;
var player2 = 2;
var column = 0;
var row = 0;
var currentPlayer = 1;
var winner = 0;
let board = []

function setup() {
  createCanvas(1000, 1000);
  playerBanner();
  var button = createButton("reset");
  button.position(0,0);
  button.mousePressed(resetSketch);
  resetSketch();
}
function mousePressed(){
  columnSelect(mouseX,mouseY);
  rowSet();
  if(column !== -1){
  if(row!== -1){
  addPiece();
  verticalWin();
  diagonalWin();
  horizontalWin();
  setCurrentPlayer();
  showPlayer();
  console.log('currentplayer:' + currentPlayer);
}}}
function setCurrentPlayer(){
  if(currentPlayer == 1){
    currentPlayer = 2;
  //  console.log(currentPlayer);
  }
  else{
    currentPlayer = 1;
  //  console.log(currentPlayer);
  }
}
function columnSelect(_x,_y){
  x= _x;
  y= _y;
  //column 1
  if((x>0)&&(x<100)&&(y>0)&&(y<600))
  {
    column = 0;
  }
  //column 2
  if((x>100)&&(x<200)&&(y>0)&&(y<600))
  {
    column=1;
  //  console.log(column);
  }
  //column 3
  if((x>200)&&(x<300)&&(y>0)&&(y<600))
  {
  //  console.log(column);
    column =2;
  }
  //column 4
  if((x>300)&&(x<400)&&(y>0)&&(y<600))
  {
    column=3;
  //  console.log(column);
  }
  //column 5
  if((x>400)&&(x<500)&&(y>0)&&(y<600))
  {
    column=4;
  //  console.log(column);
  }
  //column6
  if((x>500)&&(x<600)&&(y>0)&&(y<600))
  {
    column=5;
  //  console.log(column);
  }
  //column7
  if((x>600)&&(x<700)&&(y>0)&&(y<600))
  {
    column=6;
  //  console.log(column);
  }
  if(((x>700) || (x<0)))
  {
    column=-1;
  //  console.log(column);
  }
}
function rowSet(){
  row = -1;
  for(let i=5; i>=0; i--){
    if(board[column][i]===0){
      row = i;
      break;
    }
  }
}
function verticalWin(){
  for(let x=0; x<7; x++){
    for(let y=0; y<4; y++){
      if(matchCheck(getPiece(x,y),getPiece(x,y+1),getPiece(x,y+2),getPiece(x,y+3))){
        console.log('vertical win');
        winner = currentPlayer;
        winMessage();

      }
    }
  }
}
function matchCheck(one,two,three,four){
  return(one===two && one===three && one===four && one !== undefined && one !== 0);
}
function getPiece(_x,_y){
  x=_x
  y=_y
  return(board[x][y]);
}
function horizontalWin(){
  for(let y=0; y<6; y++){
    for(let x=0; x<4; x++){
      if(matchCheck(getPiece(x,y),getPiece(x+1,y),getPiece(x+2,y),getPiece(x+3,y))){
        console.log('horizontal win');
        winner = currentPlayer;
        winMessage();

      }
    }
  }
}
function diagonalWin(){
  for(let y=0; y<6; y++){
    for(let x=0; x<4; x++){
      if(matchCheck(getPiece(x,y),getPiece(x+1,y+1),getPiece(x+2,y+2),getPiece(x+3,y+3))){
        console.log('diagonal win');
        winner = currentPlayer;
        winMessage();

      }
    }
  }
  for(let y=0; y<6; y++){
    for(let x=0; x<4; x++){
      if(matchCheck(getPiece(x,y),getPiece(x+1,y-1),getPiece(x+2,y-2),getPiece(x+3,y-3))){
        console.log('diagonal win');
        winner = currentPlayer;
        winMessage();

      }
    }
}
}
function winMessage(){
  strokeWeight(2);
  stroke(50);
  rect(150,200,400,200);
  textSize(50);
  fill(50);
  text('Player '+ winner + ' WINS!!', 175,300);
}
function resetBoard(){
  for(let x=0; x<7;x++){
    board[x]=[];
    for(let y=0; y<6; y++){
      let emptyValue = 0;
      board[x][y] = emptyValue;
    }
  }
}
function addPiece(){
  if (currentPlayer == 1){
    noStroke();
    fill('red');
    circle(50+(100*column),150+(100*row),75);
    board[column][row] = currentPlayer;

  }
  if (currentPlayer == 2){
    noStroke();
    fill('yellow');
    circle(50+(100*column),150+(100*row),75);
    board[column][row] = currentPlayer;
  }
}
function draw() {

}
function showPlayer(){
  if(currentPlayer == 1){
    noFill();
    stroke('rgb(0,255,0)');
    rect(705,95,110,50);
    erase();
    rect(705,155,110,50);
    noErase();
  }
  if(currentPlayer == 2){
    noFill();
    stroke('rgb(0,255,0)');
    rect(705,155,110,50);
    erase();

    rect(705,95,110,50);
    noErase();
  }
}
function playerBanner(){
  stroke(50);
  strokeWeight(1);
  fill('red');
  rect(710,100,100,40);
  textSize(20);
  fill('black');
  text('Player 1', 725, 125);
  stroke(50);
  strokeWeight(1);
  fill('yellow');
  rect(710,160,100,40);
  textSize(20);
  fill('black');
  text('Player 2', 725, 185);
}
function resetSketch(){
  board1 = new Board();
  board1.show();
  for(let x=0; x<7;x++){
    board[x]=[];
    for(let y=0; y<6; y++){
      let emptyValue = 0;
      board[x][y] = emptyValue;
    }
  }
}
class Board{
  constructor(){

  }
  show(){
    stroke(50);
    strokeWeight(3);
    fill('blue');
    rect(0,100,700,600);
    strokeWeight(0);
    rect(225,700,20,20);
    rect(450,700,20,20);
    strokeWeight(1);
    rect(200,720,292,25);
    for(let i=0; i<7; i++){
      for(let j=0; j<6; j++){
        stroke(150);
        strokeWeight(3);
        fill('white');
        circle(50+(100*i),150+(100*j),75);
      }
    }
  }
}
