const Player = (name) => {
  return { name };
};
let playerX = Player("X");
let playerO = Player("O");

const game = (() => {
  const board = [null, null, null, null, null, null, null, null, null];
  let currentPlayer = playerX;
  let turnCount = 0;
  let gameOver = false;
  let winner;
  const playTurn = function () {
    if (gameOver === false) {
      if (turnCount >= 8) {
        console.log("tie game");
        console.log(turnCount);
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
        console.log(`Player ${currentPlayer.name} is the winner!`);
        winner = currentPlayer.name;
        gameOver = true;
      }
      turnCount++;
    }
  };
  return {
    board,
    playTurn,
    currentPlayer,
    turnCount,
    gameOver,
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
    if (game.gameOver === false) {
      if (game.board[cell.id] === null) {
        cell.textContent = game.currentPlayer.name;
        game.board[cell.id] = game.currentPlayer.name;
        if (game.currentPlayer === playerX) {
          game.currentPlayer = playerO;
        } else {
          game.currentPlayer = playerX;
        }
        game.playTurn();
        console.log(game.turnCount);
      }
    }
  };
})();
let playerNames = ["Player 1", "Player2"];
const nameInput = document.querySelector(".playerInput1");
nameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    playerNames[0] = nameInput.value;
    const playerContainer1 = document.querySelector(".playerContainer1");
    const playerDisplay = document.createElement("p");
    playerDisplay.textContent = nameInput.value;
    playerDisplay.setAttribute("class", "playerDisplay");
    playerContainer1.removeChild(nameInput);
    playerContainer1.appendChild(playerDisplay);
  }
});

// const Player = (name) => {
//     const sayHi = () => console.log(`I am player ${name}`);
//     const x = document.querySelector('.playerSelectionX');
//     const o = document.querySelector('.playerSelectionO');
//     let myTurn = false;
//     let XorO = '';
//     const changeName = name => {
//       XorO = name;
//       console.log(`${XorO} was changed`);
//     }
//     if (name === 1 && XorO === '') {
//       x.addEventListener('click', event => {
//         changeName('x');
//       });
//       o.addEventListener('click', event => {
//         XorO = 'o';
//         console.log('i am o');
//         myTurn = true;
//       });
//     } else if (name === 2) {
//       if (player1.XorO === 'x') {
//         XorO = 'o';
//       } else if (player1.XorO === 'o') {
//         XorO = 'x';
//       }

//     }
// be able to make choice or not
// const setName = name => {
//   console.log(`I'm ${name}`);
//   const playerX = Player(name);
//   playerX.turnOrder = 'first';
//   return playerX;
// }
// x.addEventListener('click', event => {
//     setName('x');
//     console.log('this is an event');
//   });

//   return { name, sayHi, myTurn, XorO };
// }

// let player1 = Player(1);
// let player2 = Player(2);

// const playerO = Player('o');
// console.log(playerX.set());

// playerfactory should tell me who the current player is
// each player is x or o. 'game' can decide "whose turn is it?"
//module returns the functions we want publicly available(like add, sub)

// gameBoard.playerChoice('o', 2);
// gameBoard.playerChoice('x', 0);
// gameBoard.playerChoice('o', 1);
// gameBoard.playerChoice('x', 3);
// gameBoard.playerChoice('o', 4);
// gameBoard.playerChoice('x', 5);
// gameBoard.playerChoice('o', 7);
// gameBoard.playerChoice('o', 6);
// gameBoard.playerChoice('x', 8);
// console.log(gameBoard.board);
// console.log(gameBoard.endGame());

// create player objects, first create generic factory functions
// displayController module which accesses gameboard and checks array and displays changes, look into video where he had his personChange function
// can check if the spot in the array is not null, to know if a player has already chosen that spot

// Each little piece of functionality should be able to fit in the game, player or gameboard objects

// make logic for a tie, board is full and no winner

//switch back to old version, update reset button, just use game over
//figure out why activegame won't update in the game object
//player name input, button to start, restart the game, and a display element to declare winner

// const Player = (name) => {
//     const sayHi = () => console.log(`I am player ${name}`);
//     const x = document.querySelector('.playerSelectionX');
//     const o = document.querySelector('.playerSelectionO');
//     let myTurn = false;
//     let XorO = '';
//     const changeName = name => {
//       XorO = name;
//       console.log(`${XorO} was changed`);
//     }
//     if (name === 1 && XorO === '') {
//       x.addEventListener('click', event => {
//         changeName('x');
//       });
//       o.addEventListener('click', event => {
//         XorO = 'o';
//         console.log('i am o');
//         myTurn = true;
//       });
//     } else if (name === 2) {
//       if (player1.XorO === 'x') {
//         XorO = 'o';
//       } else if (player1.XorO === 'o') {
//         XorO = 'x';
//       }

//     }
// be able to make choice or not
// const setName = name => {
//   console.log(`I'm ${name}`);
//   const playerX = Player(name);
//   playerX.turnOrder = 'first';
//   return playerX;
// }
// x.addEventListener('click', event => {
//     setName('x');
//     console.log('this is an event');
//   });

//   return { name, sayHi, myTurn, XorO };
// }

// let player1 = Player(1);
// let player2 = Player(2);

// const playerO = Player('o');
// console.log(playerX.set());

// playerfactory should tell me who the current player is
// each player is x or o. 'game' can decide "whose turn is it?"
//module returns the functions we want publicly available(like add, sub)

// gameBoard.playerChoice('o', 2);
// gameBoard.playerChoice('x', 0);
// gameBoard.playerChoice('o', 1);
// gameBoard.playerChoice('x', 3);
// gameBoard.playerChoice('o', 4);
// gameBoard.playerChoice('x', 5);
// gameBoard.playerChoice('o', 7);
// gameBoard.playerChoice('o', 6);
// gameBoard.playerChoice('x', 8);
// console.log(gameBoard.board);
// console.log(gameBoard.endGame());

// create player objects, first create generic factory functions
// displayController module which accesses gameboard and checks array and displays changes, look into video where he had his personChange function
// can check if the spot in the array is not null, to know if a player has already chosen that spot

// Each little piece of functionality should be able to fit in the game, player or gameboard objects

// make logic for a tie, board is full and no winner

// const Player = (name) => {
//   return { name };
// };
// let playerX = Player("X");
// let playerO = Player("O");

// const game = (() => {
//   let currentPlayer = playerX;
//   let turnCount = 0;
//   let activeGame = false;
//   let winner;
//   const playTurn = () => {
//     console.log(game.activeGame);
//     gameBoard.board;
//     if (game.activeGame) {
//       if (
//         (gameBoard.board[0] === gameBoard.board[1] &&
//           gameBoard.board[0] === gameBoard.board[2] &&
//           gameBoard.board[1] === gameBoard.board[2] &&
//           gameBoard.board[0] !== null) ||
//         (gameBoard.board[3] === gameBoard.board[4] &&
//           gameBoard.board[3] === gameBoard.board[5] &&
//           gameBoard.board[4] === gameBoard.board[5] &&
//           gameBoard.board[3] !== null) ||
//         (gameBoard.board[6] === gameBoard.board[7] &&
//           gameBoard.board[6] === gameBoard.board[8] &&
//           gameBoard.board[7] === gameBoard.board[8] &&
//           gameBoard.board[6] !== null) ||
//         (gameBoard.board[0] === gameBoard.board[3] &&
//           gameBoard.board[0] === gameBoard.board[6] &&
//           gameBoard.board[3] === gameBoard.board[6] &&
//           gameBoard.board[0] !== null) ||
//         (gameBoard.board[1] === gameBoard.board[4] &&
//           gameBoard.board[1] === gameBoard.board[7] &&
//           gameBoard.board[4] === gameBoard.board[7] &&
//           gameBoard.board[1] !== null) ||
//         (gameBoard.board[2] === gameBoard.board[5] &&
//           gameBoard.board[2] === gameBoard.board[8] &&
//           gameBoard.board[5] === gameBoard.board[8] &&
//           gameBoard.board[2] !== null) ||
//         (gameBoard.board[0] === gameBoard.board[4] &&
//           gameBoard.board[0] === gameBoard.board[8] &&
//           gameBoard.board[4] === gameBoard.board[8] &&
//           gameBoard.board[0] !== null) ||
//         (gameBoard.board[2] === gameBoard.board[4] &&
//           gameBoard.board[2] === gameBoard.board[6] &&
//           gameBoard.board[4] === gameBoard.board[6] &&
//           gameBoard.board[2] !== null)
//       ) {
//         console.log(`Player ${game.currentPlayer.name} is the winner!`);
//         winner = game.currentPlayer.name;
//         activeGame = false;
//       } else if (turnCount >= 8) {
//         console.log("tie game");
//         activeGame = false;
//       }
//       game.turnCount++;
//     }
//   };
//   const resetGame = () => {
//     game.activeGame = true;
//     game.currentPlayer = playerX;
//   };
//   return {
//     playTurn,
//     currentPlayer,
//     turnCount,
//     activeGame,
//     resetGame,
//   };
// })();

// const gameBoard = (() => {
//   let board = [null, null, null, null, null, null, null, null, null];
//   const cells = Array.from(document.querySelectorAll(".tttCell"));
//   for (let i = 0; i < cells.length; i++) {
//     cells[i].addEventListener("click", (e) => {
//       addChoice(cells[i]);
//     });
//   }
//   const addChoice = (cell) => {
//     console.log(game.activeGame + " gameboard");
//     if (game.activeGame) {
//       if (board[cell.id] === null) {
//         cell.textContent = game.currentPlayer.name;
//         board[cell.id] = game.currentPlayer.name;
//         if (game.currentPlayer === playerX) {
//           game.currentPlayer = playerO;
//         } else {
//           game.currentPlayer = playerX;
//         }
//         game.playTurn();
//         console.log(game.turnCount);
//       }
//     }
//   };
//   const resetButton = document.querySelector(".start-button");
//   resetButton.addEventListener("click", (e) => {
//     board = [null, null, null, null, null, null, null, null, null];
//     game.resetGame();
//     cells.forEach((element) => {
//       element.textContent = "";
//     });
//   });
//   return {
//     board,
//   };
// })();
