const Player = (name, marker) => {
  const getMarker = () => marker;
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
  if (marker === "X") {
    const nameInput1 = document.querySelector(".playerInput1");
    nameInput1.addEventListener("keypress", nameInputEvent);
  } else if (marker === "O") {
    const nameInput2 = document.querySelector(".playerInput2");
    nameInput2.addEventListener("keypress", nameInputEvent);
  }
  return {
    getName,
    getMarker,
  };
};

let player1 = Player("Player 1", "X");
let player2 = Player("Player 2", "O");

const game = (() => {
  let board = [null, null, null, null, null, null, null, null, null];
  const changeBoard = (index) => {
    if (board[index] === null && gameOver === false) {
      board[index] = currentPlayer.getMarker();
      playTurn();
      switchPlayer();
      console.log(currentPlayer.getName());
      console.log(board);
    }
  };
  let currentPlayer = player1;
  const switchPlayer = () => {
    currentPlayer === player1
      ? (currentPlayer = player2)
      : (currentPlayer = player1);
  };
  const getCurrentPlayer = () => currentPlayer.getMarker();
  let turnCount = 0;
  let gameOver = true;
  const getGameOver = () => gameOver;
  let winner;
  const playTurn = function () {
    if (gameOver === false) {
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
    display.clearBoard();
    console.log("reset");
  };
  return {
    getGameOver,
    getCurrentPlayer,
    resetGame,
    changeBoard,
  };
})();

const display = (() => {
  const cells = Array.from(document.querySelectorAll(".tttCell"));
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", (event) => {
      cells[i].id = i;
      addChoice(cells[i]);
    });
  }
  const addChoice = (cell) => {
    if (game.getGameOver() === false) {
      cell.textContent = game.getCurrentPlayer();
      game.changeBoard(cell.id);
    }
  };
  const resetButton = document.querySelector(".start-button");
  resetButton.addEventListener("click", game.resetGame);
  const clearBoard = () => {
    cells.forEach((element) => {
      element.textContent = "";
    });
  };
  return {
    clearBoard,
  };
})();

//add a display element to declare winner
