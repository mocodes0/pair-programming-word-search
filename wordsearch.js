//Pseudo Code
//1. understand how to see matrix (array of arrays) as rows and coloumns
//2. create the framework for new matrix that has the inverse of old matrix
//3. populate new matrix with the inverse values from old matrix => elements of rows is elements of columns and vice versa

const transpose = function(matrix) {
    const rows = matrix.length; // # of rows, to be looped thru
    const cols = matrix[0].length; // # of cols, to be looped thru
    
      // row = wordserch[0] -> that is row 1 to wordsearch[n] -> that is row n
      // coloumn = worserach[0][0] -> that is columnn 1 to worchsearch[0][n] that is coloumn n
  
    //inverse rows and columns
    // # of rows => # of coloumns
    // elements of rows => elements of columns
  
    const matrixTrans = [];
  
    for (let i = 0; i < cols; i++) { // building the empty framework for new matrix.
      matrixTrans[i] = Array(rows)  // Creating a new array (inside MatrixTrans using Array(rows)) for each cols in old array
    };
  
    for (let j = 0; j < rows; j++) { // rows = # of nested arrays inside main array
      for (let i = 0; i < cols; i++) { // cols = the elements of each array (since each row is the same, Matrix[0] = Matrix[X])
        matrixTrans[i][j] = matrix[j][i] //inversing the invidiual values
      }
    };
    return matrixTrans;
  };
  
  // Do not edit this function.
  const printMatrix = (matrix) => {
      for (let row of matrix) {
          for (const el of row) {
              process.stdout.write(el + " ");
          }
          process.stdout.write('\n')
      }
  }
  
  printMatrix(transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
  ]));
  
  console.log('----')
  
  printMatrix(transpose([
    [1, 2, 6],
    [3, 4, 6],
    [5, 6, 8]
  ]));
  
  console.log('----')
  
  printMatrix(transpose([
    [1, 2, 3, 4, 5, 6, 7]
  ]));
  