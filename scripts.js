const Player = (name) => {
  let marker = "";
  const getName = () => name;
  const nameInputEvent = (e) => {
    if (e.key === "Enter") {
      const input = e.target.value;
      name = input;
      const playerDisplay = document.createElement("p");
      playerDisplay.textContent = input;
      playerDisplay.setAttribute("class", "playerDisplay");
      const parent = e.target.closest(".playerContainer");
      parent.removeChild(e.target);
      parent.appendChild(playerDisplay);
    }
  };
  //maybe add each of these to the individual player to stop the event from running twice
  const nameInput1 = document.querySelector(".playerInput1");
  nameInput1.addEventListener("keypress", nameInputEvent);
  const nameInput2 = document.querySelector(".playerInput2");
  nameInput2.addEventListener("keypress", nameInputEvent);
  return {
    getName,
    marker,
  };
};

let player1 = Player("Player 1");
player1.marker = "X";
let player2 = Player("Player 2");
player2.marker = "O";
let playerX;

const game = (() => {
  let board = [null, null, null, null, null, null, null, null, null];
  let currentPlayer = player1;
  const getCurrentPlayer = () => console.log(currentPlayer);
  let turnCount = 0;
  let gameOver = true;
  const getGameOver = () => gameOver;
  let winner;
  const playTurn = function () {
    if (gameOver === false) {
      console.log(board);
      if (turnCount >= 8) {
        console.log("tie game");
        gameOver = true;
      } else if (
        (board[0] === board[1] &&
          board[0] === board[2] &&
          board[1] === board[2] &&
          board[0] !== null) ||
        (board[3] === board[4] &&
          board[3] === board[5] &&
          board[4] === board[5] &&
          board[3] !== null) ||
        (board[6] === board[7] &&
          board[6] === board[8] &&
          board[7] === board[8] &&
          board[6] !== null) ||
        (board[0] === board[3] &&
          board[0] === board[6] &&
          board[3] === board[6] &&
          board[0] !== null) ||
        (board[1] === board[4] &&
          board[1] === board[7] &&
          board[4] === board[7] &&
          board[1] !== null) ||
        (board[2] === board[5] &&
          board[2] === board[8] &&
          board[5] === board[8] &&
          board[2] !== null) ||
        (board[0] === board[4] &&
          board[0] === board[8] &&
          board[4] === board[8] &&
          board[0] !== null) ||
        (board[2] === board[4] &&
          board[2] === board[6] &&
          board[4] === board[6] &&
          board[2] !== null)
      ) {
        console.log(`${currentPlayer.getName()} is the winner!`);
        winner = currentPlayer.getName();
        gameOver = true;
      }
      turnCount++;
    }
  };
  const resetGame = () => {
    gameOver = false;
    board = [null, null, null, null, null, null, null, null, null];
    gameBoard.cells.array.forEach((element) => {
      element.textContent = "";
    });
    console.log("reset");
  };
  return {
    playTurn,
    getGameOver,
    currentPlayer,
    getCurrentPlayer,
    resetGame,
    board,
  };
})();

const gameBoard = (() => {
  const cells = Array.from(document.querySelectorAll(".tttCell"));
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", (event) => {
      cells[i].id = i;
      addChoice(cells[i]);
    });
  }
  const addChoice = (cell) => {
    if (game.getGameOver() === false) {
      if (game.board[cell.id] === null) {
        cell.textContent = game.currentPlayer.marker;
        game.board[cell.id] = game.currentPlayer.marker;
        game.currentPlayer === player1
          ? (game.currentPlayer = player2)
          : (game.currentPlayer = player1);
        game.playTurn();
        game.getCurrentPlayer();
      }
    }
  };
  const resetButton = document.querySelector(".start-button");
  resetButton.addEventListener("click", game.resetGame);
  return {
    cells,
  };
})();

//switch back to old version, update reset button, just use game over
//figure out why activegame won't update in the game object
//player name input, button to start, restart the game, and a display element to declare winner
