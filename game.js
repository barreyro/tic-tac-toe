$(document).ready(function() {
  var MOVES = ["","","",
               "","","",
               "","",""];
  var COMPUTERTURN = false;
  var COMPUTER;
  var HUMAN;

  $('#board').hide();
  $('.player-choice').click(function() {
    HUMAN = $(this).html();
    if (HUMAN === 'X') {
      COMPUTER = 'O';
    } else {
      COMPUTER = 'X';
    }
    $('.player-select').hide();
    $('#board').fadeIn();
  });

  function checkWinner(MOVES, player) {
    if ((MOVES[0] === player && MOVES[1] === player && MOVES[2] === player) ||
        (MOVES[3] === player && MOVES[4] === player && MOVES[5] === player) ||
        (MOVES[6] === player && MOVES[7] === player && MOVES[8] === player) ||
        (MOVES[0] === player && MOVES[6] === player && MOVES[6] === player) ||
        (MOVES[1] === player && MOVES[4] === player && MOVES[7] === player) ||
        (MOVES[2] === player && MOVES[5] === player && MOVES[8] === player) ||
        (MOVES[0] === player && MOVES[4] === player && MOVES[8] === player) ||
        (MOVES[6] === player && MOVES[4] === player && MOVES[2] === player)
    ) {
      return true;
    } else {
      return false;
    }

  }

  function checkTie(MOVES) {
    var totalMoves = MOVES.join('').length;
    var tieStatus = (totalMoves === 9) ? true : false;
    return tieStatus;
  }

  function makeValidMove(tilePosition, MOVES) {
    var validStatus = (MOVES[tilePosition] === '') ? true : false;
    var playerMarker = (COMPUTERTURN === false) ? 'x' : 'o'; // x denotes humans, o denotes computer

    if (validStatus === true) {
      MOVES[tilePosition] = playerMarker;
      COMPUTERTURN = true;
      return true;
    }
    return false;
  }


});
