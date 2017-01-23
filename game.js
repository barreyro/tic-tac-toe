$(document).ready(function() {
  var BOARD = ["","","",
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

    if (BOARD[tilePosition] === '' && COMPUTERTURN === false) {
      $(this).html(HUMAN);
      BOARD[tilePosition] = HUMAN;
      var winStatus = checkWinner(HUMAN);
      if (winStatus) {
        $('#statusMessage').html('you win!');
      } else {
        var isTie = checkTie();
        if (isTie === false) {
          COMPUTERTURN = true;
          computerMove(BOARD);
        } else {
          $('#statusMessage').html('DRAW!');
        }
      }
    }
  });

  function checkWinner(player) {
    if ((BOARD[0] === player && BOARD[1] === player && BOARD[2] === player) ||
        (BOARD[3] === player && BOARD[4] === player && BOARD[5] === player) ||
        (BOARD[6] === player && BOARD[7] === player && BOARD[8] === player) ||
        (BOARD[0] === player && BOARD[6] === player && BOARD[6] === player) ||
        (BOARD[1] === player && BOARD[4] === player && BOARD[7] === player) ||
        (BOARD[2] === player && BOARD[5] === player && BOARD[8] === player) ||
        (BOARD[0] === player && BOARD[4] === player && BOARD[8] === player) ||
        (BOARD[6] === player && BOARD[4] === player && BOARD[2] === player)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function checkTie() {
    var totalMoves = BOARD.join('').length;
    var tieStatus = (totalMoves === 9) ? true : false;
    return tieStatus;
  }
});
