const game = (() => {
    const board = [null, null, null, null, null, null, null, null, null];
    const playerChoice = function(choice, cell) {
      if (!board[cell]) {
        board[cell] = choice;
      }
      
    }
    const endGame = function() {
      //three in a row?
      if (board[0] === board[1] && board[0] === board[2] && board[1] === board[2] 
         || board[3] === board[4] && board[3] === board[5] && board[4] === board[5]
         || board[6] === board[7] && board[6] === board[8] && board[7] === board[8]
         || board[0] === board[3] && board[0] === board[6] && board[3] === board[6]
         || board[1] === board[4] && board[1] === board[7] && board[4] === board[7]
         || board[2] === board[5] && board[2] === board[8] && board[5] === board[8]
         || board[0] === board[4] && board[0] === board[8] && board[4] === board[8]
         || board[2] === board[4] && board[2] === board[6] && board[4] === board[6]) {
           //should this be in another object, more about the game logic?
        //return declareWinner(activePlayer)
        return 'winner!';
      } else if (!board.includes(null)) {
        return 'tie game';
      }
    }
    return {
      board,
      playerChoice,
      endGame,
    };
  })();

  const gameBoard = (() => {
    const cells = Array.from(document.querySelectorAll('.tttCell'));
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', event => {
        cells[i].id = i;
        addChoice(cells[i]);
      });
    }
    const addChoice = cell => {
      cell.textContent = 'x';
      cell.style.color = 'blue';
      game.board[cell.id] = 'x';
      console.log(game.board);
      console.log(game.endGame());
    }
  })();
  

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
  
  