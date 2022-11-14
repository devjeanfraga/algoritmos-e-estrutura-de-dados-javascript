/*
magic square
the sum of column, line and diagonal are constant 
given a 3X3 matrix of integer inclusive range [1,9] 

[
 [8,3,4],
 [1,5,8],
 [6,4,2]
]

*/

function solution(s) {
  let cost = +Infinity, squares = [];
  let magicSquare = [ 
   [8,1,6], 
   [3,5,7], 
   [4,9,2]
  ];

  const reverse = (arr) => {
   let size = arr.length-1;
   for (let i = 0; i < (size/2); i++) {
    let temp = arr[i];
    arr[i] = arr[size-i];
    arr[size-i] = temp; 
   }
   return arr; 
  } 
  //flatten
  const flatten = (arr) => {
    let list = [];
    for (let i = 0; i < arr.length; i++) 
     if (Array.isArray(arr[i])) list = list.concat(flatten(arr[i]));
     else list.push(arr[i])
    return list; 
  }

  // Rotation to generate magic squares
  const generateMagicSquares = ( magicSqr = magicSquare, counter = 1, pos = 0) => {
   
   // Deep Copy
   let arr = JSON.parse(JSON.stringify(magicSqr));
   let temp;
   
   if (counter > 4) return;

   // Transpose 
   temp = arr[pos][2];
   arr[pos][2] = arr[pos+2][0];
   arr[pos+2][0] = temp; 

   temp = arr[pos][1];
   arr[pos][1] = arr[pos+1][0];
   arr[pos+1][0] = temp;

   temp = arr[pos+1][2];
   arr[pos+1][2] = arr[pos+2][1];
   arr[pos+2][1] = temp; 

   arr = arr.map(i => reverse(i))
   squares.push(arr)

   // reflete magic squares 
   if ( squares.length >= 4 ) {
     for (let i = 0; i < 4; i++) {
       let elReverse = JSON.parse(JSON.stringify(squares[i]))
       elReverse = reverse(elReverse);
       squares.push(elReverse);
     }
   };
   
   counter = counter+1
   generateMagicSquares(arr, counter);
  }

  // flatten input and generate magic squares
  s = flatten(s) 
  generateMagicSquares()

  // solution step
  for (let i = 0; i < 8; i++) {
    let sqr = flatten(squares[i]);
    let currentCost = 0
    for (let j = 0; j < s.length; j++) {
      currentCost+= Math.abs(sqr[j] - s[j])
    }
    cost =  Math.min(cost, currentCost);
  }

 return cost;
}
const matrix6 = [
[7,1,6],
[3,2,7],
[4,9,2]
];

console.log(solution(matrix6));