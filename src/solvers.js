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

window.zeroArray = function(n){
  var newArray = []
  for(var i = 0; i < n; i++){
    newArray.push(Array.apply(null, new Array(n)).map(Number.prototype.valueOf,0));
  }
  return newArray;
}

window.insert = function(key, n){
  var result = window.zeroArray(n);
  for(var i = 0; i<n; i++){
    result[i][key[i]] = 1;
  }
  return result;
}

window.findNRooksSolution = function(n) {
  var solution;


  var recursive = function(key){
    if(!solution){
      if(key.length === n){
        solution = window.insert(key,n);
        return;
      }
      for(var i = 0; i < n; i ++){
        if(key.indexOf(i) < 0){
          recursive(key.concat(i));
        }
      }
    }
  }
  recursive([]);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution=0;

  var recursive = function(key){

    if(key.length === n){
//      solution.push(window.insert(key,n));
        solution++;
    }
    for(var i = 0; i < n; i ++){
      if(key.indexOf(i) < 0){
        recursive(key.concat(i));
      }
    }
  }
  recursive([]);

  console.log('Number of solutions for ' + n + ' rooks:', solution);
  return solution;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution;


  var recursive = function(key, majorKey, minorKey){
    if(!solution){
      if(key.length === n){
        solution = window.insert(key,n);
        return;
      }
      for(var i = 0; i < n; i ++){
        if(key.indexOf(i) < 0){
          var majorValue = i - key.length;
          var minorValue = i + key.length;
          if(majorKey.indexOf(majorValue) < 0 && minorKey.indexOf(minorValue) < 0){
            recursive(key.concat(i), majorKey.concat(majorValue), minorKey.concat(minorValue));
          }
        }
      }
    }
  }
  recursive([],[],[]);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution || window.zeroArray(n);
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = 0;


  var recursive = function(key, majorKey, minorKey){
      if(key.length === n){
      //  solution.push(window.insert(key,n));
      solution++;
      }
      for(var i = 0; i < n; i ++){
        if(key.indexOf(i) < 0){
          var majorValue = i - key.length;
          var minorValue = i + key.length;
          if(majorKey.indexOf(majorValue) < 0 && minorKey.indexOf(minorValue) < 0){
            recursive(key.concat(i), majorKey.concat(majorValue), minorKey.concat(minorValue));
          }
        }
      }
    }
  recursive([],[],[]);

  console.log('Number of solutions for ' + n + ' queens:', solution);
  return solution;
};
