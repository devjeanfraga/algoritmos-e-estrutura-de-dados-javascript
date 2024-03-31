const solution = (arr) => {
  let leftDiagonal = 0, rightDiagonal = 0;
  let i = 0, j = arr.length-1;

  while ( i < arr.length && j >= 0 ) {
    leftDiagonal += arr[i][i] || 0;
    rightDiagonal += arr[i][j] || 0;
    i += 1;
    j -= 1;
  }
  return Math.abs(leftDiagonal-rightDiagonal);
}

let matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
  ]

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

console.log(solution(arr1));

let arr =  Array.from()