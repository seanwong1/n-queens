/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n, board) {
  var solution = new Board({n: n});
  if (board) {
    solution = board;
  }

  for (var j = 0; j < n; j++) {
    for (var k = 0; k < solution.get(j).length; k++) {
      if (solution.get(j)[k] === 1) {
        continue;
      }
      solution.togglePiece(j, k);
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(j, k);
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});

  var helper = function(board, row) {
    if (row === n) {
      //var currentMatrix = JSON.parse(JSON.stringify(prevMatrix));
      solutionCount++;
      // solutionCount.push(currentMatrix);
    } else {
      for (var i = 0; i < n; i++) {
        board.togglePiece(row, i);
        if (!board.hasAnyRooksConflicts()) {
          helper(board, row + 1);
        }
        board.togglePiece(row, i);
      }
    }
  };

  helper(board, 0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n, board) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});

  var helper = function(board, row) {
    if (row === n) {
      //var currentMatrix = JSON.parse(JSON.stringify(prevMatrix));
      solutionCount++;
      // solutionCount.push(currentMatrix);
    } else {
      for (var i = 0; i < n; i++) {
        board.togglePiece(row, i);
        if (!board.hasAnyRooksConflicts()) {
          helper(board, row + 1);
        }
        board.togglePiece(row, i);
      }
    }
  };

  helper(board, 0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
