const winboxOverlay = document.querySelector(".winbox-container");
const winboxMsg = document.querySelector(".winbox-msg");
const winboxBtn = document.querySelector(".winbox-main button");
winboxBtn.addEventListener("click", handleReset);

const players = ["X", "O"];
let activePlayer = 0;
let gameOver = false;
let drawCount = 0;
let box = document.querySelectorAll(".box");

const winCondition = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7],
  [2, 5, 8], [0, 4, 8], [2, 4, 6],
];

function handleWin(){
  for(const pattern of winCondition){
    let [a,b,c] = pattern;
    if(
      box[a].innerHTML !== "" &&
      box[a].innerHTML === box[b].innerHTML &&
      box[a].innerHTML === box[c].innerHTML
    ){
      box[a].innerHTML === "X"?player1Wins():player2Wins();
      return;
    }
  }
}

function handleDraw() {
  const isDraw = [...box].every(item=>item.innerHTML!=="");
  if (isDraw && !gameOver) {
    gameOver=true;
    winboxOverlay.classList.remove("hidden");
    winboxMsg.innerHTML = "!!!IT'S A DRAW!!!";
  }
}
function player1Wins() {
  gameOver=true;
  winboxOverlay.classList.remove("hidden");
  winboxMsg.innerHTML = "!!!PLAYER 1 WINS!!!";
}
function player2Wins() {
  gameOver=true;
  winboxOverlay.classList.remove("hidden");
  winboxMsg.innerHTML = "!!!PLAYER 2 WINS!!!";
}

function handleReset() {
  winboxOverlay.classList.add("hidden");
  gameOver = false;
  activePlayer = 0;
  for (const item of box) {
    item.innerHTML = "";
  }
  drawCount = 0;
}

for (const item of box) {
  item.addEventListener("click", () => {
    if (item.innerHTML !== "" || gameOver) return;

    item.innerHTML = players[activePlayer];
    handleWin();
    handleDraw();
    activePlayer = 1 - activePlayer;
  });
}

















//OLD CODE

// function handleWin() {
//   //rows
//   if (
//     box1.innerHTML === "X" &&
//     box2.innerHTML === "X" &&
//     box3.innerHTML === "X"
//   ) {
//     player1Wins();
//   }
//   if (
//     box4.innerHTML === "X" &&
//     box5.innerHTML === "X" &&
//     box6.innerHTML === "X"
//   ) {
//     player1Wins();
//   }
//   if (
//     box7.innerHTML === "X" &&
//     box8.innerHTML === "X" &&
//     box9.innerHTML === "X"
//   ) {
//     player1Wins();
//   }
//   //column
//   if (
//     box1.innerHTML === "X" &&
//     box4.innerHTML === "X" &&
//     box7.innerHTML === "X"
//   ) {
//     player1Wins();
//   }
//   if (
//     box2.innerHTML === "X" &&
//     box5.innerHTML === "X" &&
//     box8.innerHTML === "X"
//   ) {
//     player1Wins();
//   }
//   if (
//     box3.innerHTML === "X" &&
//     box6.innerHTML === "X" &&
//     box9.innerHTML === "X"
//   ) {
//     player1Wins();
//   }
//   //diagonal
//   if (
//     box1.innerHTML === "X" &&
//     box5.innerHTML === "X" &&
//     box9.innerHTML === "X"
//   ) {
//     player1Wins();
//   }
//   if (
//     box3.innerHTML === "X" &&
//     box5.innerHTML === "X" &&
//     box7.innerHTML === "X"
//   ) {
//     player1Wins();
//   }
//   //for O
//   //rows
//   if (
//     box1.innerHTML === "O" &&
//     box2.innerHTML === "O" &&
//     box3.innerHTML === "O"
//   ) {
//     player2Wins();
//   }
//   if (
//     box4.innerHTML === "O" &&
//     box5.innerHTML === "O" &&
//     box6.innerHTML === "O"
//   ) {
//     player2Wins();
//   }
//   if (
//     box7.innerHTML === "O" &&
//     box8.innerHTML === "O" &&
//     box9.innerHTML === "O"
//   ) {
//     player2Wins();
//   }
//   //column
//   if (
//     box1.innerHTML === "O" &&
//     box4.innerHTML === "O" &&
//     box7.innerHTML === "O"
//   ) {
//     player2Wins();
//   }
//   if (
//     box2.innerHTML === "O" &&
//     box5.innerHTML === "O" &&
//     box8.innerHTML === "O"
//   ) {
//     player2Wins();
//   }
//   if (
//     box3.innerHTML === "O" &&
//     box6.innerHTML === "O" &&
//     box9.innerHTML === "O"
//   ) {
//     player2Wins();
//   }
//   //diagonal
//   if (
//     box1.innerHTML === "O" &&
//     box5.innerHTML === "O" &&
//     box9.innerHTML === "O"
//   ) {
//     player2Wins();
//   }
//   if (
//     box3.innerHTML === "O" &&
//     box5.innerHTML === "O" &&
//     box7.innerHTML === "O"
//   ) {
//     player2Wins();
//   }

// }
