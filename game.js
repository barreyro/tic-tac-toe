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

  $('.tile').on('click', function() {
    var tilePosition = $(this).data().position;

    if (MOVES[tilePosition] === '' && COMPUTERTURN === false) {
      $(this).html(HUMAN);
      MOVES[tilePosition] = HUMAN;
      var winStatus = checkWinner(HUMAN);
      if (winStatus) {
        $('#statusMessage').html('you win!');
      } else {
        var isTie = checkTie();
        if (isTie === false) {
          COMPUTERTURN = true;
          computerMove(MOVES);
        } else {
          $('#statusMessage').html('DRAW!');
        }
      }
    }
  });

  function checkWinner(player) {
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

  function checkTie() {
    var totalMoves = MOVES.join('').length;
    var tieStatus = (totalMoves === 9) ? true : false;
    return tieStatus;
  }
});
