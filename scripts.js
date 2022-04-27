const gameBoard = (() => {
    const board = [null, null, null, null, null, null, null, null, null];
    const playerChoice = function(choice, cell) {
      board[cell] = choice;
    }
    const threeInARow = function() {
      
      if (board[0] === board[1] && board[0] === board[2] && board[1] === board[2] 
         || board[3] === board[4] && board[3] === board[5] && board[4] === board[5]
         || board[6] === board[7] && board[6] === board[8] && board[7] === board[8]
         || board[0] === board[3] && board[0] === board[6] && board[3] === board[6]
         || board[1] === board[4] && board[1] === board[7] && board[4] === board[7]
         || board[2] === board[5] && board[2] === board[8] && board[5] === board[8]
         || board[0] === board[4] && board[0] === board[8] && board[4] === board[8]
         || board[2] === board[4] && board[2] === board[6] && board[4] === board[6]) {
        //return declareWinner(activePlayer)
        return 'winner!';
      }
    }
    return {
      board,
      playerChoice,
      threeInARow,
    };
  })();
  
  
  //module returns the functions we want publicly available(like add, sub)
  
  gameBoard.playerChoice('o', 2);
  gameBoard.playerChoice('x', 0);
  gameBoard.playerChoice('o', 1);
  gameBoard.playerChoice('x', 3);
  gameBoard.playerChoice('0', 4);
  gameBoard.playerChoice('x', 5);
  gameBoard.playerChoice('o', 7);
  gameBoard.playerChoice('o', 6);
  gameBoard.playerChoice('x', 8);
  console.log(gameBoard.board);
  console.log(gameBoard.threeInARow());
  
  // create player objects, first create generic factory functions
  // displayController module which accesses gameboard and checks array and displays changes, look into video where he had his personChange function
  // can check if the spot in the array is not null, to know if a player has already chosen that spot
  
  // Each little piece of functionality should be able to fit in the game, player or gameboard objects
  
  // make logic for a tie, board is full and no winner
  
  