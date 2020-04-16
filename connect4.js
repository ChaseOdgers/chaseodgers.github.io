/* This is for EECS 368 with professor Andy Gill at the University of Kansas 
  April 16th 2020
  Authored by Chase Odgers, using P5.js libraries and tips from The Coding Train youtube channel
 */
var pieces= [];
var player1 = 1;
var player2 = 2;
var column = 0;
var row = 0;
var currentPlayer = 1;
var winner = 0;
let board = []
//Setup is a required function for P5.js and it handles the drawing and reset of everything on the board as well as filling the array with 0's to then be marked
function setup() {
  createCanvas(1000, 1000);
  playerBanner();
  var button = createButton("reset");
  button.position(0,0);
  button.mousePressed(resetSketch);
  resetSketch();
}
//mouse pressed handles the entire program, registering mouse location and using that information to inform reactions within other functions
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
//set current player is used to set which player is currently at turn
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
//column select takes in the mouse x, y location from mouse pressed and determines which column the user must have clicked on
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
//row set reads through the board array and determines where the first empty row in the selected column is, then sets the row variable to that row
function rowSet(){
  row = -1;
  for(let i=5; i>=0; i--){
    if(board[column][i]===0){
      row = i;
      break;
    }
  }
}
//vertical win iterates over the array checking for 4 of the players numbers in a row (either four 1s for player one or four 2s four player 2) just vertical WINS
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
//match check takes in 4 values from get piece and if all four match and are not out undefined or 0 then it pronounces a win
function matchCheck(one,two,three,four){
  return(one===two && one===three && one===four && one !== undefined && one !== 0);
}
//get piece takes in an x and a y value and returns the value within the array at that point
function getPiece(_x,_y){
  x=_x
  y=_y
  return(board[x][y]);
}
//horizontal win checks for 4 pieces horizontally
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
//diagonal win checks for a win top to bottom diagonal or bottom to top diagonal
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
//winMessage is what displays once a win has been detected
function winMessage(){
  strokeWeight(2);
  stroke(50);
  rect(150,200,400,200);
  textSize(50);
  fill(50);
  text('Player '+ winner + ' WINS!!', 175,300);
}
//reset board is unused
function resetBoard(){
  for(let x=0; x<7;x++){
    board[x]=[];
    for(let y=0; y<6; y++){
      let emptyValue = 0;
      board[x][y] = emptyValue;
    }
  }
}
//add piece draws a circle at the row column location determined by get row get column
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
//draw is required for P5.js but is unused in this program
function draw() {

}
//show player is what highlights either player 1 or player 2 to demonstrate turn
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
//player banner creates the rectangles and text on the side of the game board saying player 1 or player 2
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
//reset sketch is tied to the reset button as well as in the setup function and is used to set the board back to position 0
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
//Board Class handles the drawing of the circles and rectangle that make up the game board, member function show is called in setup
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
