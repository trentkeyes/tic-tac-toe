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
  let winCount = 0;
  const addWin = () => winCount++;
  const getWinCount = () => winCount;
  return {
    getName,
    getMarker,
    addWin,
    getWinCount,
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
  let gameOver = false;
  const getGameOver = () => gameOver;
  const playTurn = function () {
    if (gameOver === false) {
      if (
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
        display.declareEnd(currentPlayer.getName());
        currentPlayer.addWin();
        gameOver = true;
      } else if (turnCount >= 8) {
        display.declareEnd("tie");
        gameOver = true;
      }
      turnCount++;
    }
  };
  const resetGame = () => {
    gameOver = false;
    board = [null, null, null, null, null, null, null, null, null];
    display.clearBoard();
    turnCount = 0;
    currentPlayer = player1;
    display.declareEnd("clear");
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
    cells[i].textContent = "";
    cells[i].addEventListener("click", (event) => {
      addChoice(cells[i]);
    });
  }
  const addChoice = (cell) => {
    if (game.getGameOver() === false && cell.textContent === "") {
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
  const endGame = document.querySelector(".endGame");
  const declareEnd = (winOrTie) => {
    if (winOrTie === "clear") {
      endGame.textContent = "";
    } else if (winOrTie === "tie") {
      endGame.textContent = "It's a tie! Start a new game.";
    } else {
      endGame.textContent = `${winOrTie} won the game!`;
    }
  };
  return {
    clearBoard,
    declareEnd,
  };
})();

//add a display element to declare winner
//reset player after game end
