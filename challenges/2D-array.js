/*** Retornar a soma máxima das ampulhetas dentro da matrix ***/

function resolve (arr) {
  let res = -Infinity

  const helper = (matrix= arr, start = 0, end = 3, col= 1) => {
      let row = 0;
      let currentSum = 0; 
      if (matrix.length < 3 ) return ;
      if( end > matrix[row].length ) {
          helper(matrix.slice(1))
          return
      };
      
      while (row < 3) {
        if (row === 1) (currentSum += matrix[row][col] || 0, row++)
        for (let j = start ; j < end; j++) currentSum += matrix[row][j] || 0;
        row++;
      }

      res = Math.max(res, currentSum);
      start = start+1;
      end = end+1;
      col = col+1;
      
      helper(matrix,  start, end, col)
      
  };

  helper()
  return res 
}
const arr1 = [
  [2, 4, 4,   2, 1, 3,   2, 4, 4,   2, 1, 3],
  [ , 20,  ,    , 9,  ,    , 5,  ,   , 8,  ],
  [1, 2, 4,   2, 1, 3,   1, 2, 4,   2, 1, 3],
  [2, 4, 4,   2, 1, 3,   2, 4, 4,   2, 1, 3],
  [ , 1,  ,    , 9,  ,    , 5,  ,    , 8,  ],
  [1, 2, 4,   2, 1, 3,   1, 2, 4,   2, 1, 3],
  [2, 4, 4,   2, 1, 3,   2, 4, 4,   2, 1, 3],
  [ , 1,  ,    , 9,  ,    , 5,  ,    , 8,  ],
  [1, 2, 4,   2, 1, 3,   1, 2, 4,   2, 1, 3],
  [2, 4, 4,   2, 1, 3,   2, 4, 4,   2, 1, 3],
  [ , 1,  ,    , 9,  ,    , 5,  ,    , 8,  ],
  [1, 2, 4,   2, 1, 3,   1, 2, 4,   2, 1, 3],
  [2, 4, 4,   2, 1, 3,   2, 4, 4,   2, 1, 3],
  [ , 1,  ,    , 9,  ,    , 5,  ,    , 8,  ],
  [1, 2, 4,   2, 1, 3,   1, 2, 4,   2, 1, 3],
]

const arr2 =  [
  [1, 1, 1, 0, 0, 0],
  
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]

console.log(resolve(arr1))