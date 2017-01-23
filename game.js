$(document).ready(function() {
  var moves = ["","","",
               "","","",
               "","",""];

  function checkWinner(moves, player) {
    if ((move[0] === player && move[1] === player && move[2] === player) ||
        (move[3] === player && move[4] === player && move[5] === player) ||
        (move[6] === player && move[7] === player && move[8] === player) ||
        (move[0] === player && move[6] === player && move[6] === player) ||
        (move[1] === player && move[4] === player && move[7] === player) ||
        (move[2] === player && move[5] === player && move[8] === player) ||
        (move[0] === player && move[4] === player && move[8] === player) ||
        (move[6] === player && move[4] === player && move[2] === player)
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
});

