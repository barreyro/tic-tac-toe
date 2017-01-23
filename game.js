$(document).ready(function() {
  var moves = ["","","",
               "","","",
               "","",""];

  var currentPlayer = "human";

  function checkWinner(moves, player) {
    if ((moves[0] === player && moves[1] === player && moves[2] === player) ||
        (moves[3] === player && moves[4] === player && moves[5] === player) ||
        (moves[6] === player && moves[7] === player && moves[8] === player) ||
        (moves[0] === player && moves[6] === player && moves[6] === player) ||
        (moves[1] === player && moves[4] === player && moves[7] === player) ||
        (moves[2] === player && moves[5] === player && moves[8] === player) ||
        (moves[0] === player && moves[4] === player && moves[8] === player) ||
        (moves[6] === player && moves[4] === player && moves[2] === player)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function checkTie(moves) {
    var totalMoves = moves.join('').length;
    var tieStatus = (totalMoves === 9) ? true : false;
    return tieStatus;
  }

  function makeMove(currentPlayer, tilePosition, moves) {
    var newBoard = moves;
    var validStatus = (newBoard[tilePosition] === '') ? true : false;
    var playerMarker = (currentPlayer === 'human') ? 'x' : 'o';

    if (validStatus === true) {
      newBoard[tilePosition] = playerMarker;
      return newBoard;
    }
    return false;
  }
});


