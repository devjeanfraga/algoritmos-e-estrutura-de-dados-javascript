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
  let middle = 5, cost = 0, squares = [];
  let magicSquare = [ 
   [8,3,4], 
   [1,5,9], 
   [6,7,2] ];
  
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
   
   if (counter > 8) return;
   if (counter > 4) magicSqr = magicSqr.map(i => i.reverse()) 
   
   temp = arr[pos][2];
   arr[pos][2] = arr[pos+2][0];
   arr[pos+2][0] = temp; 

   temp = arr[pos][1];
   arr[pos][1] = arr[pos+1][0];
   arr[pos+1][0] = temp;

   temp = arr[pos+1][2];
   arr[pos+1][2] = arr[pos+2][1];
   arr[pos+2][1] = temp; 

   counter < 5 ? arr = arr.map(i => i.reverse()) : arr ;
   squares.push(arr)
   
   counter = counter+1
   generateMagicSquares(arr, counter);
  }

  s = flatten(s) 
  generateMagicSquares()

  for (let i = 0; i < squares.length; i++) {
   
  }
  

 return squares;
}
const matrix6 = [
[8,1,6],
[3,5,7],
[4,9,2]
];

solution(matrix6);