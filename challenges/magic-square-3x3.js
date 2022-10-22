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
  let middle = 5;
  let diff, cost = [];
  let current, sum = 0;

  const magicSquare = [
    [8,3,4],
    [1,5,9],
    [6,7,2]
  ];
  
 // HANDLE MIDDLE SQUARE
 if (s[1][1] !== magicSquare[1][1] ) {
  current = s[1][1];
  s[1][1] = magicSquare[1][1];
  diff = s[1][1] - current;
  cost.push(Math.abs(diff));
 };

  
  // Rotation
  const swap = (arr, pos = 0) => {

    [arr[pos][2], arr[pos+2][0]] = [arr[pos+2][0], arr[pos][2]];
     
    [arr[pos][1], arr[pos+1][0]] = [arr[pos+1][0], arr[pos][1]];
     
    [arr[pos+1][2], arr[pos+2][1]] = [arr[pos+2][1], arr[pos+1][2]];
 
     arr.map( i =>  i.reverse())
     cost.push(arr)
   
  }

 const flatten = (arr) => {
   let list = [];
   for (let i = 0; i < arr.length; i++) {
     if(Array.isArray(arr[i])) list = list.concat(flatten(arr[i]));
     else list.push(arr[i])
   }

  return list; 
 }
 swap(s)
 console.log(s)

 return cost;
}
const matrix6 = [
[8,1,6],
[3,5,7],
[4,9,2]
];

solution(matrix6);