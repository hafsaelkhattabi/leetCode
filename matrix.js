function Matrix(matrix) {
    let arr = [];
    
    while (matrix.length > 0) {
      // Take the first row from the matrix
      arr.push(...matrix.shift());
      
      // Take the last element of each row and push to the array
      for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].length > 0) {
          arr.push(matrix[i].pop());
        }
      }
  
      // Take the last row in the matrix and reverse it change from ([7,6]) to ([6,7])
      if (matrix.length > 0) {
        arr.push(...matrix.pop().reverse());
      }
  
      // Take the first element of each row
      for (let i = matrix.length - 1; i >= 0; i--) {
        if (matrix[i].length > 0) {
          arr.push(matrix[i].shift());
        }
      }
    }
    console.log(matrix)
    
    return arr;
  }
  
  let matrix = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
  ];
  
  console.log(Matrix(matrix));
